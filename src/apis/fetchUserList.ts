import { UserAccount } from '../model/User';
import { get } from './axiosInstance';

export const fetchUserList = async ({ accessToken }: { accessToken: string }) => {
  const { data } = await get<UserAccount[]>({
    url: '/api/accounts',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};
