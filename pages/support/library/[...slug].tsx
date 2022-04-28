import Banner from '@components/banner';
import Search from '@components/search';
import SEO from '@components/seo';
import LibraryList from '@components/support/libraryList';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR from 'swr';

interface IProps {
  slug: string[];
}

const Library: NextPage<IProps> = ({ slug }) => {
  const [searchType, orderType, page, searchTerm] = slug;
  const { data } = useSWR(
    `libraryList/${searchType}/${orderType}/${page}/${searchTerm}`,
    () => boardApi.getLibraryeList(searchType, orderType, page, searchTerm)
  );

  console.log(data);
  return (
    <>
      <SEO title='지원센터' />
      <Banner title='지원센터 자료실' navList={['지원센터', '자료실']} />
      <Navigator supportCategory='library' />
      <Layout padding='pt-20 pb-24'>
        <Search />
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
