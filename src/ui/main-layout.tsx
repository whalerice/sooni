'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme, Button, Layout } from 'antd';
import { SiderTheme } from 'antd/es/layout/Sider';
import { CookieValueTypes, getCookie } from 'cookies-next';

import Navigation from '@/ui/navigation';
import ThemeSwitch from '@/ui/theme-switch';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const themeMode: CookieValueTypes = getCookie('theme-mode');
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<SiderTheme>('light');

  useEffect(() => {
    setCurrentTheme(themeMode === 'dark' ? 'dark' : 'light');
  }, [themeMode]);

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        theme={currentTheme}
      >
        <div style={{ height: token.Layout?.headerHeight }}>
          <Image src="/next.svg" width={100} height={30} alt="test" />
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
        <Content style={{ padding: '1.5rem' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
