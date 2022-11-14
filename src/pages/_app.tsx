import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { MainLayout } from '../components/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary, RenderFallbackProps } from '../components/error/ErrorBoundary';
import { TokenContextProvider } from '../context/TokenContext';
import { ErrorAlert } from '../components/ErrorAlert';

const queryClient = new QueryClient();

function RenderFallback({ error, children, reset }: RenderFallbackProps) {
  return (
    <>
      <ErrorAlert errorMessage={error.message} reset={reset} />
      {children}
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary renderFallback={RenderFallback}>
        <QueryClientProvider client={queryClient}>
          <TokenContextProvider>
            <GlobalStyle />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </TokenContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
