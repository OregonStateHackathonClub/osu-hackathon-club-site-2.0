import { validateSessionToken } from "@/lib/auth/session";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
	const token = request.cookies.get("session")?.value ?? null;
	if (token === null) {
		return new Response(null, {
			status: 401
		});
	}

	const { session } = await validateSessionToken(token);
	if (session === null) {
		return new Response(null, {
			status: 401
		});
	}

	return new Response(null, {
    status: 200
  })
}