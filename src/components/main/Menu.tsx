import styled from '@emotion/styled';
import Link from 'next/link';
import { LogoutMenu } from './LogoutMenu';

export function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>계좌목록</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>사용자</a>
          </Link>
        </li>
        <LogoutMenu />
      </ul>
    </Container>
  );
}

const Container = styled.aside`
  aside {
    background-color: gray;
  }
`;
