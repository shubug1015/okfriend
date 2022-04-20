import { cls, trimDate } from '@libs/client/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IProps {
  id: number;
  order: number;
  thumbnail: string;
  name: string;
  created: string;
  expiration: string;
  progress: number;
  category: string;
}

export default function Course({
  id,
  order,
  thumbnail,
  name,
  created,
  expiration,
  progress,
  category,
}: IProps) {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        category === '진행중' ? router.push(`/lecture/my/${id}/${order}`) : null
      }
      className={cls(
        category === '진행중' ? 'cursor-pointer' : 'opacity-50',
        'flex w-full items-center space-x-5 rounded border border-[#d6d6d6] p-8'
      )}
    >
      <div className='relative h-40 w-72 rounded bg-gray-700'>
        {/* <Image
          src={thumbnail}
          alt='Lecture Thumbnail'
          layout='fill'
          objectFit='cover'
        /> */}
      </div>

      <div className='flex h-40 flex-col justify-between'>
        <div className='text-lg font-bold'>{name}</div>

        <div className='space-y-1.5'>
          <div className='flex space-x-4 font-medium'>
            <div className='font-medium'>강의 시작</div>
            <div className='font-medium text-[#9e9e9e]'>
              {trimDate(created, 0, 10)}
            </div>
          </div>

          <div className='flex items-center font-medium'>
            <div className='font-medium'>진도율</div>
            <div className='ml-9 h-1 w-72 rounded-full bg-[rgba(0,231,255,0.24)]'>
              <div
                className={cls(
                  category === '진행중' ? 'bg-[#2fb6bc]' : 'bg-[#d60a51]',
                  'h-full rounded-full'
                )}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className='ml-2 font-medium'>{progress}%</div>
          </div>

          <div className='flex space-x-4 font-medium'>
            <div className='font-medium'>강의 기간</div>
            <div className='font-medium text-[#9e9e9e]'>
              {trimDate(created, 0, 10)} ~ {expiration}
            </div>
          </div>

          <div className='flex items-center space-x-4 font-medium'>
            <div className='font-medium'>강의 현황</div>
            <div
              className={cls(
                category === '진행중'
                  ? 'rounded bg-[#e2fbfb] px-2.5 py-1 text-[#2fb6bc]'
                  : 'text-[#9e9e9e]',
                'font-medium'
              )}
            >
              {category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
