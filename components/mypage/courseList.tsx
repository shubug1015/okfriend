import Course from '@components/mypage/course';
import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';

interface IProps {
  category: string;
  data: any[];
  totalItems: number;
}

export default function CourseList({ category, data, totalItems }: IProps) {
  const router = useRouter();
  const currentPage = router.query.page as string;
  return (
    <div>
      <div className='space-y-4 md:space-y-8'>
        {data?.map((i) => (
          <Course
            key={i.id}
            id={i.id}
            thumbnail={i.lecture.thumbnail}
            name={i.lecture.name}
            created={i.lecture.created}
            progress={i.total_progress}
            courseCategory={i.lecture.category}
            category={category}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={5}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/mypage/course/${page}`)}
        />
      </div>
    </div>
  );
}
