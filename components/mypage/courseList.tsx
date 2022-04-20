import Course from '@components/mypage/course';
import Pagebar from '@components/pagebar';

interface IProps {
  category: string;
  data: any[];
  count: number;
}

export default function CourseList({ category, data, count }: IProps) {
  return (
    <div>
      <div className='space-y-4'>
        {data?.map((i) => (
          <Course
            key={i}
            id={i}
            order={1}
            thumbnail={i.lecture_thumbnail}
            name={'강의명'}
            created={'2022-01-01T'}
            expiration={'2022-01-02'}
            progress={50}
            category={category}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        {/* <Pagebar count={count} /> */}
      </div>
    </div>
  );
}
