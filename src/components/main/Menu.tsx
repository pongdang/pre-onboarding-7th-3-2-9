import styled from '@emotion/styled';
import Link from 'next/link';
import { AccountMenu } from './AccountMenu';
import { LogoutMenu } from './LogoutMenu';

export function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <AccountMenu />
        </li>
        <li>
          <Link href="/users">
            <a>사용자</a>
          </Link>
        </li>
        <li>
          <LogoutMenu />
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.aside`
  aside {
    background-color: gray;
  }
`;
