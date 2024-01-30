'use server';

import { cookies } from 'next/headers';
// import { setCookie } from 'cookies-next';

// export const darkMode: CookieValueTypes = getCookie('dark-mode');

export async function themeModeAction(value: string) {
  console.log('themeModeAction', value);
  cookies().set('theme-mode', value);
  // setCookie('theme-mode', value, { cookies });
}
