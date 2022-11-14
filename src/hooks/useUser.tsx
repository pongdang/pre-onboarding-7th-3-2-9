import { fetchUser } from '../apis/login/fetchUser';
import { useTokenContext } from '../context/TokenContext';

export default function useUser() {
  const { setAccessToken } = useTokenContext();

  return {
    login: async ({ email, password }: { email: string; password: string }) => {
      const { accessToken } = await fetchUser({ email, password });

      setAccessToken(accessToken);
    },
  } as const;
}
