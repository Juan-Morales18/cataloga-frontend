import { NextRequest, NextResponse } from "next/server";
import { getSessionServer } from "@/utils/amplify-utils";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  const session = await getSessionServer({
    request,
    response,
  });

  console.log("Session: ", JSON.stringify(session, null, 2));

  const isSession = session && session.tokens?.accessToken;

  if (isSession && pathname === "/login") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (
    !isSession &&
    pathname !== "/login" &&
    pathname !== "/" &&
    pathname !== "/catalog"
  ) {
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
