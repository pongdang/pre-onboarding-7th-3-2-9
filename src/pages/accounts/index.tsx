import { AccountList } from '../../components/accounts/AccountList';
import { SSRSuspense } from '../../components/SSRSuspense';

export default function AccontsPage() {
  return (
    <SSRSuspense fallback={<h1>로딩</h1>}>
      <AccountList />
    </SSRSuspense>
  );
}
