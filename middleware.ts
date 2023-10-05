import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/faith",
    "/english-ministry",
    "/amharic-ministry",
    "/sign-in",
    "/sign-out",
    "/resources/blog",
    "/about",
    "/api/store-email",
    "/api/text/receive",
    "/api/text/notification",
    "/api/payments/webhook",
    "/api/payments/info",
    "/api/text/register",
    "/login"
],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
