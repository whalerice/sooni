import { NextResponse, NextRequest } from 'next/server';
// import { apis } from './lib/apis';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('bb');

  let theme = request.cookies.get('theme-mode')?.value;
  // let response = NextResponse.redirect(request.url);
  let response = NextResponse.next();

  if (!theme) {
    response.cookies.set('theme-mode', 'light');
    return response;
  }

  try {
    const response = await fetch(`${process.env.url}/authentication`, {
      method: 'GET',
      credentials: 'include',
      headers: { Authorization: `Bearer ${process.env.token}` },
    });

    // const response = await apis.authentication();

    if (response.status === 200) return NextResponse.next();
    else console.log(response.status);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
  //   matcher: '/about/:path*',
  // matcher: '/',
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
