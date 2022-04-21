import Banner from '@components/banner';
import Search from '@components/search';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import NoticeList from '@components/support/noticeList';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  slugs: string[];
}

const Notice: NextPage<IProps> = ({ slugs }) => {
  const [searchType, orderType, page, searchTerm] = slugs;

  // console.log(orderType, searchType, page, searchTerm);
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='지원센터 공지사항' navList={['지원센터', '공지사항']} />
      <Navigator supportCategory='notice' />
      <Layout padding='pt-20 pb-24'>
        <Search />
        <NoticeList data={[0, 1]} totalItems={200} currentPage={+page} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      slugs: ctx.params?.slug,
    },
  };
};

export default Notice;
