import { cls } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  supportCategory: string;
}

export default function Navigator({ supportCategory }: IProps) {
  return (
    <div className='flex h-16 items-center justify-center border-b border-[#e8e8e8]'>
      <Link href={'/support/notice/title/created/1'}>
        <a>
          <div
            className={cls(
              supportCategory === 'notice'
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold'
            )}
          >
            공지사항
          </div>
        </a>
      </Link>

      <Link href={'/support/faq'}>
        <a>
          <div
            className={cls(
              supportCategory === 'faq'
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold'
            )}
          >
            FAQ
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
              'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold'
            )}
          >
            1:1 문의하기
          </div>
        </a>
      </Link>

      <Link href={'/support/library/title/created/1'}>
        <a>
          <div
            className={cls(
              supportCategory === 'library'
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold'
            )}
          >
            자료실
          </div>
        </a>
      </Link>

      <Link href={'/'}>
        <a>
          <div
            className={cls(
              supportCategory === ''
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold'
            )}
          >
            이수증 발급
          </div>
        </a>
      </Link>
    </div>
  );
}
