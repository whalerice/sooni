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

  const session = await auth();

  // const path = request.nextUrl.pathname;
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // else if (session && (path === '/login' || path === '/signup')) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    // '/login',
    // '/main/:path*',
    // '/ticket/:path*',
    // '/branch/:path*',
    // '/chatbot/:path*',
    // '/general/:path*',
    // '//:path*',
    // '//:path*',
    // '//:path*',
    // '//:path*',
    // '//:path*',
    // '//:path*',
  ],
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico (favicon file)
  //    */
  //   {
  //     source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
  //     missing: [
  //       { type: 'header', key: 'next-router-prefetch' },
  //       { type: 'header', key: 'purpose', value: 'prefetch' },
  //     ],
  //   },
  // ],
  // matcher: ['/', '/ticket/:path*', '/(.*)/:path*'],
  // matcher: '/api/:function*',
  //   matcher: '/about/:path*',
  // matcher: '/:path*',
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
