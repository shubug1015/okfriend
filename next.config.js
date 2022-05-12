/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'okfriends-s3.s3.ap-northeast-2.amazonaws.com'],
  },
  i18n: {
    locales: ['ko', 'en', 'ru'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
