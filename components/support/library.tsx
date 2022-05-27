import { useLocale } from '@libs/client/useLocale';
import { trimDate } from '@libs/client/utils';
import { cls } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  id: number;
  type?: string;
  num?: number;
  subject: string;
  title: string;
  created: string;
  name: string;
  view: number;
}

export default function Library({
  id,
  type,
  num,
  subject,
  title,
  created,
  name,
  view,
}: IProps) {
  const { text } = useLocale();
  return (
    <Link href={`/support/library/detail/${id}`}>
      <a>
        {/* pc 버전 */}
        <div
          className={cls(
            type === 'notice'
              ? 'border-b border-[rgba(0,0,0,0.08)] bg-[rgba(214,10,81,0.05)]'
              : '',
            'flex h-[3.75rem] items-center transition-all hover:opacity-70 md:hidden'
          )}
        >
          <div className='flex w-[10%] justify-center text-lg text-[#9e9e9e]'>
            {type === 'notice' ? (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM18.88 16.82V11C18.88 7.75 16.63 5.03 13.59 4.31V3.59C13.59 2.71 12.88 2 12 2C11.12 2 10.41 2.71 10.41 3.59V4.31C7.37 5.03 5.12 7.75 5.12 11V16.82L3 18.94V20H21V18.94L18.88 16.82ZM16 13.01H13V16.01H11V13.01H8V11H11V8H13V11H16V13.01Z'
                  fill='#d60a51'
                />
                <rect x='7' y='7' width='10' height='10' fill='#d60a51' />
              </svg>
            ) : (
              num
            )}
          </div>

          {/* <div className='flex w-[8.5%] justify-center'>
            <span
              className={cls(
                type === 'notice'
                  ? 'rounded bg-[#d60a51] px-3.5 py-0.5 text-white'
                  : '',
                ' text-xs font-medium'
              )}
            >
              {subject}
            </span>
          </div> */}

          <div
            className={cls(
              type === 'notice' ? 'font-bold' : '',
              'flex grow justify-start px-5 text-lg'
            )}
          >
            {title}
          </div>

          <div className='flex w-[10%] justify-center text-[#777777]'>
            {name}
          </div>

          <div className='flex w-[10%] justify-center text-[#9e9e9e]'>
            {trimDate(created, 5, 10)}
          </div>

          <div className='flex w-[10%] justify-center text-[#9e9e9e]'>
            {view}
          </div>
        </div>
        {/* pc 버전 */}

        {/* 모바일 버전 */}
        <div
          className={cls(
            type === 'notice'
              ? 'border-b border-[rgba(0,0,0,0.08)] bg-[rgba(214,10,81,0.05)]'
              : '',
            'hidden h-auto items-center py-4 px-4 transition-all hover:opacity-70 md:block'
          )}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-1.5'>
              {type === 'notice' && (
                <div className='rounded bg-[#d60a51] px-1.5 py-0.5 text-[0.688rem] font-medium text-white'>
                  {text.library['10']}
                </div>
              )}

              <div className='text-[0.688rem]'>{trimDate(created, 0, 10)}</div>
            </div>

            <div>
              {type === 'notice' && (
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5'
                >
                  <path
                    d='M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM18.88 16.82V11C18.88 7.75 16.63 5.03 13.59 4.31V3.59C13.59 2.71 12.88 2 12 2C11.12 2 10.41 2.71 10.41 3.59V4.31C7.37 5.03 5.12 7.75 5.12 11V16.82L3 18.94V20H21V18.94L18.88 16.82ZM16 13.01H13V16.01H11V13.01H8V11H11V8H13V11H16V13.01Z'
                    fill='#d60a51'
                  />
                  <rect x='7' y='7' width='10' height='10' fill='#d60a51' />
                </svg>
              )}
            </div>
          </div>

          <div className='mt-2 flex grow justify-start text-sm font-medium'>
            {title}
          </div>
        </div>
        {/* 모바일 버전 */}
      </a>
    </Link>
  );
}
