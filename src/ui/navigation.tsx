import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
  PieChartOutlined,
  TeamOutlined,
  FundViewOutlined,
  SearchOutlined,
  UserOutlined,
  UserAddOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  SolutionOutlined,
  StarOutlined,
  GiftOutlined,
  RobotOutlined,
  FieldTimeOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(
    '대시보드',
    '',
    null,
    [
      getItem(<Link href="/">실시간</Link>, '/', <DashboardOutlined />),
      getItem(
        <Link href="/monitor">모니터링</Link>,
        '/monitor',
        <FundViewOutlined />,
      ),
      getItem(
        <Link href="/report">리포트</Link>,
        '/report',
        <PieChartOutlined />,
      ),
    ],
    'group',
  ),
  { type: 'divider' },
  getItem(
    '티켓',
    '',
    null,
    [
      getItem(
        <Link href="/ticket">티켓 조회</Link>,
        '/ticket',
        <SearchOutlined />,
      ),
    ],
    'group',
  ),
  { type: 'divider' },
  getItem(
    '관리',
    '',
    null,
    [
      getItem(<Link href="/team">팀</Link>, '/team', <TeamOutlined />),
      getItem(
        <Link href="/member">팀원 관리</Link>,
        '/member',
        <UserAddOutlined />,
      ),
      getItem(
        <Link href="/admin">관리자</Link>,
        '/admin',
        <SolutionOutlined />,
      ),
      getItem(<Link href="/agent">상담사</Link>, '/agent', <UserOutlined />),
      getItem(
        <Link href="/message">챗봇 메세지</Link>,
        '/message',
        <CommentOutlined />,
      ),
      getItem(
        <Link href="/quick">빠른답변</Link>,
        '/quick',
        <ThunderboltOutlined />,
      ),
      getItem(
        <Link href="/branch">점포공감</Link>,
        '/branch',
        <ShopOutlined />,
      ),
      getItem(
        <Link href="/roadshow">로드쇼</Link>,
        '/roadshow',
        <StarOutlined />,
      ),
    ],
    'group',
  ),
  { type: 'divider' },
  getItem(
    '설정',
    '',
    null,
    [
      getItem('일반설정', 'general', <SettingOutlined />, [
        getItem(<Link href="/general">일반</Link>, '/general'),
        getItem(<Link href="/general/auto">자동화</Link>, '/general/auto'),
        getItem(<Link href="/general/rank">직급</Link>, '/general/rank'),
        getItem(
          <Link href="/general/abusive">욕설필터</Link>,
          '/general/abusive',
        ),
      ]),
      getItem(
        <Link href="/operation">운영 시간 설정</Link>,
        '/operation',
        <FieldTimeOutlined />,
      ),
      getItem(
        <Link href="/chatbot">챗봇 설정</Link>,
        '/chatbot',
        <RobotOutlined />,
      ),
      getItem('이벤트 설정', 'event', <GiftOutlined />, [
        getItem(<Link href="/event/time">타임 이벤트</Link>, '/event/time'),
        getItem(
          <Link href="/event/instantly">즉시 이벤트</Link>,
          '/event/instantly',
        ),
      ]),
      getItem(
        <Link href="/ticket/setting">티켓 설정</Link>,
        '/ticket/setting',
        <ProfileOutlined />,
      ),
    ],
    'group',
  ),
  { type: 'divider' },
];
const Navigation = () => {
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
    />
  );
};

export default Navigation;
