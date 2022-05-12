import Banner from '@components/banner';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
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
  const faqList = [
    {
      id: 0,
      question: '2022 재외동포대학생모국연수(온라인) 참가는 어떻게 하나요?',
      answer:
        '온라인 연수 공식 홈페이지(www.okfyouthcamp.com) 접속, 회원가입을 통해 참여가 가능합니다.\n\n[연수 신청기간]\n2022. 05. 12(목) ~ 2022. 06. 30(목) (KST 기준) * 상황에 따라 조기 마감될 수 있음',
    },
    {
      id: 1,
      question: '온라인 연수는 무료로 진행되나요?',
      answer:
        '네! 온라인 연수는 모든 참가자 무료로 신청이 가능하며 별도 비용이 발생하지 않습니다.',
    },
    {
      id: 2,
      question:
        '만 18세 예비 대학생입니다. 2022 재외동포대학생모국연수(온라인) 참여가 가능한가요?',
      answer:
        '국가별 상이한 학제를 감안, 만18세 예비 대학생은 연수(청소년, 대학생)를 선택하여 신청 가능 합니다.',
    },
    {
      id: 3,
      question:
        '재외동포대학생모국연수에 참여하였는데, 2022년 재외동모대학생모국연수(온라인)에 참여할 수 있나요?',
      answer:
        '네! 이전 재외동포대학생모국연수에 참여하였어도, 2022 재외동포대학생모국연수(온라인) 에 재참여가 가능합니다.',
    },
    {
      id: 4,
      question:
        '2022 재외동포대학생모국연수(온라인) 연수 기간은 어떻게 되나요?',
      answer:
        '2022 재외동포대학생모국연수(온라인)은 총 4회기로 구분하여 4개월 간 운영됩니다.\n– 1기 : 2022.7.1.(금)~7.31(일).\n– 2기 : 2022.8.1.(월)~8.31.(수)\n– 3기 : 2022.9.1.(목)~9.30.(금)\n- 4기 : 2022.10.1.(토)~10.31.(월)\n*(KST 기준)',
    },
    {
      id: 5,
      question:
        '개인적인 상황으로 라이브 프로그램 (차세대 리더 토크쇼 안녕하세요, 폐회식)을 실시간으 로 참여 하지 못할 경우엔 이수하지 못하나요?',
      answer:
        '이수 가능합니다. 실시간으로 참여하지 않더라도, 이후 실시간으로 진행된 콘텐츠의 녹화본을 이수하여 이수가 가능합니다.\n**단 마일리지 적립에서의 차이가 있습니다(라이브 이수시 10point, 녹화본 이수시 5point 적립)',
    },
    {
      id: 6,
      question: '온라인 연수 프로그램 시청 시 필수 확인 사항은 무엇이 있나요?',
      answer:
        '[필수 차시] 모든 프로그램은 일시 개방되어 필수 차시 내 모든 프로그램을 이수하여야 이수증 발급이 가능합니다.\n[선택 차시] 모든 프로그램은 일시 개방되어 참가자 스스로 선택하여 프로그램을 학습 할 수 있습니다.\n[만족도 조사] 강의 시청 종료 후 강의만족도 조사를 완료해주셔야 해당 강의가 정상적으로 이수 처리됩니다.',
    },
    {
      id: 7,
      question:
        '현재까지 이수한 강의 목록을 확인하고 싶어요. 어떻게 확인 할 수 있나요?',
      answer:
        '마이페이지에서 현재까지 이수한, 진행중인 강의 목록을 확인 할 수 있습니다.',
    },
    {
      id: 8,
      question:
        '마일리지 적립 현황을 확인하고 싶어요. 어떻게 확인 할 수 있나요?',
      answer:
        '마이페이지에서 현재까지 적립된 마일리지 내역을 확인 할 수 있습니다.',
    },
    {
      id: 9,
      question: '마일리지는 어떻게 활용할 수 있나요?',
      answer:
        '연수 기간 내 적립된 마일리지 점수를 기준으로 각 회기 별 우수참가자를 선발하여 다양한 혜택을 제공하고 있습니다.\n\n[재외동포대학생 대상]\n2023년 오프라인 연수 참가 시\n1) 이수자 상위 5% 대상 : 차년도 오프라인 참가시 항공료 추가 5% 지원 및 차년도 오프라인 참가시 우선 선발\n2) 이수자 상위 30% 대상 : 차년도 오프라인 참가시 우선 선발\n3) 이수자 전원 : 차년도 오프라인 참가시 가점 부여\n\n[국내대학생 대상]\n1) 이수자 상위 50명 : 연수종료시 통일공공외교캠프 참여 기회 제공\n2) 이외 이수자 : 이벤트를 통한 기프티콘 혹은 전자상품권 지급',
    },
    {
      id: 10,
      question: 'PC로만 온라인연수에 참여할 수 있나요?',
      answer:
        '2022 재외동포대학생모국연수(온라인)은 PC, 모바일, 태블릿 등 다양한 전자기기를 활용하여 참여할 수 있습니다!',
    },
    {
      id: 11,
      question: '온라인 연수 참가 시 어떤 브라우저를 사용해야하나요?',
      answer:
        '온라인 연수 참가 시 안정적인 인터넷 환경을 위해 유선 인터넷을 권장합니다. 와이파이 및 핫스팟을 연결하여 연수 참여 시 네트워크 통신이\n원활하지 않을 수 있습니다.\n\n*파이어폭스로 접속이 되지 않을 시, Chrome 또는 최신 브라우저로, Chrome으로 접속이 되지 않을 시, 파이어폭스 또는 다른 최신 브라우저로 접속하여 주시기 바랍니다.',
    },
    {
      id: 12,
      question: '이수증은 어떻게 발급받을 수 있나요?',
      answer:
        '이수증은 필수차시 내 모든 프로그램 이수 후 ‘지원센터 → 이수증 발급’ 페이지를 통해 발급이 가능합니다. 단, 이수증은 정해진 기간내에만\n발급이 가능하므로 참고 부탁드립니다.\n※ 이수증 발급 기간에 대해서는 추후 공지사항을 통해 안내될 예정입니다.',
    },
    {
      id: 13,
      question:
        '2022 재외동포대학생모국연수(온라인) 관련하여 질문드리고 싶은 것이 있습니다! 어디로 문의를 해야하나요?',
      answer:
        '홈페이지내 지원센터의 ‘1:1 문의하기’를 통해 문의주시면 친절히 답변 드리겠습니다.',
    },
  ];

  const [openedFaq, setOpenedFaq] = useState(0);
  const toggleQna = (id: number) => setOpenedFaq(id);
  return (
    <>
      <SEO title='지원센터' />
      <Banner title='지원센터 FAQ' navList={['지원센터', 'FAQ']} />
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
