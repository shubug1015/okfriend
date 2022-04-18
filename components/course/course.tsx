import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  thumbnail: string;
  name: string;
  tutor: any;
}

export default function Course({ id, thumbnail, tutor, name }: IProps) {
  return (
    <Link href='/'>
      <a>
        <div className='flex flex-col justify-between h-[13.875rem] bg-slate-500 rounded-lg mt-4'>
          <div className='flex justify-end pt-3.5 pr-3.5'>
            <div className='bg-[#d60a51] pl-0.5 w-7 aspect-square flex justify-center items-center rounded-full'>
              <svg
                width='9'
                height='10'
                viewBox='0 0 9 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.77246 5.00112L0.11355 10.0003L0.11355 0.00189791L8.77246 5.00112Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>

          <div className='pl-5 pb-5'>
            <div className='text-xl font-bold text-white'>
              M.A.G.I.C Project로 글로벌 리더 되기
            </div>

            <div className='text-white mt-1'>홍길동 강사</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
