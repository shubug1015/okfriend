import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';

import Course from './course';

interface IProps {
  data: { [key: string]: any };
  totalItems: number;
}

export default function CourseList({ data, totalItems }: IProps) {
  const router = useRouter();
  const [courseType, courseCategory, currentPage] = router.query
    .slug as string[];
  // const title =
  //   courseCategory === 'live'
  //     ? 'LIVE 차시 강의 리스트'
  //     : courseCategory === 'required'
  //     ? '필수 차시 강의 리스트'
  //     : courseCategory === 'elective'
  //     ? '선택 차시 강의 리스트'
  //     : '지난 연수 자료 강의 리스트';
  return (
    <>
      {/* <div className='text-2xl font-bold'>{title}</div> */}

      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-9 md:grid-cols-1 md:gap-x-0 md:gap-y-6'>
        {data?.map((i: { [key: string]: any }) => (
          <Course
            key={i.id}
            id={i.id}
            thumbnail={i.thumbnail}
            name={i.name}
            tutor={i.tutor}
            courseType={courseType}
            courseCategory={courseCategory}
            url={i.url}
          />
        ))}
      </div>

      <div className='mt-24 flex justify-center md:mt-10'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={12}
          currentPage={+currentPage}
          url={(page: number) =>
            router.push(`/course/list/${courseType}/${courseCategory}/${page}`)
          }
        />
      </div>
    </>
  );
}
