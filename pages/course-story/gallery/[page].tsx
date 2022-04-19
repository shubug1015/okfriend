import SEO from '@components/seo';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  params: string[];
}

const Gallery: NextPage<IProps> = ({ params }) => {
  return (
    <>
      <SEO title='연수이야기' />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params?.page,
    },
  };
};

export default Gallery;
