import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  supportCategory: string;
}

export default function Navigator({ supportCategory }: IProps) {
  const { locale, text } = useLocale();
  return (
    <div className='border-b border-[#e8e8e8]'>
      <div className='flex items-center justify-center md:mx-auto md:max-w-[330px] md:justify-start md:overflow-x-scroll'>
        <Link href='/support/notice/title/created/1'>
          <a>
            <div
              className={cls(
                supportCategory === 'notice'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                clsFilter(locale, 'md:w-24', 'md:w-[7.8rem]', 'md:w-[7rem]'),
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:border-b-2 md:text-base'
              )}
            >
              {text.supportStoryHeader['3']}
            </div>
          </a>
        </Link>

        <Link href='/support/faq'>
          <a>
            <div
              className={cls(
                supportCategory === 'faq'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:w-24 md:border-b-2 md:text-base'
              )}
            >
              {text.supportStoryHeader['4']}
            </div>
          </a>
        </Link>

        <Link href={'/support/contact'}>
          <a>
            <div
              className={cls(
                supportCategory === 'contact'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                'flex h-16 w-48 items-center justify-center border-b-4 text-center text-[1.375rem] font-bold md:w-24 md:border-b-2 md:text-base'
              )}
            >
              {text.supportStoryHeader['5']}
            </div>
          </a>
        </Link>

        <Link href='/support/library/title/created/1'>
          <a>
            <div
              className={cls(
                supportCategory === 'library'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                clsFilter(locale, 'md:w-24', 'md:w-24', 'md:w-[7rem]'),
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:w-24 md:border-b-2 md:text-base'
              )}
            >
              {text.supportStoryHeader['6']}
            </div>
          </a>
        </Link>

        <Link href='/support/certificate'>
          <a>
            <div
              className={cls(
                supportCategory === 'certificate'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                clsFilter(
                  locale,
                  'w-48 md:w-24 md:text-base',
                  'w-72 text-center leading-tight md:w-24 md:text-xs',
                  'text-center leading-tight md:w-[8.5rem] md:text-base'
                ),
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:border-b-2'
              )}
            >
              {text.supportStoryHeader['7']}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
