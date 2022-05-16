import Layout from '@layouts/sectionLayout';
import { courseApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { IUser } from '@libs/client/useUser';
import { trimDate } from '@libs/client/utils';
import { useRouter } from 'next/router';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface IProps {
  [key: string]: any;
  mutate: (args: { [key: string]: any }) => void;
}

interface IForm {
  review: string;
}

export default function Review({ data, mutate }: IProps) {
  const { text } = useLocale();
  const { data: myData } = useSWR<IUser>('/api/user');
  const router = useRouter();
  const { locale } = router;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });
  const onValid = async ({ review }: IForm) => {
    if (myData?.token) {
      try {
        const { data: message } = await courseApi.writeReview(
          locale,
          data?.id,
          review,
          myData?.token
        );
        if (message === 'unregistered lecture') {
          setError('review', { message: text.ReviewError['1'] });
        } else if (message === 'review exist') {
          setError('review', { message: text.ReviewError['2'] });
        } else {
          setValue('review', '');
          mutate({
            ...data,
            review: [
              ...data?.review,
              {
                id: Math.random(),
                user: {
                  name: myData?.profile?.name,
                },
                text: review,
                created: new Date().toISOString(),
              },
            ],
          });
        }
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
  return (
    <Layout padding='pt-20 pb-24 md:pt-12 md:pb-14'>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-3'>
          <div className='text-2xl font-bold md:text-xl'>
            {text.courseDetail['18']}
          </div>
          <div className='mt-0.5 rounded-full bg-[#2fb6bc] px-3 font-medium text-white md:px-2.5'>
            {data?.review.length}
          </div>
        </div>

        <div
          onClick={handleSubmit(onValid, onInvalid)}
          className='flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-[#2fb6bc] font-medium text-white transition-all hover:opacity-90 md:h-10 md:w-24 md:text-sm'
        >
          {text.courseDetail['19']}
        </div>
      </div>

      <textarea
        {...register('review', {
          required: text.ReviewError['3'],
          minLength: {
            message: text.ReviewError['4'],
            value: 10,
          },
        })}
        placeholder={text.courseDetail['20']}
        className='mt-6 h-36 w-full border border-t-2 border-[#dadada] border-t-[#9e9e9e] py-6 px-7 outline-none md:mt-4 md:h-24 md:px-3 md:py-3.5'
      />
      <div className='mt-2 text-sm text-red-500'>{errors?.review?.message}</div>

      <div>
        {data?.review.map((i: { [key: string]: any }) => (
          <div
            key={i.id}
            className='border-b border-b-[#e8e8e8] py-10 md:py-5 md:px-4'
          >
            <div className='flex items-center space-x-2'>
              <svg
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-9 md:w-6'
              >
                <path
                  d='M18 0C8.2422 0 0 8.2422 0 18C0 27.7578 8.2422 36 18 36C27.7578 36 36 27.7578 36 18C36 8.2422 27.7578 0 18 0ZM18 9C21.1086 9 23.4 11.2896 23.4 14.4C23.4 17.5104 21.1086 19.8 18 19.8C14.8932 19.8 12.6 17.5104 12.6 14.4C12.6 11.2896 14.8932 9 18 9ZM8.8092 26.5896C10.4238 24.2136 13.1166 22.6296 16.2 22.6296H19.8C22.8852 22.6296 25.5762 24.2136 27.1908 26.5896C24.8904 29.052 21.627 30.6 18 30.6C14.373 30.6 11.1096 29.052 8.8092 26.5896Z'
                  fill='#2FB6BC'
                />
              </svg>
              <div className='text-lg md:text-sm'>{i.user.name}</div>
            </div>
            <div className='mt-1.5 text-sm text-[#9e9e9e] md:text-xs'>
              {trimDate(i.created, 0, 10)} {i.created.split('T')[1].slice(0, 8)}
            </div>

            <div className='mt-5 text-lg md:text-sm'>{i.text}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
