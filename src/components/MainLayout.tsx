import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Footer } from './main/Footer';
import { Header } from './main/Header';
import { Menu } from './main/Menu';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <Menu />
      <section>
        <Header title="현재 페이지 명 / 로그인 사용자명" />
        <main>{children}</main>
        <Footer />
      </section>
    </Layout>
  );
}

const Layout = styled.article`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  border: 1px solid;
  grid-template-columns: 200px 1fr;
  min-height: 100vh;

  section {
    border: 1px solid;

    display: flex;
    flex-direction: column;

    header {
      background-color: skyblue;
    }

    main {
      background-color: pink;
      flex-grow: 1;
    }
  }
`;
