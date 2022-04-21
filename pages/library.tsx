import Banner from '@components/banner';
import SEO from '@components/seo';
import type { NextPage } from 'next';

const Library: NextPage = () => {
  return (
    <>
      <SEO title='도서관' />
      <Banner title='지원센터 공지사항' navList={['지원센터', '공지사항']} />
      <div className='relative h-[43rem] w-screen overflow-hidden'>
        <iframe
          src='https://okfyouthcamp.com/library/'
          className='absolute -top-[20.6rem] h-[100rem] w-full overflow-hidden'
        ></iframe>
      </div>
    </>
  );
};

export default Library;
