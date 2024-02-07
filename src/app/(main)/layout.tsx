import { getTheme } from '@/lib/actions';
import MainLayout from '@/ui/layout/main-layout';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = await getTheme();

  return (
    <>
      <MainLayout themeMode={mode}>{children}</MainLayout>
    </>
  );
}
