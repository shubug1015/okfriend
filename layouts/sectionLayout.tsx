import { cls } from '@libs/client/utils';
import { useRouter } from 'next/router';

interface LayoutProps {
  bgColor?: string;
  bgImg?: string;
  padding?: string;
  children: React.ReactNode;
}

export default function Layout({
  bgColor,
  bgImg,
  padding,
  children,
}: LayoutProps) {
  const router = useRouter();
  return (
    <div
      className={cls(
        bgColor ? bgColor : '',
        bgImg ? bgImg : '',
        padding ? padding : '',
        'w-screen'
      )}
    >
      <div
        className={cls(
          router.pathname === '/' ? 'max-w-[1400px]' : 'max-w-[1180px]',
          'mx-auto w-full md:max-w-[330px]'
        )}
      >
        {children}
      </div>
    </div>
  );
}
