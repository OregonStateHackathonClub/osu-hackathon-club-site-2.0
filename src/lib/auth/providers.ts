import { Google } from "arctic";

// https://arcticjs.dev/providers/google

const redirectURI = process.env.NODE_ENV === "production"
  ? "https://beaverhacks.org/api/login/callback"
  : "http://localhost:3000/api/login/callback";

export const google = new Google(
	process.env.GOOGLE_CLIENT_ID!,
	process.env.GOOGLE_CLIENT_SECRET!,
	redirectURI
);