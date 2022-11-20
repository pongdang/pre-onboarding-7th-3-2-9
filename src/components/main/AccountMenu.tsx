import Link from 'next/link';

export function AccountMenu() {
  return (
    <>
      <Link href="/accounts">
        <a>계좌 목록</a>
      </Link>
      <ul>
        <Link href="/accounts">
          <a>투자 계좌</a>
        </Link>
      </ul>
    </>
  );
}
