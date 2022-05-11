/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1'],
  },
  i18n: {
    locales: ['ko', 'en', 'ru'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
