import Layout from '@layouts/sectionLayout';
import { useLocale } from '@libs/client/useLocale';

interface IProps {
  [key: string]: any;
}

export default function Info({ info }: IProps) {
  const { text } = useLocale();
  return (
    <Layout padding='pt-20 pb-24 md:pt-12 md:pb-14'>
      <div className='text-2xl font-bold md:text-xl'>
        {text.courseDetail['14']}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: info }}
        className='wysiwyg mt-9'
      />
    </Layout>
  );
}
