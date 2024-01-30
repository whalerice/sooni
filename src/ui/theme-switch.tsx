import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { themeModeAction } from '@/lib/actions';

type themeType = {
  [key: string]: boolean;
};
const themeKey: themeType = {
  dark: true,
  light: false,
};

const ThemeSwitch = ({ theme }: any) => {
  const [checked, setChecked] = useState<boolean>(themeKey[theme]);

  const onChange = async (bool: boolean) => {
    console.log('bool', bool);

    setChecked(bool);
    await themeModeAction(bool ? 'dark' : 'light');
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
