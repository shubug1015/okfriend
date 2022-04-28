import Banner from '@components/banner';
import Search from '@components/search';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import NoticeList from '@components/support/noticeList';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR from 'swr';

interface IProps {
  slug: string[];
}

const Notice: NextPage<IProps> = ({ slug }) => {
  const [searchType, orderType, page, searchTerm] = slug;
  const { data } = useSWR(
    `noticeList/${searchType}/${orderType}/${page}/${searchTerm}`,
    () => boardApi.getNoticeList(searchType, orderType, page, searchTerm)
  );
  return (
    <>
      <SEO title='지원센터' />
      <Banner title='지원센터 공지사항' navList={['지원센터', '공지사항']} />
      <Navigator supportCategory='notice' />
      <Layout padding='pt-20 pb-24'>
        <Search />
        <NoticeList data={data} totalItems={data?.count} />
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

export default Notice;
