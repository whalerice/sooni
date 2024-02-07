import axios from 'axios';

const lang = 'ko-KR';
const instance = axios.create({
  // baseURL: process.env.url,
  baseURL: process.env.APIURL,
});

type SendParams = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: object;
  params?: object;
  isForm?: boolean;
  isRefreshToken?: boolean;
};

const send = async (options: SendParams) => {
  const { url, method, data, params, isForm } = options;
  try {
    const response = await instance.request({
      url,
      method,
      data,
      params: { language: lang, ...params },
      headers: {
        Authorization: `Bearer ${process.env.token}`,
        Accept: 'application/json',
        ...(isForm ? { 'Content-Type': 'multipart/form-data' } : {}),
      },
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw response;
    }

    return response.data;
  } catch (error: any) {
    if (error.response.data) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};
const request = {
  get: async (url: string, params?: object | undefined) =>
    await send({ url, method: 'GET', data: undefined, params }),
  post: async (
    url: string,
    data?: object | undefined,
    params?: object | undefined,
    isForm?: boolean,
  ) => await send({ url, method: 'POST', data, params, isForm }),
};

export const apis = {
  user: {
    login: (data: { loginId: any; password: any }) =>
      request.post('/user/login', data),
  },
  configuration: {
    details: () => request.get('/configuration'),
    languages: () => request.get('/configuration/languages'),
  },
  movie: {
    popular: (params?: any) => request.get('/movie/popular', params),
    airingToday: (params?: any) => request.get('/tv/airing_today', params),
  },
};
