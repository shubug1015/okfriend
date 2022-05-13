import { useLocale } from '@libs/client/useLocale';
import { cls } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  courseType: string;
  courseCategory: string;
}

export default function Navigator({ courseType, courseCategory }: IProps) {
  const { text } = useLocale();
  return (
    <div className='border-b border-[#e8e8e8]'>
      <div className='flex items-center justify-center md:mx-auto md:max-w-[330px] md:justify-between'>
        {/* {courseType === 'online' && (
          <Link href={`/course/list/${courseType}/live/1`}>
            <a>
              <div
                className={cls(
                  courseCategory === 'live'
                    ? 'border-[#2fb6bc]'
                    : 'border-transparent text-[#9e9e9e]',
                  'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:h-14 md:w-auto md:border-b-2 md:text-base'
                )}
              >
                LIVE 차시
              </div>
            </a>
          </Link>
        )} */}

        <Link href={`/course/list/${courseType}/required/1`}>
          <a>
            <div
              className={cls(
                courseCategory === 'required'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:h-14 md:w-auto md:border-b-2 md:text-base'
              )}
            >
              {text.preCourseHeader['4']}
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
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:h-14 md:w-auto md:border-b-2 md:text-base'
              )}
            >
              {text.preCourseHeader['5']}
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
                'flex h-16 w-48 items-center justify-center border-b-4 text-[1.375rem] font-bold md:h-14 md:w-auto md:border-b-2 md:text-base'
              )}
            >
              {text.preCourseHeader['6']}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
