import Link from 'next/link';
import { ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <aside>
        <ul>
          <li>
            <Link href="/">
              <a>계좌목록</a>
            </Link>
          </li>
          <li>
            <Link href="/user">
              <a>사용자</a>
            </Link>
          </li>
          <li>
            <a>로그아웃</a>
          </li>
        </ul>
      </aside>
      <header>현재 페이지 명 / 로그인 사용자명</header>
      <main>{children}</main>
      <footer>Copyright ⓒ December and Company Inc.</footer>
    </>
  );
}
