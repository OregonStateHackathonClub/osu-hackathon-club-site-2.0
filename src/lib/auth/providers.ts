import { Google } from "arctic";

// https://arcticjs.dev/providers/google

export const google = new Google(
	process.env.GOOGLE_CLIENT_ID!,
	process.env.GOOGLE_CLIENT_SECRET!,
	"https://beaverhacks.org/api/login/callback"
);