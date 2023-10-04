import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/faith",
    "/contact-us",
    "/english-ministry",
    "/amharic-ministry",
    "/sign-in",
    "/sign-out",
    "/resources/blog",
    "/contact-us",
    "/api/store-email",
    "/api/text/receive",
    "/api/text/notification",
    "/api/payments/webhook",
    "/api/payments/info",
],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
