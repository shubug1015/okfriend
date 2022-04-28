import { IUser } from '@libs/client/useUser';
import { cls } from '@libs/client/utils';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function Navigator() {
  const router = useRouter();
  const navList = [
    {
      id: 0,
      url: '/mypage/course/1',
      active: router.pathname === '/mypage/course/[page]',
      label: '내 강의실',
    },
    {
      id: 1,
      url: '/mypage/edit',
      active: router.pathname === '/mypage/edit',
      label: '회원 정보 수정',
    },
    {
      id: 2,
      url: '/mypage/reset-pw',
      active: router.pathname === '/mypage/reset-pw',
      label: '비밀번호 변경',
    },
  ];

  const { mutate } = useSWR<IUser>('/api/user');

  const handleLogout = async () => {
    await axios.post('/api/logout');
    mutate({ ok: false, token: null, profile: null });
  };
  return (
    <div className='space-y-2.5'>
      {navList.map((i) => (
        <Link key={i.id} href={i.url}>
          <a
            className={cls(
              i.active
                ? 'bg-[#2fb6bc] font-bold text-white'
                : 'border-[#d6d6d6]',
              'flex h-12 w-[13.625rem] items-center justify-center rounded-lg border transition-all hover:opacity-70'
            )}
          >
            {i.label}
          </a>
        </Link>
      ))}

      <div
        onClick={handleLogout}
        className='flex h-12 w-[13.625rem] cursor-pointer items-center justify-center rounded-lg border border-[#d6d6d6] transition-all hover:opacity-70'
      >
        로그아웃
      </div>
    </div>
  );
}
