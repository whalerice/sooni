'use client';

import Navigation from '@/ui/navigation';
import ThemeSwitch from '@/ui/theme-switch';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme, Button, Layout } from 'antd';
import { SiderTheme } from 'antd/es/layout/Sider';
import { CookieValueTypes, getCookie } from 'cookies-next';
import { menuInfo } from '@/lib/constants';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const themeMode: CookieValueTypes = getCookie('theme-mode');
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<SiderTheme>('light');

  useEffect(() => {
    setCurrentTheme(themeMode === 'dark' ? 'dark' : 'light');
  }, [themeMode, pathname]);

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={currentTheme}
      >
        <div style={{ height: token.Layout?.headerHeight }}>
          <Link href="/">logo</Link>
          {/* <Image src="/next.svg" width={100} height={30} alt="test" /> */}
        </div>
        <Navigation />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? '8rem' : '20rem' }}>
        <Header className={currentTheme}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: '4rem',
              height: '4rem',
            }}
          />
          <ThemeSwitch />
        </Header>
        <Content className="contents">
          <div className="page-title">{menuInfo[pathname].pageTitle}</div>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
