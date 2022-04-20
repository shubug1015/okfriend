import Banner from '@components/banner';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

const Faq: NextPage = () => {
  const [openedFaq, setOpenedFaq] = useState(0);
  const toggleQna = (id: number) => setOpenedFaq(id);

  const faqVar = {
    invisible: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: '5rem',
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='지원센터 FAQ' navList={['지원센터', 'FAQ']} />
      <Navigator supportCategory='faq' />
      <Layout padding='pt-16 pb-24'>
        <div className='text-4xl font-bold'>FAQ</div>

        <div className='mt-8 divide-y divide-[#e8e8e8] border border-[#e8e8e8]'>
          {[0, 1].map((i) => (
            <Fragment key={i}>
              <div
                onClick={() => toggleQna(i)}
                className='flex h-20 cursor-pointer items-center justify-between px-10 transition-all hover:opacity-70'
              >
                <div className='flex space-x-2'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#2fb6bc] font-medium text-white'>
                    Q
                  </div>
                  <div className='text-lg font-medium'>온라인 강의 인가요?</div>
                </div>

                <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e8e8]'>
                  {openedFaq === i ? (
                    <svg
                      width='14'
                      height='8'
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.8974 0.297386C1.54818 -0.0511516 0.9827 -0.0511524 0.633476 0.297385V0.297385C0.283279 0.646893 0.28328 1.21429 0.633476 1.5638L7.08236 8L13.5312 1.5638C13.8814 1.21429 13.8814 0.646893 13.5312 0.297384V0.297384C13.182 -0.0511529 12.6165 -0.0511527 12.2673 0.297385L7.08236 5.47215L1.8974 0.297386Z'
                        fill='#01111E'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='14'
                      height='8'
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.1006 7.70261C12.4499 8.05115 13.0153 8.05115 13.3646 7.70261V7.70261C13.7148 7.35311 13.7148 6.78571 13.3646 6.4362L6.91569 8.44679e-08L0.466811 6.4362C0.116614 6.78571 0.116614 7.35311 0.466811 7.70262V7.70262C0.816035 8.05115 1.38151 8.05115 1.73073 7.70261L6.91569 2.52785L12.1006 7.70261Z'
                        fill='#01111E'
                      />
                    </svg>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {openedFaq === i && (
                  <motion.div
                    variants={faqVar}
                    initial='invisible'
                    animate='visible'
                    exit='exit'
                    className='flex h-20 items-center justify-between bg-[#f4f9fb] px-10'
                  >
                    <div className='flex space-x-2'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#d60a51] font-medium text-white'>
                        A
                      </div>
                      <div className='text-lg font-medium'>
                        내 본 강의는 오프라인 직강에서 쌓인 노하우와 핵심만
                        담아서 만들어진 온라인 강의입니다.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Fragment>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Faq;
