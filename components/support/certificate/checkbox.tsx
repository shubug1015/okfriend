import { cls } from '@libs/client/utils';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  question: string;
  register: UseFormRegisterReturn;
  error?: string;
  children?: React.ReactNode;
}

export default function Checkbox({
  question,
  register,
  error,
  children,
}: IProps) {
  return (
    <div
      className={cls(
        question === '5. 기타' ? 'md:h-[17rem]' : 'md:h-56',
        'flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:flex-col md:justify-center md:space-y-6'
      )}
    >
      <div className='flex items-center space-x-4 md:w-full md:flex-col md:space-x-0 md:space-y-3'>
        <div className='whitespace-pre-wrap pl-1 text-lg md:w-full md:text-sm md:tracking-tighter'>
          {question}
        </div>

        {children}
      </div>

      <div className='flex space-x-5 md:grid md:w-full md:grid-cols-5 md:gap-y-4 md:space-x-0'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className='flex md:flex-col md:items-center md:space-y-1'
          >
            <div className='hidden text-sm text-[#6b6b6b] md:block'>{i}</div>

            <input
              type='radio'
              value={i}
              {...register}
              className={cls(
                error ? 'border-red-500' : 'border-[#d6d6d6]',
                'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
