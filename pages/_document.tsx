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
          {/* GA Code */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=AW-10924881447'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  
                  gtag('config', 'AW-10924881447');
              `,
            }}
          />
          {/* Meta Pixel Code */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1744499149226342');
fbq('track', 'PageView');
              `,
            }}/>
          <noscript dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src=“https://www.facebook.com/tr?id=1744499149226342&ev=PageView&noscript=1”/>`,
          }}/>
          {/* Kakao Pixel Code */}
          <script async={false} type="text/javascript" charSet="UTF-8" src="https://t1.daumcdn.net/adfit/static/kp.js"/>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                  kakaoPixel('2533108682017256385').pageView();
              `,
            }}
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
