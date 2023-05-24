import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
publicRoutes: ["/", "/events(.*)"]
});


export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};