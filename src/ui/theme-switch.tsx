import { useState } from 'react';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { changeTheme } from '@/lib/actions';

type themeType = {
  [key: string]: boolean;
};
const themeKey: themeType = {
  dark: true,
  light: false,
};

const ThemeSwitch = ({ theme }: any) => {
  const [checked, setChecked] = useState<boolean>(themeKey[theme]);

  const onChange = (bool: boolean) => {
    setChecked(bool);
    changeTheme(bool ? 'dark' : 'light');
  };

  return (
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      checked={checked}
      onChange={onChange}
      className="theme-switch"
    />
  );
};

export default ThemeSwitch;
