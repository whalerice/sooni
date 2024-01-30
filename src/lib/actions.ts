'use server';

import { cookies } from 'next/headers';

export async function changeTheme(value: string) {
  cookies().set('theme-mode', value);
}

export async function getTheme() {
  const mode = cookies().get('theme-mode')?.value;
  return mode;
}
