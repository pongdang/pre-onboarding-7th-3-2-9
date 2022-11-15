import { useUserLogout } from '../../hooks/useUser';

export function LogoutMenu() {
  const { logout } = useUserLogout();
  return (
    <li onClick={logout}>
      <button>로그아웃</button>
    </li>
  );
}
