import { NextRequest, NextResponse } from "next/server";
import { getAutheticatedUser } from "@/utils/amplify-utils";

const PUBLIC_ROUTES = ["/", "/login", "/catalog"];
const PROTECTED_ROUTES = ["/admin"];

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.includes(pathname);
}

function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  const user = await getAutheticatedUser({
    request,
    response,
  });

  const hasValidSession = Boolean(user);

  if (isPublicRoute(pathname)) {
    if (hasValidSession && pathname === "/login") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return response;
  }

  if (!hasValidSession && isProtectedRoute(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication pages)
     * - public assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
