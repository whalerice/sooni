'use client';

import Navigation from '@/ui/navigation';
import ThemeSwitch from '@/ui/theme-switch';

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme, Button, Layout } from 'antd';
import { menuInfo } from '@/lib/constants';
import clsx from 'clsx';

const { Header, Content, Sider } = Layout;

const MainLayout = ({
  children,
  themeMode,
}: {
  children: React.ReactNode;
  themeMode: any;
}) => {
  const pathname = usePathname();
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} theme={themeMode}>
        <div style={{ height: token.Layout?.headerHeight }} className="logo">
          <Link href="/" scroll={false}>
            logo
          </Link>
          {/* <Image src="/next.svg" width={100} height={30} alt="test" /> */}
        </div>
        <Navigation theme={themeMode} />
      </Sider>
      {/* style={{ marginLeft: collapsed ? '8rem' : '20rem' }} */}
      <Layout className={clsx('container', themeMode)}>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="btn-collapse"
          />
          <ThemeSwitch theme={themeMode} />
        </Header>
        <Content>
          <div className="page-title">{menuInfo[pathname].pageTitle}</div>
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default MainLayout;
