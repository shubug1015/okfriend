import Banner from '@components/banner';
import SEO from '@components/seo';
import { useLocale } from '@libs/client/useLocale';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  id: string;
}

const Library: NextPage<IProps> = ({ id }) => {
  const { locale, text } = useLocale();
  return (
    <>
      <SEO title='도서관' />
      <Banner title={text.header['3']} navList={[text.header['3']]} />

      <iframe
        src={`https://old.okfyouthcamp.com/tmp-${id}/?lang=${locale}`}
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
