import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';
import Notice from './notice';

interface IProps {
  //   notice: any[];
  data: any[];
  totalItems: number;
  currentPage: number;
}

export default function NoticeList({ data, totalItems, currentPage }: IProps) {
  const router = useRouter();
  const [searchType, orderType, page, searchTerm] = router.query
    .slug as string[];
  return (
    <>
      <div className='mt-8 flex h-[3.75rem] items-center border-y border-[rgba(0,0,0,0.16)]'>
        <div className='flex w-[8.5%] justify-center'>번호</div>
        <div className='flex w-[8.5%] justify-center'>주제</div>
        <div className='flex grow justify-center'>제목</div>
        <div className='flex w-[10%] justify-center'>작성자</div>
        <div className='flex w-[10%] justify-center'>작성일</div>
        <div className='flex w-[10%] justify-center'>조회수</div>
      </div>

      {data?.map((i) => (
        <Notice
          key={i}
          id={i}
          type={'notice'}
          subject={'공지'}
          title={'제목'}
          created={'2022-04-19T'}
          name={'관리자'}
          view={1}
        />
      ))}

      {data?.map((i) => (
        <Notice
          key={i}
          id={i}
          type={''}
          num={1}
          subject={'주제'}
          title={'제목'}
          created={'2022-04-19T'}
          name={'관리자'}
          view={1}
        />
      ))}

      <div className='mt-24 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          currentPage={currentPage}
          url={(page: number) =>
            router.push(
              `/support/notice/${searchType}/${orderType}/${page}/${
                searchTerm || ''
              }`
            )
          }
        />
      </div>
    </>
  );
}
