import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
 
  publicRoutes: ['/'], //homepage

  
});
 
export const config = {
 
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};