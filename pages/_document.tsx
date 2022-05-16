import Document, { Head, Html, Main, NextScript } from 'next/document';
import { NextRouter } from 'next/router';

interface WithRouterProps {
  router: NextRouter;
}

interface IProps extends WithRouterProps {}

class CustomDocument extends Document<IProps> {
  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
