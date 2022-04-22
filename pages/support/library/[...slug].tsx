import Banner from '@components/banner';
import Search from '@components/search';
import SEO from '@components/seo';
import LibraryList from '@components/support/libraryList';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  params: string[];
}

const Library: NextPage<IProps> = ({ params }) => {
  const [orderType, searchType, page, search] = params;
  // console.log(orderType, searchType, page, search);
  return (
    <>
      <SEO title='지원센터' />
      <Banner title='지원센터 자료실' navList={['지원센터', '자료실']} />
      <Navigator supportCategory='library' />
      <Layout padding='pt-20 pb-24'>
        <Search />
        <LibraryList data={[0, 1]} totalItems={200} currentPage={+page} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params?.slug,
    },
  };
};

export default Library;
