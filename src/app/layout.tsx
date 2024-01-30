import clsx from 'clsx';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Registry from '@/theme/registry';
import { cookies } from 'next/headers';

const noto = Noto_Sans_KR({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOONi[suni:]',
  description: 'SOONi Admin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = cookies().get('theme-mode')?.value;
  return (
    <html lang="en">
      <body className={clsx(noto.className, 'antialiased', 'quantum')}>
        <Registry themeMode={mode}>{children}</Registry>
      </body>
    </html>
  );
}
