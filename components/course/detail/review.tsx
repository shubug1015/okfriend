import Layout from '@layouts/sectionLayout';
// import { API_URL, lecturesApi } from '@libs/api';
// import { AuthResponse } from '@libs/client/useAuth';
import { FieldErrors, useForm } from 'react-hook-form';
// import useSWR from 'swr';

interface IForm {
  review: string;
}

export default function Review() {
  // const { data } = useSWR<AuthResponse>('/api/auth');
  // const { data: lectureData, mutate } = useSWR(
  //   id ? `${API_URL}/lectures/${id}/` : null
  // );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });
  const onValid = async (values: IForm) => {
    // if (data?.token) {
    //   try {
    //     const { data: message } = await lecturesApi.writeReview(
    //       id,
    //       values.review,
    //       data.token
    //     );
    //     if (message === 'unregistered lecture') {
    //       setError('review', { message: '구매하지 않은 강의입니다.' });
    //     } else if (message === 'review exist') {
    //       setError('review', { message: '이미 리뷰를 작성한 강의입니다.' });
    //     } else {
    //       setValue('review', '');
    //       mutate({
    //         ...lectureData,
    //         review: [
    //           ...lectureData.review,
    //           {
    //             user: {
    //               nickname: data?.profile?.nickname,
    //               grade: data?.profile?.nickname,
    //             },
    //             text: values.review,
    //             created: new Date().toISOString(),
    //           },
    //         ],
    //       });
    //     }
    //   } catch {
    //     alert('Error');
    //   }
    // }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <Layout padding='pt-20 pb-24'>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-3'>
          <div className='text-2xl font-bold'>강의리뷰</div>
          <div className='flex justify-center items-center text-white font-medium w-12 h-8 rounded-full bg-[#2fb6bc]'>
            3
          </div>
        </div>

        <div className='flex justify-center items-center text-white font-medium w-40 h-12 rounded-lg bg-[#2fb6bc] cursor-pointer hover:opacity-90 transition-all'>
          작성하기
        </div>
      </div>

      <textarea
        {...register('review', {
          required: '리뷰를 입력해주세요',
          minLength: {
            message: '10자 이상의 리뷰를 남겨주세요',
            value: 10,
          },
        })}
        placeholder='강의리뷰를 작성해 주세요.'
        className='mt-6 h-36 w-full py-6 px-7 outline-none border border-[#dadada] border-t-2 border-t-[#9e9e9e]'
      />

      <div>
        {[0, 1].map((i) => (
          <div key={i} className='py-10 border-b border-b-[#e8e8e8]'>
            <div className='flex items-center space-x-2'>
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 0C8.2422 0 0 8.2422 0 18C0 27.7578 8.2422 36 18 36C27.7578 36 36 27.7578 36 18C36 8.2422 27.7578 0 18 0ZM18 9C21.1086 9 23.4 11.2896 23.4 14.4C23.4 17.5104 21.1086 19.8 18 19.8C14.8932 19.8 12.6 17.5104 12.6 14.4C12.6 11.2896 14.8932 9 18 9ZM8.8092 26.5896C10.4238 24.2136 13.1166 22.6296 16.2 22.6296H19.8C22.8852 22.6296 25.5762 24.2136 27.1908 26.5896C24.8904 29.052 21.627 30.6 18 30.6C14.373 30.6 11.1096 29.052 8.8092 26.5896Z'
                  fill='#2FB6BC'
                />
              </svg>
              <div className='text-lg'>닉네임</div>
            </div>
            <div className='text-[#9e9e9e] text-sm mt-1.5'>
              2022-02-14 12:10:36
            </div>

            <div className='text-lg mt-5'>작성한 글이 들어갑니다.</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
