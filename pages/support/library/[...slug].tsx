import Banner from '@components/banner';
import Search from '@components/search';
import SEO from '@components/seo';
import LibraryList from '@components/support/libraryList';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  slug: string[];
}

const Library: NextPage<IProps> = ({ slug }) => {
  const { text } = useLocale();
  const router = useRouter();
  const { locale } = router;
  const [searchType, orderType, page, searchTerm] = slug;
  const { data } = useSWR(
    `${locale}/libraryList/${searchType}/${orderType}/${page}/${searchTerm}`,
    () =>
      boardApi.getLibraryeList(locale, searchType, orderType, page, searchTerm)
  );
  return (
    <>
      <SEO title='지원센터' />
      <Banner
        title={text.supportStoryHeader['1']}
        navList={[text.supportStoryHeader['2'], text.supportStoryHeader['6']]}
      />
      <Navigator supportCategory='library' />
      <Layout padding='pt-20 pb-24'>
        <Search url='library' />
        <LibraryList data={data} totalItems={data?.count} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      slug: ctx.params?.slug,
    },
  };
};

export default Library;
