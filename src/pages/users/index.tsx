import { SSRSuspense } from '../../components/SSRSuspense';
import { UserList } from '../../components/users/UserList';

export default function UsersPage() {
  return (
    <SSRSuspense fallback={<h1>로딩</h1>}>
      <UserList />
    </SSRSuspense>
  );
}
