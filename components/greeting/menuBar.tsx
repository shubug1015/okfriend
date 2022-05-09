import { cls } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  pageName: string;
}

export default function MenuBar({ pageName }: IProps) {
  return (
    <div className='flex items-center justify-center border-b border-[#ebebeb] bg-white text-[1.375rem] text-[#9e9e9e] md:border-transparent md:text-base'>
      <Link href='/course-introduction/greeting'>
        <a>
          <div
            className={cls(
              pageName === '인사말'
                ? 'border-[#2fb6bc]  text-[#2fb6bc]'
                : 'border-transparent',
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-[3.125rem] md:w-[5.75rem] md:border-b-2'
            )}
          >
            인사말
          </div>
        </a>
      </Link>

      <Link href='/course-introduction/summary'>
        <a>
          <div
            className={cls(
              pageName === '개요'
                ? 'border-[#2fb6bc] font-bold text-[#2fb6bc]'
                : 'border-transparent',
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-[3.125rem] md:w-[5.75rem] md:border-b-2'
            )}
          >
            개요
          </div>
        </a>
      </Link>

      <Link href='/course-introduction/schedule'>
        <a>
          <div
            className={cls(
              pageName === '연수 편성표'
                ? 'border-[#2fb6bc] font-bold text-[#2fb6bc]'
                : 'border-transparent',
              'flex h-[4.188rem] w-[12.5rem] items-center justify-center border-b-4 font-bold md:h-[3.125rem] md:w-[5.75rem] md:border-b-2'
            )}
          >
            연수 편성표
          </div>
        </a>
      </Link>
    </div>
  );
}
