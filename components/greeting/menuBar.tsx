import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  pageName: string;
}

export default function MenuBar({ pageName }: IProps) {
  const { locale, text } = useLocale();
  return (
    <div className='flex items-center justify-center border-b border-[#ebebeb] bg-white text-[1.375rem] text-[#9e9e9e] md:border-transparent md:text-base'>
      <Link href='/course-introduction/greeting'>
        <a>
          <div
            className={cls(
              pageName === text.greeting['4']
                ? 'border-[#05aadb] font-bold text-[#05aadb]'
                : 'border-transparent',
              clsFilter(locale, '', '', 'md:text-xs'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-[3.125rem] md:w-[5.75rem] md:border-b-2'
            )}
          >
            {text.greeting['4']}
          </div>
        </a>
      </Link>

      <Link href='/course-introduction/summary'>
        <a>
          <div
            className={cls(
              pageName === text.summary['5']
                ? 'border-[#05aadb] font-bold text-[#05aadb]'
                : 'border-transparent',
              clsFilter(locale, '', '', 'md:text-xs'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-[3.125rem] md:w-[5.75rem] md:border-b-2'
            )}
          >
            {text.greeting['5']}
          </div>
        </a>
      </Link>

      <Link href='/course-introduction/schedule'>
        <a>
          <div
            className={cls(
              pageName === text.schedule['6']
                ? 'border-[#05aadb] font-bold text-[#05aadb]'
                : 'border-transparent',
              clsFilter(locale, '', '', 'md:text-xs'),
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 text-center font-bold md:h-[3.125rem] md:w-[5.75rem] md:border-b-2'
            )}
          >
            {text.greeting['6']}
          </div>
        </a>
      </Link>
    </div>
  );
}
