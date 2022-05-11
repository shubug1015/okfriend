import { surveyApi } from '@libs/api';
import { IUser } from '@libs/client/useUser';
import { cls } from '@libs/client/utils';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface IForm {
  type: string;
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

export default function Popup() {
  const { data } = useSWR<IUser>('/api/user');
  const [loading, setLoading] = useState(false);

  const downloadPdf = async () => {
    setLoading(true);
    try {
      const pdfEl = document.querySelector('#pdfFile') as HTMLElement;

      await html2canvas(pdfEl, {
        onclone: (clonedDoc) => {
          const clonedPdfEl = clonedDoc.querySelector(
            '#pdfFile'
          ) as HTMLElement;
          clonedPdfEl.style.display = 'block';
        },
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const pdfWidth = 210;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');

        const blob = pdf.output();
        console.log(pdf.output());
        const formData = new FormData();
        formData.append('certificate', pdf.output());

        await surveyApi.sendCertificate(formData, data?.token as string);
        // pdf.output('dataurlnewwindow');
        // pdf.save('download.pdf');
      });
    } catch {
      alert('Error');
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid = async (data: IForm) => {
    downloadPdf();
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
    <div className='fixed top-0 left-0 z-[50] flex h-screen w-screen items-center justify-center overflow-y-scroll bg-[rgba(0,0,0,0.2)]'>
      <motion.div
        variants={popupVar}
        initial='invisible'
        animate='visible'
        exit='exit'
        className='top-1/2 left-1/2 w-[21.875rem] rounded-xl bg-white py-10 shadow-sm md:w-[330px] md:py-8'
      >
        <div className='text-center font-nexonBold text-[1.375rem] font-bold'>
          이수증 발급
        </div>

        <div className='mt-8 flex justify-center space-x-24'>
          {['영문', '국문'].map((i) => (
            <div key={i} className=''>
              <input
                type='radio'
                value={i}
                {...register('type', {
                  required: '항목을 선택해주세요',
                })}
                className={cls(
                  errors?.type?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                  'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                )}
              />

              <div className='text-sm font-medium'>{i}</div>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <div
            onClick={handleSubmit(onValid, onInvalid)}
            className='mt-10 flex w-72 cursor-pointer justify-center rounded-lg bg-[#2fb6bc] py-4 font-bold text-white transition-all hover:opacity-90'
          >
            {loading ? (
              <svg
                role='status'
                className='h-6 w-6 animate-spin fill-[#2fb6bc] text-white'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            ) : (
              '발급하기'
            )}
          </div>
        </div>
      </motion.div>

      <div id='pdfFile' className='relative hidden h-[120rem] w-full bg-white'>
        <img src='/pdf.png' alt='PDF Image' className='object-contain' />

        <div
          id='pdfName'
          className='font-sans absolute left-1/2 top-0 translate-y-[41.35rem] -translate-x-1/2 text-[2.75rem] font-bold text-[#292E31]'
        >
          Dong Hyun Lee
        </div>
      </div>
    </div>
  );
}
