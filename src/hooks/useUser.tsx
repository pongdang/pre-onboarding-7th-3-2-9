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
