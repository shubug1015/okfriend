import { en } from '@components/locales/en';
import { ko } from '@components/locales/ko';
import { useRouter } from 'next/router';

export const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  if (locale === 'ko') {
    return { locale, text: ko };
  }
  if (locale === 'en') {
    return { locale, text: en };
  }
  if (locale === 'en') {
    return { locale, text: ko };
  }

  return { locale, text: ko };
};
