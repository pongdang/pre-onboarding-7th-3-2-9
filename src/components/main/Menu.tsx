import styled from '@emotion/styled';
import Link from 'next/link';

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
        <li>
          <a>로그아웃</a>
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
