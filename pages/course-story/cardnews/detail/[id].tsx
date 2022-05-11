import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { trimDate } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  id: string;
}

const CardNewsDetail: NextPage<IProps> = ({ id }) => {
  const router = useRouter();
  const { locale } = router;
  const { data } = useSWR(`${locale}/cardNewsDetail`, () =>
    boardApi.getCardNewsDetail(locale, id)
  );
  return (
    <>
      <SEO title='카드뉴스' />
      <Banner title='연수이야기' navList={['연수이야기', '카드뉴스']} />
      <MenuBar pageName='카드뉴스' />
      <Layout bgColor='bg-[#f4f9fb]' padding='py-14 md:py-8'>
        {data?.created && (
          <div className='text-center font-bold'>
            {trimDate(data?.created, 0, 10)}
          </div>
        )}

        <div className='mt-4 text-center text-[1.875rem] font-medium'>
          {data?.name}
        </div>
      </Layout>

      <Layout padding='py-20 md:py-8'>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />

        <Link href='/course-story/cardnews/1'>
          <a className='mt-6 flex h-[2.8rem] w-[6.5rem] items-center justify-center rounded-lg border border-[#6b6b6b] text-lg font-medium text-[#6b6b6b] transition-all hover:opacity-70 md:mt-20 md:h-8 md:w-[4.7rem] md:text-sm'>
            목록보기
          </a>
        </Link>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};

export default CardNewsDetail;
