import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { MainLayout } from '../components/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
