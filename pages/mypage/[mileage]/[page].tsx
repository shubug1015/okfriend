import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { mypageApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { useUser } from '@libs/client/useUser';
import { trimDate } from '@libs/client/utils';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Mileage: NextPage<IProps> = ({ page }) => {
  const { text } = useLocale();
  const { token } = useUser({ isPrivate: true });
  const { data, mutate } = useSWR(token ? `mileageList/${page}` : null, () =>
    mypageApi.getMileageList(page, token as string)
  );
  const router = useRouter();

  return (
    <>
      <SEO title='마일리지 내역' />
      <Layout bgColor='bg-[#f4f9fb]' padding='pt-40 pb-28'>
        <div className='flex justify-center text-4xl font-bold'>
          {text.mypageMileage['1']}
        </div>
      </Layout>

      <Layout padding='pb-36'>
        <div className='-mt-[3.75rem] flex h-[3.75rem] divide-x divide-[#e8e8e8] border-t-2 border-b border-r border-l border-[#e8e8e8] border-t-[#231916] bg-white text-lg text-[#231815]'>
          {/* 날짜 */}
          <div className='flex w-4/12 items-center justify-center'>
            {text.mypageMileage['2']}
          </div>
          {/* 날짜 */}

          {/* 마일리지 */}
          <div className='flex w-3/12 items-center justify-center'>
            {text.mypageMileage['3']}
          </div>
          {/* 마일리지 */}

          {/* 내용 */}
          <div className='flex w-5/12 items-center justify-center'>
            {text.mypageMileage['4']}
          </div>
          {/* 내용 */}
        </div>

        {data?.results.map((i: { [key: string]: any }) => (
          <div
            key={i.id}
            className='flex h-[3.75rem] divide-x divide-[#e8e8e8] border-b border-r border-l border-[#e8e8e8] text-lg'
          >
            <div className='flex w-4/12 items-center justify-center text-[#9e9e9e]'>
              {trimDate(i.created, 0, 10)} {i.created.split('T')[1].slice(0, 8)}
            </div>
            <div className='flex w-3/12 items-center justify-center font-bold'>
              {i.mileage}
            </div>
            <div className='flex w-5/12 items-center justify-center text-[#9e9e9e]'>
              {i.text}
            </div>
          </div>
        ))}

        <div className='mt-20 flex justify-center'>
          <Pagebar
            totalItems={data?.count}
            itemsPerPage={15}
            currentPage={+page}
            url={(page: number) => router.push(`/mypage/mileage/${page}`)}
          />
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      page: ctx.params?.page,
    },
  };
};

export default Mileage;
