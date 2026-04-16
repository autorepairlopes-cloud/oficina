import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /pt, /en, /es to /
  if (
    pathname.startsWith('/pt') ||
    pathname.startsWith('/en') ||
    pathname.startsWith('/es')
  ) {
    const newPath = pathname.replace(/^\/(pt|en|es)/, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
