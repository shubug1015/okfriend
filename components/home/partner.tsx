import Image from 'next/image';
import PartnersImg from '@public/home/partners.png';
import PartnersImgMd from '@public/home/partners-m.png';
import Layout from '@layouts/sectionLayout';

export default function Partner() {
  return (
    <Layout bgColor='bg-white' padding='py-[4.25rem] md:py-10'>
      <div className='relative h-[19.2rem] w-full md:hidden'>
        <Image
          src={PartnersImg}
          alt='Partner Image'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      </div>

      <div className='relative hidden h-[14.3rem] w-full md:block'>
        <Image
          src={PartnersImgMd}
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
