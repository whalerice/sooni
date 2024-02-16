import Link from 'next/link';
import { GetProp, Menu, MenuProps, MenuTheme } from 'antd';
import { usePathname } from 'next/navigation';

import { agentRouter, router } from '@/lib/constants';
import { useEffect } from 'react';

type MenuItem = GetProp<MenuProps, 'items'>[number];

// const items: MenuItem[] = [];

// 메뉴 타입 정의 다시 하기
type NavListType = {
  [key: string]: MenuListType[];
};

const navList: NavListType = {
  super: router,
  admin: router,
  agent: agentRouter,
};

const title = (item: any) => {
  return item.path ? <Link href={item.path}>{item.label}</Link> : item.label;
};

const icon = (item: any) => {
  const Icon = item;
  return !item ? null : <Icon />;
};

const child = (items: any) => {
  return items.map((item: any) => ({
    key: item.path,
    label: title(item),
  }));
};

function getMenu(role: any) {
  const items: MenuItem[] = navList[role].map((item: any) => ({
    key: item.type ? null : item.path,
    label: title(item),
    icon: icon(item.icon),
    type: item.type,
    children: item.children ? child(item.children) : null,
  }));
  return items;
}

// const onClick: MenuProps['onClick'] = (e) => {
//   console.log('click ', e);
// };

const Navigation = ({ theme, role }: { theme: MenuTheme; role: string }) => {
  const pathname = usePathname();
  let defaultSelectedKeys: string[] = [];
  let defaultOpenKeys: string[] = [];

  const loop = (item: any) => {
    // 선택된 메뉴 다시 스크립트 작성하기
    item.map((e: any) => {
      if (e.key !== undefined) {
        if (pathname === e.key) {
          console.log(e);

          // const parentName = e.key.split('/')[1];
          // defaultSelectedKeys.push(e.key);
          // defaultOpenKeys.push(parentName);
        }
      }

      if (e.children) loop(e.children);
    });
  };

  const onOpenChange = (openKeys: string[]) => {
    defaultOpenKeys = [...defaultOpenKeys, ...openKeys];
  };

  useEffect(() => {
    loop(navList[role]);

    // console.log(defaultSelectedKeys);
    // console.log(defaultOpenKeys);
  }, [pathname]);

  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={getMenu(role)}
      theme={theme}
    />
  );
};

export default Navigation;
