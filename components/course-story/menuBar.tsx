import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  pageName: string;
}

export default function MenuBar({ pageName }: IProps) {
  const { locale, text } = useLocale();
  return (
    <div className='flex items-center justify-center border-b border-[#ebebeb] bg-white text-[1.375rem] text-[#9e9e9e] md:space-x-[26px] md:border-none'>
      <Link href='/course-story/video/1'>
        <a>
          <div
            className={cls(
              pageName === '홍보 영상'
                ? 'border-[#2fb6bc] font-bold text-[#01111e]'
                : 'border-transparent',
              clsFilter(locale, 'md:w-16', 'md:w-12', 'md:w-14'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-12 md:border-b-2 md:text-base'
            )}
          >
            {text.courseStoryHeader['3']}
          </div>
        </a>
      </Link>

      <Link href='/course-story/gallery/1'>
        <a>
          <div
            className={cls(
              pageName === '연수 갤러리'
                ? 'border-[#2fb6bc] font-bold text-[#01111e]'
                : 'border-transparent',
              clsFilter(locale, 'md:w-[5.5rem]', 'md:w-14', 'md:w-16'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-12 md:border-b-2 md:text-base'
            )}
          >
            {text.courseStoryHeader['4']}
          </div>
        </a>
      </Link>

      <Link href='/course-story/cardnews/1'>
        <a>
          <div
            className={cls(
              pageName === '카드뉴스'
                ? 'border-[#2fb6bc] font-bold text-[#01111e]'
                : 'border-transparent',
              clsFilter(locale, 'md:w-16', 'md:w-[5rem]', 'md:w-[5rem]'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-12 md:border-b-2 md:text-base'
            )}
          >
            {text.courseStoryHeader['5']}
          </div>
        </a>
      </Link>

      <Link href='/course-story/newsletter/1'>
        <a>
          <div
            className={cls(
              pageName === '뉴스레터'
                ? 'border-[#2fb6bc] font-bold text-[#01111e]'
                : 'border-transparent',
              clsFilter(locale, 'md:w-16', 'md:w-[5rem]', 'md:w-[5rem]'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-12 md:border-b-2 md:text-base'
            )}
          >
            {text.courseStoryHeader['6']}
          </div>
        </a>
      </Link>
    </div>
  );
}
