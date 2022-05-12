import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useInterval from '@libs/client/useInterval';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';
import useSWR from 'swr';
import { boardApi } from '@libs/api';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocale } from '@libs/client/useLocale';

export default function Card() {
  const { locale, text } = useLocale();
  const { data } = useSWR(`${locale}/cardNews/전체`, () =>
    boardApi.getCardNewsList(locale, '1', '전체')
  );
  const slider = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (index: number) => {
      setActiveSlide(index);
      setProgressBar(0);
    },
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          centerPadding: '60px',
        },
      },
    ],
  };

  useInterval(() => {
    if (progressBar >= 100) {
      setProgressBar(0);
      nextSlide();
    } else {
      if (progressBar === 0) {
        setTimeout(() => setProgressBar((prev) => prev + 0.2), 500);
      } else {
        setProgressBar((prev) => prev + 0.2);
      }
    }
  }, 10);

  const prevSlide = () => {
    slider.current?.slickPrev();
  };

  const nextSlide = () => {
    slider.current?.slickNext();
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className='bg-[url("/home/card-news-bg.png")] bg-cover bg-fixed bg-no-repeat pt-28 pb-32 md:py-10'>
      <Layout>
        <div className='md:flex md:items-center md:justify-between'>
          <div
            data-aos='flip-down'
            data-aos-duration='1500'
            className='font-quicksand text-4xl font-bold text-white md:text-2xl'
          >
            {text.main['13']}
          </div>

          <Link href='/course-story/cardnews/1'>
            <a className='hidden rounded-full border border-white py-[0.35rem] px-[0.7rem] text-[0.75rem] font-bold text-white md:block'>
              {text.main['12']}
            </a>
          </Link>
        </div>

        <div className='mt-11 flex justify-between text-white md:mt-5'>
          <div className='flex items-center justify-between'>
            <svg
              width='7'
              height='9'
              viewBox='0 0 7 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={prevSlide}
              className='cursor-pointer'
            >
              <path
                d='M-1.96701e-07 4.5L6.75 0.602886L6.75 8.39711L-1.96701e-07 4.5Z'
                fill='white'
              />
            </svg>

            <div className='ml-1 text-sm font-bold md:ml-1.5 md:text-xs'>
              {(activeSlide + 1 + '').padStart(2, '0')}
            </div>

            <div className='mx-3 h-[0.188rem] w-[13.125rem] rounded-full bg-[rgba(255,255,255,0.4)] md:w-28'>
              <div
                className='h-full rounded-full bg-white'
                style={{ width: `${progressBar}%` }}
              ></div>
            </div>

            <div className='mr-1 text-sm font-bold md:mr-1.5 md:text-xs'>
              {(data?.results.length + '').padStart(2, '0')}
            </div>

            <svg
              width='7'
              height='9'
              viewBox='0 0 7 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={nextSlide}
              className='cursor-pointer'
            >
              <path d='M7 4.5L0.25 8.39711L0.25 0.602885L7 4.5Z' fill='white' />
            </svg>
          </div>

          <Link href='/course-story/cardnews/1'>
            <a className='rounded-full border border-white py-2 px-[1.375rem] text-lg font-bold md:hidden'>
              {text.main['12']}
            </a>
          </Link>
        </div>

        <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='300'>
          <Slider
            ref={slider}
            className='mt-12 overflow-hidden md:mt-8'
            {...settings}
          >
            {data?.results.map((i: { [key: string]: any }) => (
              <Link key={i.id} href={`/course-story/cardnews/detail/${i.id}`}>
                <a className='!flex justify-center'>
                  <div className='relative aspect-square w-80 md:w-40'>
                    <Image
                      src={i.thumbnail}
                      alt='Card News Thumbnail'
                      layout='fill'
                      objectFit='cover'
                      priority
                      className='rounded-lg'
                    />
                  </div>
                </a>
              </Link>
            ))}
          </Slider>
        </div>
      </Layout>
    </div>
  );
}
