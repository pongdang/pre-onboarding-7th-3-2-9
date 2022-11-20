import { useUserLogout } from '../../hooks/useUser';

export function LogoutMenu() {
  const { logout } = useUserLogout();
  return <button onClick={logout}>로그아웃</button>;
}
