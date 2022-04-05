import { cls } from '@libs/utils';

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
  return (
    <div
      className={cls(
        bgColor ? bgColor : '',
        bgImg ? bgImg : '',
        padding ? padding : '',
        'w-screen'
      )}
    >
      <div className='mx-auto w-full max-w-[1400px]'>{children}</div>
    </div>
  );
}
