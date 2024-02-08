import { NextResponse, NextRequest } from 'next/server';
import { auth } from '@/auth';
import { getGrade, getTheme } from '@/lib/actions';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const theme = await getTheme();
  let response = NextResponse.redirect(request.url);

  if (!theme) {
    response.cookies.set('theme-mode', 'light');
    return response;
  }

  const path = request.nextUrl.pathname;

  const session = await auth();
  const grade = await getGrade();

  console.log('session', session);

  if (!session && path !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (session && path === '/login') {
    const url = `/${grade}`;
    return NextResponse.redirect(new URL(url, request.url));
  } else if (session && path === '/') {
    const url = `/${grade}`;
    return NextResponse.redirect(new URL(url, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
