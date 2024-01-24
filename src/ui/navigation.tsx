import { useEffect } from 'react';
import Link from 'next/link';

import { Menu } from 'antd';
import type { MenuProps, MenuTheme } from 'antd';
import { usePathname } from 'next/navigation';
import { menuInfo } from '@/lib/constants';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  key: React.Key,
  children?: MenuItem[],
  type?: 'group' | 'sub',
): MenuItem {
  let name = (key: any) => {
    if (type) {
      return menuInfo[key].nav;
    }
    return <Link href={key}>{menuInfo[key].nav}</Link>;
  };

  let getIcon = (key: any) => {
    const Icon = menuInfo[key].icon;
    return menuInfo[key].icon ? <Icon /> : null;
  };
  const label = name(key);
  const icon = getIcon(key);
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(
    'dashboard',
    [getItem('/'), getItem('/monitor'), getItem('/report')],
    'group',
  ),
  { type: 'divider' },
  getItem('tickets', [getItem('/ticket'), getItem('/ticket/setting')], 'group'),
  { type: 'divider' },
  getItem(
    'management',
    [
      getItem('/team'),
      getItem('/member'),
      getItem('/manager'),
      getItem('/counselor'),
      getItem('/message'),
      getItem('/answer'),
      getItem('/branch'),
      getItem('/roadshow'),
    ],
    'group',
  ),
  { type: 'divider' },
  getItem(
    'setting',
    [
      getItem(
        'general',
        [
          getItem('/general'),
          getItem('/general/auto'),
          getItem('/general/rank'),
          getItem('/general/abusive'),
        ],
        'sub',
      ),
      getItem('/operation'),
      getItem('/chatbot'),
      getItem(
        'event',
        [getItem('/event/time'), getItem('/event/instantly')],
        'sub',
      ),
    ],
    'group',
  ),
  { type: 'divider' },
];
const Navigation = ({ theme }: { theme: MenuTheme }) => {
  const pathname = usePathname();
  let defaultSelectedKeys: string[] = [];
  let defaultOpenKeys: string[] = [];

  const loop = (item: any) => {
    item.map((e: any) => {
      if (e.key !== undefined) {
        if (pathname === e.key) {
          const parentName = e.key.split('/')[1];
          defaultSelectedKeys.push(e.key);
          defaultOpenKeys.push(parentName);
        }
      }

      if (e.children) loop(e.children);
    });
  };

  const onOpenChange = (openKeys: string[]) => {
    defaultOpenKeys = [...defaultOpenKeys, ...openKeys];
  };

  useEffect(() => {
    loop(items);
  }, [pathname]);
  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={items}
      theme={theme}
    />
  );
};

export default Navigation;
