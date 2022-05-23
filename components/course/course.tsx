import { useLocale } from '@libs/client/useLocale';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  id: number;
  thumbnail: string;
  name: string;
  tutor: any;
  courseType: string;
  courseCategory: string;
  url: string;
}

export default function Course({
  id,
  thumbnail,
  tutor,
  name,
  courseType,
  courseCategory,
  url,
}: IProps) {
  const { text } = useLocale();
  const router = useRouter();
  const goDetail = () => {
    if (courseCategory === 'live') {
      window.open(url);
    } else {
      router.push(`/course/detail/${courseType}/${courseCategory}/${id}`);
    }
  };
  return (
    <div
      onClick={goDetail}
      className='relative mt-4 flex h-[13.875rem] cursor-pointer flex-col justify-between rounded-lg bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.8)]'
    >
      <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
        <Image
          src={thumbnail}
          alt='Course Thumbnail'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='flex justify-end pt-3.5 pr-3.5'>
        <div className='flex aspect-square w-7 items-center justify-center rounded-full bg-[#d60a51] pl-0.5'>
          <svg
            width='9'
            height='10'
            viewBox='0 0 9 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.77246 5.00112L0.11355 10.0003L0.11355 0.00189791L8.77246 5.00112Z'
              fill='white'
            />
          </svg>
        </div>
      </div>

      <div className='px-5 pb-5'>
        <div className='text-xl font-bold text-white'>{name}</div>

        <div className='mt-1 text-white'>
          {tutor.name} {text.course['7']}
        </div>
      </div>
    </div>
  );
}
