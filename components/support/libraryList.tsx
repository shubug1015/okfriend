import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';
import Library from './library';

interface IProps {
  //   notice: any[];
  data: { [key: string]: any };
  totalItems: number;
}

export default function LibraryList({ data, totalItems }: IProps) {
  const router = useRouter();
  const [searchType, orderType, currentPage, searchTerm] = router.query
    .slug as string[];
  return (
    <>
      <div className='mt-8 flex h-[3.75rem] items-center border-y border-[rgba(0,0,0,0.16)] md:hidden'>
        <div className='flex w-[8.5%] justify-center'>번호</div>
        <div className='flex w-[8.5%] justify-center'></div>
        <div className='flex grow justify-center'>제목</div>
        <div className='flex w-[10%] justify-center'>작성자</div>
        <div className='flex w-[10%] justify-center'>작성일</div>
        <div className='flex w-[10%] justify-center'>조회수</div>
      </div>

      {data?.fixed.map((i: { [key: string]: any }) => (
        <Library
          key={i.id}
          id={i.id}
          type={'notice'}
          subject={'공지'}
          title={i.title}
          created={i.created}
          name={'관리자'}
          view={i.view_num}
        />
      ))}

      {data?.results.map((i: { [key: string]: any }, index: number) => (
        <Library
          key={i.id}
          id={i.id}
          type={''}
          num={(+currentPage - 1) * 15 + index + 1}
          subject={i.subject}
          title={i.title}
          created={i.created}
          name={'관리자'}
          view={i.view_num}
        />
      ))}

      <div className='mt-24 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={15}
          currentPage={+currentPage}
          url={(page: number) =>
            router.push(
              `/support/libaray/${searchType}/${orderType}/${page}/${
                searchTerm || ''
              }`
            )
          }
        />
      </div>
    </>
  );
}
