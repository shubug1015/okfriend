// import Partner from '@components/home/partner';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';

const EmailPolicy: NextPage = () => {
  return (
    <>
      <SEO title='이메일 무단수집거부' />

      <Layout bgColor='bg-[#f4f9fb]' padding='pt-44 md:pt-24 pb-24'>
        <div className='overflow bg-white p-10 md:p-6'>
          <div className='border-b border-[#9e9e9e] pb-6 text-2xl font-bold md:text-lg'>
            개인정보 수집 및 이용
          </div>
          <div className='pt-6 md:text-sm'>
            1. 개인정보 수집·이용 항목 :<br />
            [필수항목] 아이디, 이름, 생년월일, 성별, 이메일, 국가
            <br />
            [선택항목] 휴대전화번호, 주소
            <br />
            2. 수집·이용 목적 : 홈페이지 회원 가입 및 서비스 이용·관리
            <br />
            3. 보유 및 이용기간 : 회원탈퇴시까지
            <br />
            4. 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 그러나
            필수 항목 동의 거부 시에는 온라인전달연수 홈페이지 이용에 제한이
            되며, 선택항목 미입력시에는 서비스 관련 안내가 원활하지 않을 수
            있습니다.
            <br />
          </div>
        </div>

        <div className='overflow bg-white p-10 md:p-6'>
          <div className='border-b border-[#9e9e9e] pb-6 text-2xl font-bold md:text-lg'>
            이메일 무단수집거부
          </div>
          <div className='pt-6 md:text-sm'>
            누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의없이 인터넷
            홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의
            기술적 장치를 이용하여
            <br />
            전자우편주소를 수집하여서는 아니되며 이를 위반시 정보통신망 이용촉진
            및 정보보호 등에 관한 법률 제 74조 제 1항 제 5호에 의해 1년 이하의
            징역 또는 1천만원 이하의 벌금에 처할 수 있음을 유념하시기 바랍니다.
            <br />
            <br />
            정보통신망 이용촉진 및 정보보호 등에 관한 법률 제 50조의 2
            (전자우편주소의 무단 수집행위 등 금지)
            <br />
            - 누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이
            인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그
            밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
            <br />- 누구든지 제1항과 제2항의 규정에 의하여 수집·판매 및 유통이
            금지된 전자우편주소임을 알면서 이를 정보전송에 이용하여서는
            아니된다.
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EmailPolicy;
