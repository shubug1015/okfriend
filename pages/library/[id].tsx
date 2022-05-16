import Banner from '@components/banner';
import SEO from '@components/seo';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  id: string;
}

const Library: NextPage<IProps> = ({ id }) => {
  return (
    <>
      <SEO title='도서관' />
      <Banner title='도서관' navList={['도서관']} />

      <iframe
        src={`https://old.okfyouthcamp.com/tmp-${id}`}
        className='h-[78rem] w-full md:h-[100rem]'
      ></iframe>
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

export default Library;
