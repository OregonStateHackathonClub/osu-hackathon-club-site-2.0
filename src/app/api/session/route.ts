import { validateSessionToken, SessionValidationResult } from "@/lib/auth/session";

import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { cache } from "react";

export async function GET(request: NextRequest): Promise<Response> {
	const token = request.cookies.get("session")?.value ?? null;
	if (token === null) {
		return new Response(null, {
			status: 401
		});
	}

	const { session, user } = await validateSessionToken(token);
	if (session === null) {
		return new Response(null, {
			status: 401
		});
	}

	return new Response(null, {
    status: 200
  })
}

export const getCurrentSession = cache(async (): Promise<SessionValidationResult> => {
    const cookieStore = cookies();
    const token = cookieStore.get("session")?.value ?? null;
    if (token === null) {
      return { session: null, user: null };
    }
    const result = await validateSessionToken(token);
    return result;
});