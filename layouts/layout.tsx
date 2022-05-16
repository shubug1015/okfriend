import Footer from '@components/footer';
import Header from '@components/header';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { locale } = useLocale();
  return (
    <div
      className={cls(
        clsFilter(locale, 'font-notoSansKr', 'font-notoSans', 'font-notoSans'),
        'w-screen'
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
