import Layout from '@layouts/sectionLayout';

interface IProps {
  [key: string]: any;
}

export default function Info({ info }: IProps) {
  return (
    <Layout padding='pt-20 pb-24 md:pt-12 md:pb-14'>
      <div className='text-2xl font-bold md:text-xl'>강의소개</div>

      <div className='mt-9' dangerouslySetInnerHTML={{ __html: info }} />
    </Layout>
  );
}
