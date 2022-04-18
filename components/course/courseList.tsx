// import Pagebar from '@components/pagebar';

import Course from './course';

interface IProps {
  title: string;
  data: any[];
  count: number;
}

export default function CourseList({ title, data, count }: IProps) {
  return (
    <>
      <div className='text-2xl font-bold'>{title}</div>

      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-9'>
        {data?.map((i) => (
          <Course
            key={i}
            id={i.id}
            thumbnail={i.thumbnail}
            name={i.name}
            tutor={i.tutor}
          />
        ))}
      </div>

      <div className='mt-24 flex justify-center'>
        {/* <Pagebar count={count} /> */}
      </div>
    </>
  );
}
