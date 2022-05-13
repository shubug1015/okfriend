import Pagebar from '@components/pagebar';
import { useLocale } from '@libs/client/useLocale';
import { useRouter } from 'next/router';
import Notice from './notice';

interface IProps {
  data: { [key: string]: any };
  totalItems: number;
}

export default function NoticeList({ data, totalItems }: IProps) {
  const { text } = useLocale();
  const router = useRouter();
  const [searchType, orderType, currentPage, searchTerm] = router.query
    .slug as string[];
  return (
    <>
      <div className='mt-8 flex h-[3.75rem] items-center border-y border-[rgba(0,0,0,0.16)] md:hidden'>
        <div className='flex w-[10%] justify-center'>{text.notice['5']}</div>
        {/* <div className='flex w-[8.5%] justify-center'></div> */}
        <div className='flex grow justify-center'>{text.notice['6']}</div>
        <div className='flex w-[10%] justify-center'>{text.notice['7']}</div>
        <div className='flex w-[10%] justify-center'>{text.notice['8']}</div>
        <div className='flex w-[10%] justify-center'>{text.notice['9']}</div>
      </div>

      {data?.fixed.map((i: { [key: string]: any }) => (
        <Notice
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
        <Notice
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
