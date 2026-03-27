import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api, /_next, /static, favicon, images, seo, fonts, videos
    "/((?!api|_next|.*\\..*).*)",
  ],
};
