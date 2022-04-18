import { cls } from '@libs/client/utils';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  register: UseFormRegisterReturn;
  error?: string;
  children: React.ReactNode;
}

export default function Checkbox({ error, register, children }: IProps) {
  return (
    <div>
      <div className='flex items-center space-x-2.5'>
        <input
          type='checkbox'
          {...register}
          className={cls(
            error ? 'border-red-500' : 'border-[#d6d6d6]',
            'h-4 w-4 cursor-pointer rounded-sm border'
          )}
        />
        {children}
      </div>

      <div className='mt-1 pl-7 text-sm text-red-500'>{error}</div>
    </div>
  );
}
