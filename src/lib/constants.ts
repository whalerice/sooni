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

export const agentRouter: MenuListType[] = [
  {
    type: 'group',
    label: '대시보드',
  },
  {
    path: '/agent',
    label: '대시보드',
    page: '대시보드',
    icon: DashboardOutlined,
  },
  {
    type: 'group',
    label: '티켓',
  },
  {
    path: '/agent/ticket',
    label: '나의 티켓',
    page: '나의 티켓',
    icon: ProfileOutlined,
  },
  {
    type: 'group',
    label: '관리',
  },
  {
    path: '/agent/answer',
    label: '빠른답변',
    page: '빠른답변',
    icon: ThunderboltOutlined,
  },
  {
    path: '/agent/branch',
    label: '점포공감',
    page: '점포공감',
    icon: ShopOutlined,
  },
  {
    path: '/agent/roadshow',
    label: '로드쇼',
    page: '로드쇼',
    icon: StarOutlined,
  },
];

export const router: MenuListType[] = [
  {
    type: 'group',
    label: '대시보드',
  },
  {
    path: '/admin',
    label: '실시간',
    page: '대시보드 - 실시간',
    icon: DashboardOutlined,
  },
  {
    path: '/admin/monitor',
    label: '모니터링',
    page: '모니터링',
    icon: FundViewOutlined,
  },
  {
    path: '/admin/report',
    label: '리포트',
    page: '리포트',
    icon: PieChartOutlined,
  },
  { type: 'divider' },
  {
    type: 'group',
    label: '티켓',
  },
  {
    path: '/admin/ticket',
    label: '티켓 조회',
    page: '티켓 조회',
    icon: SearchOutlined,
  },
  {
    path: '/admin/ticket/setting',
    label: '티켓 설정',
    page: '티켓 설정',
    icon: ProfileOutlined,
  },
  { type: 'divider' },
  {
    type: 'group',
    label: '관리',
  },
  {
    path: '/admin/team',
    label: '팀',
    page: '팀',
    icon: TeamOutlined,
  },
  {
    path: '/admin/member',
    label: '팀원 관리',
    page: '팀원 관리',
    icon: UserAddOutlined,
  },
  {
    path: '/admin/manager',
    label: '관리자',
    page: '관리자',
    icon: SolutionOutlined,
  },
  {
    path: '/admin/counselor',
    label: '상담사',
    page: '상담사',
    icon: UserOutlined,
  },
  {
    path: '/admin/message',
    label: '챗봇 메세지',
    page: '챗봇 메세지',
    icon: CommentOutlined,
  },
  {
    path: '/admin/answer',
    label: '빠른답변',
    page: '빠른답변',
    icon: ThunderboltOutlined,
  },
  {
    path: '/admin/branch',
    label: '점포공감',
    page: '점포공감',
    icon: ShopOutlined,
  },
  {
    path: '/admin/roadshow',
    label: '로드쇼',
    page: '로드쇼',
    icon: StarOutlined,
  },
  { type: 'divider' },
  {
    type: 'group',
    label: '설정',
  },
  {
    label: '일반 설정',
    icon: SettingOutlined,
    children: [
      {
        path: '/admin/general',
        label: '일반',
        page: '일반',
      },
      {
        path: '/admin/general/auto',
        label: '자동화',
        page: '자동화',
      },
      {
        path: '/admin/general/rank',
        label: '직급',
        page: '직급',
      },
      {
        path: '/admin/general/abusive',
        label: '욕설필터',
        page: '욕설필터',
      },
    ],
  },
  {
    path: '/admin/operation',
    label: '운영 시간 설정',
    page: '운영 시간 설정',
    icon: FieldTimeOutlined,
  },
  {
    path: '/admin/chatbot',
    label: '챗봇 설정',
    page: '챗봇 설정',
    icon: RobotOutlined,
  },
  {
    label: '타임 이벤트',
    page: '타임 이벤트',
    icon: GiftOutlined,
    children: [
      {
        path: '/admin/event/time',
        label: '타임 이벤트',
        page: '타임 이벤트',
      },
      {
        path: '/admin/event/instantly',
        label: '즉시 이벤트',
        page: '즉시 이벤트',
      },
    ],
  },
];
