import { generateSessionToken, createSession, setSessionTokenCookie } from "@/lib/auth/session";
import { google } from "@/lib/auth/providers";
import { cookies } from "next/headers";
import { decodeIdToken } from "arctic";
import { prisma } from "@/lib/prisma";

import type { OAuth2Tokens } from "arctic";

type GoogleClaims = {
	sub: string
	name: string
	email: string
}

export async function GET(request: Request): Promise<Response> {
	const url = new URL(request.url);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const cookieStore = cookies();
	const storedState = cookieStore.get("google_oauth_state")?.value ?? null;
	const codeVerifier = cookieStore.get("google_code_verifier")?.value ?? null;

	if (code === null || state === null || storedState === null || codeVerifier === null) {
		return new Response(null, {
			status: 400
		});
	}
	if (state !== storedState) {
		return new Response(null, {
			status: 400
		});
	}

	let tokens: OAuth2Tokens;
	try {
		tokens = await google.validateAuthorizationCode(code, codeVerifier);
	} catch (e) {
		console.log(e)
		// Invalid code or client credentials
		return new Response(null, {
			status: 400
		});
	}

	const { sub: googleUserId, name, email } = decodeIdToken(tokens.idToken()) as GoogleClaims;

	const existingUser = await prisma.user.findUnique({
		where: {
			googleId: googleUserId
		}
	});

	if (existingUser !== null) {
		const sessionToken = generateSessionToken();
		const session = await createSession(sessionToken, existingUser.id);
		await setSessionTokenCookie(sessionToken, session.expiresAt);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/profile"
			}
		});
	}

	const user = await prisma.user.create({
		data: {
			googleId: googleUserId,
			email,
			name,
		}
	})

	const sessionToken = generateSessionToken();
	const session = await createSession(sessionToken, user.id);
	await setSessionTokenCookie(sessionToken, session.expiresAt);
	return new Response(null, {
		status: 302,
		headers: {
			Location: "/profile"
		}
	});
}