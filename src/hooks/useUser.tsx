import { useQuery } from '@tanstack/react-query';
import { fetchUserList } from '../apis/fetchUserList';
import { userLogin } from '../apis/userLogin';
import { useTokenContext } from '../context/TokenContext';

export function useUserLogin() {
  const { setAccessToken } = useTokenContext();

  return {
    login: async ({ email, password }: { email: string; password: string }) => {
      const { accessToken } = await userLogin({ email, password });

      setAccessToken(accessToken);
    },
  } as const;
}

export function useUserLogout() {
  const { clearAccessToken } = useTokenContext();

  return {
    logout: () => {
      clearAccessToken();
    },
  };
}

export function useUserAccountList() {
  const { accessToken } = useTokenContext();

  const { data: accountList } = useQuery(['getUserList'], () => fetchUserList({ accessToken }), {
    suspense: true,
  });

  return accountList;
}
