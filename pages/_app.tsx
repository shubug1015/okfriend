import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@layouts/layout';
import { SWRConfig } from 'swr';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default appWithTranslation(MyApp);
