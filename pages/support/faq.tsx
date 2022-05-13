import Banner from '@components/banner';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { useLocale } from '@libs/client/useLocale';
import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

// const faqVar = {
//   invisible: {
//     opacity: 0,
//     height: 0,
//   },
//   visible: {
//     opacity: 1,
//     height: '5rem',
//     transition: {
//       duration: 0.2,
//     },
//   },
//   exit: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

const Faq: NextPage = () => {
  const { text } = useLocale();
  const faqList = [
    {
      id: 0,
      question: text.faq['1'],
      answer: text.faq['2'],
    },
    {
      id: 1,
      question: text.faq['3'],
      answer: text.faq['4'],
    },
    {
      id: 2,
      question: text.faq['5'],
      answer: text.faq['6'],
    },
    {
      id: 3,
      question: text.faq['7'],
      answer: text.faq['8'],
    },
    {
      id: 4,
      question: text.faq['9'],
      answer: text.faq['10'],
    },
    {
      id: 5,
      question: text.faq['11'],
      answer: text.faq['12'],
    },
    {
      id: 6,
      question: text.faq['13'],
      answer: text.faq['14'],
    },
    {
      id: 7,
      question: text.faq['15'],
      answer: text.faq['16'],
    },
    {
      id: 8,
      question: text.faq['17'],
      answer: text.faq['18'],
    },
    {
      id: 9,
      question: text.faq['19'],
      answer: text.faq['20'],
    },
    {
      id: 10,
      question: text.faq['21'],
      answer: text.faq['22'],
    },
    {
      id: 11,
      question: text.faq['23'],
      answer: text.faq['24'],
    },
    {
      id: 12,
      question: text.faq['25'],
      answer: text.faq['26'],
    },
    {
      id: 13,
      question: text.faq['27'],
      answer: text.faq['28'],
    },
  ];

  const [openedFaq, setOpenedFaq] = useState(0);
  const toggleQna = (id: number) => setOpenedFaq(id);
  return (
    <>
      <SEO title='지원센터' />
      <Banner
        title={text.supportStoryHeader['1']}
        navList={[text.supportStoryHeader['2'], text.supportStoryHeader['3']]}
      />
      <Navigator supportCategory='faq' />
      <Layout padding='pt-16 pb-24 md:pt-10 md:pb-16'>
        <div className='text-4xl font-bold md:text-center md:text-2xl'>FAQ</div>

        <div className='mt-8 divide-y divide-[#e8e8e8] border border-[#e8e8e8]'>
          {faqList.map((i) => (
            <Fragment key={i.id}>
              <div
                onClick={() => toggleQna(i.id)}
                className='flex cursor-pointer items-center justify-between py-7 px-10 transition-all hover:opacity-70 md:space-x-2 md:px-4 md:py-5'
              >
                <div className='flex items-center space-x-2'>
                  <div className='flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#2fb6bc] font-medium text-white md:h-6 md:w-6 md:text-sm'>
                    Q
                  </div>
                  <div className='text-lg font-medium md:text-sm'>
                    {i.question}
                  </div>
                </div>

                <div className='flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#e8e8e8] md:h-6 md:w-6'>
                  {openedFaq === i.id ? (
                    <svg
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 md:w-3'
                    >
                      <path
                        d='M1.8974 0.297386C1.54818 -0.0511516 0.9827 -0.0511524 0.633476 0.297385V0.297385C0.283279 0.646893 0.28328 1.21429 0.633476 1.5638L7.08236 8L13.5312 1.5638C13.8814 1.21429 13.8814 0.646893 13.5312 0.297384V0.297384C13.182 -0.0511529 12.6165 -0.0511527 12.2673 0.297385L7.08236 5.47215L1.8974 0.297386Z'
                        fill='#01111E'
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 md:w-3'
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
                {openedFaq === i.id && (
                  <motion.div
                    // variants={faqVar}
                    // initial='invisible'
                    // animate='visible'
                    // exit='exit'
                    className='flex items-center justify-between bg-[#f4f9fb] py-7 px-10 md:px-4'
                  >
                    <div className='flex space-x-2'>
                      <div className='flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#d60a51] font-medium text-white md:h-6 md:w-6 md:text-sm'>
                        A
                      </div>
                      <div className='grow whitespace-pre-wrap text-lg font-medium md:text-sm'>
                        {i.answer}
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
