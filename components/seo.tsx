import Head from 'next/head';

interface SEOProps {
  title: string;
}

export default function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>{title} | OKFriend</title>
    </Head>
  );
}
