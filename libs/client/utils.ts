import { CookieSerializeOptions } from 'cookie';
import { StaticImageData } from 'next/image';

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const trimDate = (date: string, start: number, end: number) =>
  date.split('T')[0].slice(start, end);

export const imgFilter = (
  locale: string | undefined,
  koImg: StaticImageData,
  enImg: StaticImageData,
  ruImg: StaticImageData
) => {
  if (locale === 'ko') {
    return koImg;
  }
  if (locale === 'en') {
    return enImg;
  }
  if (locale === 'ru') {
    return ruImg;
  }
  return koImg;
};

export const clsFilter = (
  locale: string | undefined,
  ko: string,
  en: string,
  ru: string
) => {
  if (locale === 'ko') {
    return ko;
  }
  if (locale === 'en') {
    return en;
  }
  if (locale === 'ru') {
    return ru;
  }
  return ko;
};

// 로그인, 회원가입 시 쿠키에 저장할 토큰 설정
export const tokenSettings: CookieSerializeOptions = {
  path: '/', // 쿠키 저장 경로
  maxAge: 60 * 60 * 24 * 7, // 1주일 후 쿠기 만료
  httpOnly: true, // 보안
  secure: process.env.NODE_ENV !== 'development', // 보안
  sameSite: 'strict', // 보안
};
