import { MappingAlgorithm } from 'antd';

export {};

declare global {
  type ThemeAntModeType = {
    [key: string]: MappingAlgorithm;
  };

  type ThemeStringModeType = {
    [key: string]: string;
  };

  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      CHAT_URL: string;
      WS_URL: string;
    }
  }
}
