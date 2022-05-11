import { useLocale } from '@libs/client/useLocale';
import { cls, trimDate } from '@libs/client/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IProps {
  id: number;
  thumbnail: string;
  name: string;
  created: string;
  progress: number;
  courseCategory: string;
  category: string;
}

export default function Course({
  id,
  thumbnail,
  name,
  created,
  progress,
  courseCategory,
  category,
}: IProps) {
  const { text } = useLocale();
  const router = useRouter();
  const setDetailUrl = () => {
    if (courseCategory === '사전 온라인 연수 - 필수차시')
      return 'pre-online/required';
    if (courseCategory === '사전 온라인 연수 - 선택차시')
      return 'pre-online/elective';
    if (courseCategory === '사전 온라인 연수 - 지난 연수 자료')
      return 'pre-online/past';
    if (courseCategory === '온라인 연수 - 필수차시 - 공통')
      return 'online/required';
    if (courseCategory === '온라인 연수 - 선택차시') return 'online/elective';
    if (courseCategory === '온라인 연수 - 지난 연수 자료') return 'online/past';
  };
  return (
    <div
      onClick={() =>
        category === '진행중'
          ? router.push(`/course/detail/${setDetailUrl()}/${id}`)
          : null
      }
      className={cls(
        category === '진행중'
          ? 'cursor-pointer transition-opacity hover:opacity-70'
          : 'opacity-50',
        'flex w-full items-center space-x-5 rounded border border-[#d6d6d6] p-8 md:flex-col md:space-y-4 md:space-x-0 md:border-transparent md:p-0'
      )}
    >
      <div className='relative h-40 w-72 rounded md:h-[11.5rem] md:w-full'>
        <Image
          src={thumbnail}
          alt='Lecture Thumbnail'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='flex h-40 flex-col justify-between'>
        <div className='text-lg font-bold'>{name}</div>

        <div className='space-y-1.5 md:mt-5'>
          <div className='flex space-x-4 font-medium'>
            <div className='font-medium'>{text.mypageCourse['4']}</div>
            <div className='font-medium text-[#9e9e9e]'>
              {trimDate(created, 0, 10)}
            </div>
          </div>

          <div className='flex items-center font-medium'>
            <div className='font-medium'>{text.mypageCourse['5']}</div>
            <div className='ml-9 h-1 w-72 rounded-full bg-[rgba(0,231,255,0.24)] md:w-52'>
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
            <div className='font-medium'>{text.mypageCourse['6']}</div>
            <div className='font-medium text-[#9e9e9e]'>
              {trimDate(created, 0, 10)} ~
            </div>
          </div>

          <div className='flex items-center space-x-4 font-medium'>
            <div className='font-medium'>{text.mypageCourse['7']}</div>
            <div
              className={cls(
                category === '진행중'
                  ? 'rounded bg-[#e2fbfb] px-2.5 py-1 text-[#2fb6bc]'
                  : 'text-[#9e9e9e]',
                'font-medium'
              )}
            >
              {category === '진행중'
                ? text.mypageCourse['8']
                : text.mypageCourse['9']}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
