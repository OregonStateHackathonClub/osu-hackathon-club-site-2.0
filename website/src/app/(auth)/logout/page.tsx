import { getCurrentSession, invalidateSession, deleteSessionTokenCookie } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
	return (
		<form action={logout}>
			<button>Sign out</button>
		</form>
	);
}

async function logout(): Promise<ActionResult> {
	"use server";
	const { session } = await getCurrentSession();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await invalidateSession(session.id);
	await deleteSessionTokenCookie();
	return redirect("/login");
}

interface ActionResult {
	error: string | null;
}