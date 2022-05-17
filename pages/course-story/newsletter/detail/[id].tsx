import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { IUser } from '@libs/client/useUser';
import { trimDate } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface IProps {
  id: string;
}

interface IForm {
  reply: string;
}

const NewsLetterDetail: NextPage<IProps> = ({ id }) => {
  const router = useRouter();
  const { locale } = router;
  const { data: myData } = useSWR<IUser>('/api/user');
  const { data, mutate } = useSWR(
    myData?.token
      ? `${locale}/newsLetterDetail/logged`
      : `${locale}/newsLetterDetail/unlogged`,
    () => boardApi.getNewsLetterDetail(locale, id, myData?.token)
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });
  const onValid = async ({ reply }: IForm) => {
    if (myData?.token) {
      try {
        await boardApi.writeNewsLetterReply(
          locale,
          data?.id,
          reply,
          myData?.token
        );
        setValue('reply', '');
        mutate({
          ...data,
          reply: [
            ...data?.reply,
            {
              id: Math.random(),
              user: {
                name: myData?.profile?.name,
              },
              text: reply,
              created: new Date().toISOString(),
            },
          ],
        });
      } catch {
        alert('Error');
      }
    } else {
      router.push('/login');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  const toggleLike = async () => {
    if (myData?.token) {
      try {
        await boardApi.likeNewsLetter(locale, id, myData?.token as string);
        const data = await boardApi.getNewsLetterDetail(
          locale,
          id,
          myData?.token
        );
        mutate(data);
      } catch {
        alert('Error');
      }
    } else {
      router.push('/login');
    }
  };
  return (
    <>
      <SEO title='뉴스레터' />
      <Banner title='연수이야기' navList={['연수이야기', '뉴스레터']} />
      <MenuBar pageName='뉴스레터' />
      <Layout bgColor='bg-[#f4f9fb]' padding='py-14 md:pt-6 md:pb-8'>
        <div className='font-bold md:text-sm'>뉴스레터</div>

        <div className='mt-6 text-[1.875rem] font-medium md:mt-4 md:text-lg'>
          {data?.title}
        </div>

        <div className='mt-12 flex justify-between md:mt-6'>
          <div className='flex items-end space-x-10'>
            <div className='flex items-center space-x-2'>
              <svg
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 md:w-5'
              >
                <path
                  d='M18 0C8.2422 0 0 8.2422 0 18C0 27.7578 8.2422 36 18 36C27.7578 36 36 27.7578 36 18C36 8.2422 27.7578 0 18 0ZM18 9C21.1086 9 23.4 11.2896 23.4 14.4C23.4 17.5104 21.1086 19.8 18 19.8C14.8932 19.8 12.6 17.5104 12.6 14.4C12.6 11.2896 14.8932 9 18 9ZM8.8092 26.5896C10.4238 24.2136 13.1166 22.6296 16.2 22.6296H19.8C22.8852 22.6296 25.5762 24.2136 27.1908 26.5896C24.8904 29.052 21.627 30.6 18 30.6C14.373 30.6 11.1096 29.052 8.8092 26.5896Z'
                  fill='#2FB6BC'
                />
              </svg>
              <div className='text-lg md:text-sm'>관리자</div>
            </div>

            {data?.created && (
              <div className='text-[#6b6b6b] md:text-sm'>
                {trimDate(data?.created, 0, 10)}
              </div>
            )}
          </div>

          <div className='flex items-end space-x-2'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='md:w-4'
            >
              <path
                d='M18.3307 10L19.0463 10.3578L19.2252 10L19.0463 9.64223L18.3307 10ZM1.66406 10L0.948521 9.64223L0.769635 10L0.948521 10.3578L1.66406 10ZM18.3307 10C17.6152 9.64223 17.6153 9.64192 17.6155 9.64163C17.6155 9.64156 17.6157 9.64129 17.6157 9.64115C17.6159 9.64086 17.616 9.64065 17.616 9.64052C17.6162 9.64024 17.6162 9.64027 17.616 9.64058C17.6157 9.64121 17.6148 9.643 17.6133 9.64592C17.6102 9.65176 17.6048 9.6621 17.597 9.67664C17.5813 9.70573 17.556 9.75156 17.5209 9.81175C17.4506 9.93222 17.3414 10.1096 17.1919 10.3249C16.8921 10.7567 16.4345 11.3348 15.8089 11.9122C14.562 13.0631 12.6639 14.2 9.9974 14.2V15.8C13.1643 15.8 15.4328 14.4369 16.8942 13.0878C17.6228 12.4152 18.1548 11.7433 18.5061 11.2376C18.682 10.9842 18.8137 10.7709 18.9029 10.6179C18.9476 10.5414 18.9817 10.4798 19.0055 10.4357C19.0174 10.4136 19.0267 10.3958 19.0335 10.3828C19.0369 10.3762 19.0396 10.3708 19.0418 10.3667C19.0428 10.3646 19.0437 10.3628 19.0445 10.3613C19.0449 10.3606 19.0452 10.3599 19.0455 10.3593C19.0457 10.359 19.0458 10.3586 19.0459 10.3585C19.0461 10.3581 19.0463 10.3578 18.3307 10ZM9.9974 14.2C7.33092 14.2 5.43276 13.0631 4.18585 11.9122C3.56033 11.3348 3.10273 10.7567 2.80293 10.3249C2.65339 10.1096 2.54418 9.93222 2.4739 9.81175C2.43879 9.75156 2.41349 9.70573 2.39781 9.67664C2.38998 9.6621 2.38456 9.65176 2.38153 9.64592C2.38001 9.643 2.3791 9.64121 2.37878 9.64058C2.37862 9.64027 2.37861 9.64024 2.37875 9.64052C2.37881 9.64065 2.37892 9.64086 2.37906 9.64115C2.37913 9.64129 2.37927 9.64156 2.37931 9.64163C2.37945 9.64192 2.3796 9.64223 1.66406 10C0.948521 10.3578 0.948694 10.3581 0.948876 10.3585C0.94895 10.3586 0.949143 10.359 0.949291 10.3593C0.949586 10.3599 0.949922 10.3606 0.950296 10.3613C0.951045 10.3628 0.951951 10.3646 0.953015 10.3667C0.955142 10.3708 0.957901 10.3762 0.961295 10.3828C0.968082 10.3958 0.977412 10.4136 0.989312 10.4357C1.01311 10.4798 1.04721 10.5414 1.09185 10.6179C1.18108 10.7709 1.31276 10.9842 1.48874 11.2376C1.83997 11.7433 2.37196 12.4152 3.10061 13.0878C4.56203 14.4369 6.83054 15.8 9.9974 15.8V14.2ZM1.66406 10C2.3796 10.3578 2.37945 10.3581 2.37931 10.3584C2.37927 10.3584 2.37913 10.3587 2.37906 10.3589C2.37892 10.3591 2.37881 10.3593 2.37875 10.3595C2.37861 10.3598 2.37862 10.3597 2.37878 10.3594C2.3791 10.3588 2.38001 10.357 2.38153 10.3541C2.38456 10.3482 2.38998 10.3379 2.39781 10.3234C2.41349 10.2943 2.43879 10.2484 2.4739 10.1883C2.54418 10.0678 2.65339 9.89041 2.80293 9.67507C3.10273 9.24335 3.56033 8.66525 4.18585 8.08784C5.43276 6.93685 7.33092 5.8 9.9974 5.8V4.2C6.83054 4.2 4.56203 5.56315 3.10061 6.91216C2.37196 7.58475 1.83997 8.25665 1.48874 8.76243C1.31276 9.01584 1.18108 9.2291 1.09185 9.38206C1.04721 9.45859 1.01311 9.52018 0.989312 9.56433C0.977412 9.58642 0.968082 9.60415 0.961295 9.61724C0.957901 9.62378 0.955142 9.62916 0.953015 9.63333C0.951951 9.63542 0.951045 9.63721 0.950296 9.6387C0.949922 9.63944 0.949586 9.6401 0.949291 9.64069C0.949143 9.64099 0.94895 9.64137 0.948876 9.64152C0.948694 9.64188 0.948521 9.64223 1.66406 10ZM9.9974 5.8C12.6639 5.8 14.562 6.93685 15.8089 8.08784C16.4345 8.66525 16.8921 9.24335 17.1919 9.67507C17.3414 9.89041 17.4506 10.0678 17.5209 10.1883C17.556 10.2484 17.5813 10.2943 17.597 10.3234C17.6048 10.3379 17.6102 10.3482 17.6133 10.3541C17.6148 10.357 17.6157 10.3588 17.616 10.3594C17.6162 10.3597 17.6162 10.3598 17.616 10.3595C17.616 10.3593 17.6159 10.3591 17.6157 10.3589C17.6157 10.3587 17.6155 10.3584 17.6155 10.3584C17.6153 10.3581 17.6152 10.3578 18.3307 10C19.0463 9.64223 19.0461 9.64188 19.0459 9.64152C19.0458 9.64137 19.0457 9.64099 19.0455 9.64069C19.0452 9.6401 19.0449 9.63944 19.0445 9.6387C19.0437 9.63721 19.0428 9.63542 19.0418 9.63333C19.0396 9.62916 19.0369 9.62378 19.0335 9.61724C19.0267 9.60415 19.0174 9.58642 19.0055 9.56433C18.9817 9.52018 18.9476 9.45859 18.9029 9.38206C18.8137 9.2291 18.682 9.01584 18.5061 8.76243C18.1548 8.25665 17.6228 7.58475 16.8942 6.91216C15.4328 5.56315 13.1643 4.2 9.9974 4.2V5.8Z'
                fill='#01111E'
              />
              <circle
                cx='10'
                cy='10'
                r='2.5'
                stroke='#01111E'
                strokeWidth='1.6'
                strokeLinecap='round'
              />
            </svg>

            <div className='text-[#051632] md:text-sm'>{data?.view_num}</div>
          </div>
        </div>
      </Layout>

      <Layout padding='py-20 md:pt-6 md:text-sm'>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />

        <div className='mt-12 flex justify-center'>
          <div
            onClick={toggleLike}
            className='flex h-16 w-40 cursor-pointer items-center justify-between rounded-lg bg-[#2fb6bc] px-3.5 transition-opacity hover:opacity-90 md:h-12'
          >
            <div className='flex space-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill={data?.liked ? '#fff' : 'none'}
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
              <div className='font-medium text-white md:text-base'>좋아요</div>
            </div>

            <div className='text-white md:text-base'>{data?.like_num}</div>
          </div>
        </div>

        <div className='mt-20 flex items-center space-x-4 border-b border-b-[#e8e8e8] pb-8 md:space-x-2'>
          <div className='text-2xl font-bold md:text-xl'>댓글</div>
          <div className='flex h-8 w-12 items-center justify-center rounded-full bg-[#2fb6bc] font-medium text-white md:h-6 md:w-8 md:text-base'>
            {data?.reply.length}
          </div>
        </div>

        <div>
          {data?.reply.map((i: { [key: string]: any }) => (
            <div key={i.id} className='border-b border-b-[#e8e8e8] px-7 py-8'>
              <div className='flex items-center space-x-2'>
                <svg
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6'
                >
                  <path
                    d='M18 0C8.2422 0 0 8.2422 0 18C0 27.7578 8.2422 36 18 36C27.7578 36 36 27.7578 36 18C36 8.2422 27.7578 0 18 0ZM18 9C21.1086 9 23.4 11.2896 23.4 14.4C23.4 17.5104 21.1086 19.8 18 19.8C14.8932 19.8 12.6 17.5104 12.6 14.4C12.6 11.2896 14.8932 9 18 9ZM8.8092 26.5896C10.4238 24.2136 13.1166 22.6296 16.2 22.6296H19.8C22.8852 22.6296 25.5762 24.2136 27.1908 26.5896C24.8904 29.052 21.627 30.6 18 30.6C14.373 30.6 11.1096 29.052 8.8092 26.5896Z'
                    fill='#2FB6BC'
                  />
                </svg>

                <div className='text-lg'>{i.user}</div>

                <div className='text-sm text-[#9e9e9e]'>
                  {trimDate(i.created, 0, 10)}{' '}
                  {i.created.split('T')[1].slice(0, 8)}
                </div>
              </div>

              <div className='mt-5 text-lg'>{i.text}</div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-between space-x-14 border-b border-b-[#e8e8e8] md:space-x-4'>
          <div className='grow py-8'>
            <input
              type='text'
              {...register('reply', {
                required: '댓글을 입력해주세요',
                minLength: {
                  message: '10자 이상의 댓글을 남겨주세요',
                  value: 10,
                },
              })}
              placeholder='댓글을 입력해주세요.'
              className='mt-2 w-full px-7 text-lg outline-none placeholder:text-[#9e9e9e] md:px-4 md:text-sm'
            />
            <div className='px-7 text-sm text-red-500'>
              {errors?.reply?.message}
            </div>
          </div>

          <div
            onClick={handleSubmit(onValid, onInvalid)}
            className='flex h-[2.8rem] w-[7.5rem] cursor-pointer items-center justify-center space-x-1.5 rounded-lg bg-[#2fb6bc] font-medium text-white transition-all hover:opacity-90 md:h-[1.8rem] md:w-[5.4rem] md:text-sm'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='md:w-[0.8rem]'
            >
              <path
                d='M10.558 13.6172L12.319 13.1092L18.691 6.38729C18.7746 6.30159 18.8212 6.18643 18.8206 6.06668C18.8201 5.94693 18.7724 5.83221 18.688 5.74729L18.053 5.10529C18.012 5.06313 17.9629 5.02956 17.9088 5.00655C17.8546 4.98354 17.7965 4.97154 17.7376 4.97126C17.6788 4.97098 17.6205 4.98243 17.5661 5.00492C17.5118 5.02742 17.4624 5.06052 17.421 5.10229L11.077 11.7962L10.557 13.6162L10.558 13.6172ZM19.31 3.83329L19.945 4.47629C20.821 5.36329 20.829 6.79429 19.961 7.67229L13.266 14.7222L9.502 15.8062C9.2722 15.8705 9.02626 15.8411 8.81816 15.7243C8.61006 15.6075 8.4568 15.4129 8.392 15.1832C8.34378 15.0181 8.34309 14.8427 8.39 14.6772L9.485 10.8372L16.151 3.81629C16.3582 3.60765 16.6049 3.44235 16.8766 3.33005C17.1484 3.21774 17.4398 3.16066 17.7339 3.16215C18.0279 3.16364 18.3187 3.22366 18.5893 3.33872C18.8599 3.45378 19.1049 3.62256 19.31 3.83329ZM9.184 3.81621C9.68 3.81621 10.082 4.22321 10.082 4.72521C10.0828 4.84388 10.0602 4.96154 10.0155 5.07146C9.97075 5.18139 9.90481 5.28142 9.82141 5.36584C9.73801 5.45026 9.63879 5.51742 9.52942 5.56347C9.42004 5.60952 9.30267 5.63355 9.184 5.63421H5.592C4.6 5.63421 3.796 6.44821 3.796 7.45121V18.3572C3.796 19.3612 4.6 20.1752 5.592 20.1752H16.368C17.36 20.1752 18.165 19.3612 18.165 18.3572V14.7222C18.165 14.2202 18.567 13.8132 19.063 13.8132C19.559 13.8132 19.961 14.2202 19.961 14.7232V18.3572C19.961 20.3652 18.352 21.9932 16.368 21.9932H5.592C3.608 21.9932 2 20.3652 2 18.3572V7.45121C2 5.44421 3.608 3.81621 5.592 3.81621H9.184Z'
                fill='white'
              />
            </svg>
            <div>댓글 입력</div>
          </div>
        </div>

        <Link href='/course-story/newsletter/1'>
          <a className='mt-6 flex h-[2.8rem] w-[6.5rem] items-center justify-center rounded-lg border border-[#6b6b6b] text-lg font-medium text-[#6b6b6b] transition-all hover:opacity-70 md:h-[1.9rem] md:w-[4.7rem] md:text-sm'>
            목록보기
          </a>
        </Link>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};

export default NewsLetterDetail;
