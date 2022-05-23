import { useLocale } from '@libs/client/useLocale';
import { IUser } from '@libs/client/useUser';
import { cls, clsFilter } from '@libs/client/utils';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function Navigator() {
  const { locale, text } = useLocale();
  const router = useRouter();
  const navList = [
    {
      id: 0,
      url: '/mypage/course/ongoing/1',
      active: router.pathname === '/mypage/course/[...slug]',
      label: text.mypageNav['1'],
    },
    {
      id: 1,
      url: '/mypage/edit',
      active: router.pathname === '/mypage/edit',
      label: text.mypageNav['2'],
    },
    {
      id: 2,
      url: '/mypage/reset-pw',
      active: router.pathname === '/mypage/reset-pw',
      label: text.mypageNav['3'],
    },
  ];

  const { mutate } = useSWR<IUser>('/api/user');

  const handleLogout = async () => {
    await axios.post('/api/logout');
    mutate({ ok: false, token: null, profile: null });
  };
  return (
    <div className='space-y-2.5 md:grid md:grid-cols-2 md:gap-2.5 md:space-y-0'>
      {navList.map((i) => (
        <Link key={i.id} href={i.url}>
          <a
            className={cls(
              i.active
                ? 'bg-[#2fb6bc] font-bold text-white'
                : 'border-[#d6d6d6]',
              clsFilter(locale, '', '', 'text-center leading-tight'),
              'flex h-12 w-[13.625rem] items-center justify-center rounded-lg border transition-all hover:opacity-70 md:w-full'
            )}
          >
            {i.label}
          </a>
        </Link>
      ))}

      <div
        onClick={handleLogout}
        className='flex h-12 w-[13.625rem] cursor-pointer items-center justify-center rounded-lg border border-[#d6d6d6] transition-all hover:opacity-70 md:w-full'
      >
        {text.mypageNav['4']}
      </div>
    </div>
  );
}
