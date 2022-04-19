import { cls } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  courseType: string;
  courseCategory: string;
}

export default function Navigator({ courseType, courseCategory }: IProps) {
  return (
    <div className='flex justify-center items-center h-16 border-b border-[#e8e8e8]'>
      {courseType === 'online' && (
        <Link href={`/course/list/${courseType}/live/1`}>
          <a>
            <div
              className={cls(
                courseCategory === 'live'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                'flex justify-center w-48 h-16 items-center text-[1.375rem] font-bold border-b-4'
              )}
            >
              LIVE 차시
            </div>
          </a>
        </Link>
      )}

      <Link href={`/course/list/${courseType}/required/1`}>
        <a>
          <div
            className={cls(
              courseCategory === 'required'
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex justify-center w-48 h-16 items-center text-[1.375rem] font-bold border-b-4'
            )}
          >
            필수 차시
          </div>
        </a>
      </Link>

      <Link href={`/course/list/${courseType}/elective/1`}>
        <a>
          <div
            className={cls(
              courseCategory === 'elective'
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex justify-center w-48 h-16 items-center text-[1.375rem] font-bold border-b-4'
            )}
          >
            선택 차시
          </div>
        </a>
      </Link>

      <Link href={`/course/list/${courseType}/past/1`}>
        <a>
          <div
            className={cls(
              courseCategory === 'past'
                ? 'border-[#2fb6bc]'
                : 'border-transparent text-[#9e9e9e]',
              'flex justify-center w-48 h-16 items-center text-[1.375rem] font-bold border-b-4'
            )}
          >
            지난 연수 자료
          </div>
        </a>
      </Link>
    </div>
  );
}
