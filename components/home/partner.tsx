import Image from 'next/image';
import PartnersImg from '@public/home/partners.png';
import Layout from '@layouts/sectionLayout';

export default function Partner() {
  return (
    <Layout padding='py-[4.25rem]'>
      <div className='relative w-full h-[19.2rem]'>
        <Image
          src={PartnersImg}
          alt='Partner Image'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      </div>
    </Layout>
  );
}
