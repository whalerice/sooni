import { NextResponse, NextRequest } from 'next/server';
import { auth } from '@/auth';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let theme = request.cookies.get('theme-mode')?.value;
  let response = NextResponse.redirect(request.url);

  if (!theme) {
    response.cookies.set('theme-mode', 'light');
    return response;
  }

  const path = request.nextUrl.pathname;
  const session = await auth();

  if (!session && path !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (session && path === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
