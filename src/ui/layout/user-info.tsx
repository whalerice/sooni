import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

const items: MenuProps['items'] = [];

export default function UserInfo() {
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      dropdownRender={(menu) => <div>sdfsdf</div>}
    >
      <a onClick={(e) => e.preventDefault()}>관리자</a>
    </Dropdown>
  );
}
