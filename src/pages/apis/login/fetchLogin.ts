import { post } from '../axiosInstance';

export const fetchLogin = async ({ email, password }: { email: string; password: string }) => {
  const data = await post({
    url: '/api/login',
    data: { email, password },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
