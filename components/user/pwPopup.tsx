import Input from '@components/input';
import { usersApi } from '@libs/api';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FieldErrors, useForm } from 'react-hook-form';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect } from 'react';
import { cls, clsFilter } from '@libs/client/utils';
import { useLocale } from '@libs/client/useLocale';

interface IProps {
  username: string;
  closePopup: () => void;
}

interface IForm {
  password: string;
  passwordCheck: string;
}

const popupVar = {
  invisible: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Popup({ username, closePopup }: IProps) {
  const { locale, text } = useLocale();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async ({ password }: IForm) => {
    try {
      await usersApi.resetPw(username, password);
      closePopup();
      router.push('/login');
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  useEffect(() => {
    disableBodyScroll(document.body);
    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
  return (
    <div
      onClick={closePopup}
      className='fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.6)]'
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          return;
        }}
        variants={popupVar}
        initial='invisible'
        animate='visible'
        exit='exit'
        className='w-[43.75rem] rounded bg-white p-12 md:w-[330px] md:py-9 md:px-3.5'
      >
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold',
              'font-notoSans',
              'font-notoSans'
            ),
            'flex justify-center text-3xl font-bold md:text-2xl'
          )}
        >
          {text.pwPopup['1']}
        </div>

        <div className='mt-12 w-full space-y-8 md:mt-8'>
          <Input
            type='password'
            label={text.pwPopup['2']}
            register={register('password', {
              required: text.pwPopup['3'],
              validate: {
                notPw: (value) => {
                  const regPw =
                    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
                  if (regPw.test(value)) {
                    return true;
                  } else {
                    return text.pwPopup['4'];
                  }
                },
              },
            })}
            error={errors?.password?.message}
          />

          <Input
            type='password'
            label={text.pwPopup['5']}
            register={register('passwordCheck', {
              required: text.pwPopup['6'],
              validate: {
                notPwCheck: (value) =>
                  value === watch('password') || text.pwPopup['7'],
              },
            })}
            error={errors?.passwordCheck?.message}
          />
        </div>

        <div
          onClick={handleSubmit(onValid, onInvalid)}
          className='mt-12 flex cursor-pointer justify-center rounded bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90 md:py-2.5 md:text-base'
        >
          {text.pwPopup['7']}
        </div>
      </motion.div>
    </div>
  );
}
