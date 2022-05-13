import { en } from '@components/locales/en';
import { ko } from '@components/locales/ko';
import { ru } from '@components/locales/ru';
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
  if (locale === 'ru') {
    return { locale, text: ru };
  }

  return { locale, text: ko };
};
