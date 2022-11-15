import { post } from './axiosInstance';
interface FetchedUser {
  user: { email: string; id: number };
  accessToken: string;
}
export const userLogin = async ({ email, password }: { email: string; password: string }) => {
  const { data } = await post<FetchedUser>({
    url: '/api/login',
    data: { email, password },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
