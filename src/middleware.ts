import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.includes("/_next/") || pathname.includes("/static/")) {
    return NextResponse.next();
  }

  if (pathname.includes("/version-history")) {
    return NextResponse.redirect(
      "https://joogps.notion.site/Version-history-657cef63fada49b48c29819ddfe6da73?pvs=4",
    );
  }

  if (pathname.includes("/privacy-policy")) {
    return NextResponse.redirect(
      new URL(`/privacy`, req.url)
    );
  }

  const hostname = req.headers.get("host");
  const subdomain = hostname?.match(/^([^.]+)\./)?.[1];

  switch (true) {
    case subdomain?.startsWith("push"):
    case subdomain?.startsWith("pushr"):
      return NextResponse.rewrite(
        new URL(`/push${req.nextUrl.pathname}`, req.url),
      );
    case subdomain?.startsWith("magic"):
      return NextResponse.rewrite(
        new URL(`/magic${req.nextUrl.pathname}`, req.url),
      );
    default:
      return NextResponse.next();
  }
}
