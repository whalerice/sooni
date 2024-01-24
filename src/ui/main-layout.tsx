'use client';

import Navigation from '@/ui/navigation';
import ThemeSwitch from '@/ui/theme-switch';

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme, Button, Layout } from 'antd';
import { SiderTheme } from 'antd/es/layout/Sider';
import { CookieValueTypes, getCookie } from 'cookies-next';
import { menuInfo } from '@/lib/constants';
import clsx from 'clsx';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const themeMode: CookieValueTypes = getCookie('theme-mode');
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<SiderTheme>('light');

  useEffect(() => {
    setCurrentTheme(themeMode === 'dark' ? 'dark' : 'light');
  }, [themeMode]);

  return (
    // <Layout hasSider>
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={currentTheme}
      >
        <div style={{ height: token.Layout?.headerHeight }} className="logo">
          <Link href="/">logo</Link>
          {/* <Image src="/next.svg" width={100} height={30} alt="test" /> */}
        </div>
        <Navigation theme={currentTheme} />
      </Sider>
      {/* style={{ marginLeft: collapsed ? '8rem' : '20rem' }} */}
      <Layout className={clsx('container', currentTheme)}>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="btn-collapse"
          />
          <ThemeSwitch />
        </Header>
        <Content>
          <div className="page-title">{menuInfo[pathname].pageTitle}</div>
          {children}
        </Content>
      </Layout>
    </>
    // </Layout>
  );
};

export default MainLayout;
