import { NextResponse, type NextRequest } from "next/server";

type Locale = "es" | "fr";
const isLocale = (value: string | null | undefined): value is Locale =>
  value === "es" || value === "fr";

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("platypool-locale")?.value;
  if (isLocale(saved)) return saved;
  return request.headers.get("accept-language")?.toLowerCase().startsWith("fr")
    ? "fr"
    : "es";
}

export function proxy(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const candidate = segments[0];

  if (isLocale(candidate)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${segments.slice(1).join("/")}` || "/";

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-platypool-locale", candidate);

    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    response.cookies.set("platypool-locale", candidate, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = request.nextUrl.pathname === "/"
    ? `/${locale}`
    : `/${locale}${request.nextUrl.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|media|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
