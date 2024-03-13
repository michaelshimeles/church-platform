import { auth, clerkClient } from "@clerk/nextjs";

export async function googleAuth() {
  try {
    const { userId } = auth();

    console.log("userId", userId)
    if (!userId) {
      console.error('Invalid or missing resource ID.');
      return "Unauthorized: Invalid Resource ID";
    }

    const [OauthAccessToken] = await clerkClient.users.getUserOauthAccessToken(
      userId!,
      "oauth_google"
    );

    if (!OauthAccessToken) {
      console.error("No OAuth access token found for the user.");
      return "Unauthorized: No Token";
    }

    const { token } = OauthAccessToken;

    if (!token) {
      console.error("OAuth access token retrieval failed.");
      return "Unauthorized: Token Retrieval Error";
    }

    console.log("Authenticated successfully.");
    return;
  } catch (error) {
    console.log("Error", error);
    return "Internal Error";
  }
}
