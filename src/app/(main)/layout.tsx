import { getTheme } from '@/lib/actions';
import MainLayout from '@/ui/main-layout';
// import { cookies } from 'next/headers';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const mode = cookies().get('theme-mode')?.value;
  const mode = await getTheme();

  return (
    <>
      <MainLayout themeMode={mode}>{children}</MainLayout>
    </>
  );
}
