import { Menu, Transition } from '@headlessui/react';
import { cls } from '@libs/client/utils';
import { Fragment } from 'react';

interface IProps {
  select: { label: string; value: string };
  option: any[];
  url?: (order: string) => void;
  setSelect: ({ label, value }: { label: string; value: string }) => void;
}

export default function Select({ select, option, url, setSelect }: IProps) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button
        className={cls(
          url ? 'w-48 md:hidden' : 'w-36 md:w-20',
          'flex h-12 items-center justify-between rounded-lg border border-[#d6d6d6] px-5 text-lg md:h-[2.188rem] md:px-2.5 md:text-[0.813rem]'
        )}
      >
        <span>{select.label}</span>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 md:w-3.5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={cls(
            url ? 'w-48' : 'w-36 md:w-20',
            'absolute left-0 mt-1.5 rounded-lg bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] outline-none md:mt-0.5'
          )}
        >
          <div>
            {option.map((i) => (
              <Menu.Item key={i.id}>
                <div
                  onClick={() => {
                    if (select.label !== i.label) {
                      setSelect({ label: i.label, value: i.value });
                      if (url) {
                        url(i.value);
                      }
                    }
                  }}
                  className={cls(
                    i.id === 0
                      ? 'rounded-t-lg'
                      : i.id === option.length - 1
                      ? 'rounded-b-lg'
                      : '',
                    select.label === i.label
                      ? 'font-medium'
                      : 'cursor-pointer text-[#9e9e9e] hover:opacity-70',
                    'px-5 py-4 text-lg transition-all md:px-2.5 md:py-0.5 md:text-[0.813rem]'
                  )}
                >
                  {i.label}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
