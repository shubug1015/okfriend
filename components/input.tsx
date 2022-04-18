import { cls } from '@libs/client/utils';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  type: 'text' | 'tel' | 'password';
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  readOnly?: boolean;
  children?: React.ReactNode;
}

export default function Input({
  type,
  label,
  register,
  error,
  readOnly,
  children,
}: IProps) {
  return (
    <div className='flex w-full flex-col'>
      <label className='font-medium'>{label}</label>

      <div className='mt-2 flex h-[3.75rem] w-full justify-between'>
        <input
          type={type}
          placeholder={label}
          {...register}
          readOnly={readOnly}
          className={cls(
            error ? 'border-red-500' : 'border-[#d6d6d6]',
            readOnly ? 'opacity-50' : '',
            'h-full grow rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
          )}
        />
        {children}
      </div>

      <div className='mt-2 text-sm text-red-500'>{error}</div>
    </div>
  );
}
