import React, { useState } from 'react';
import Select from './select';
import { useRouter } from 'next/router';

interface IProps {
  url: string;
}

export default function Search({ url }: IProps) {
  const router = useRouter();
  const slugs = router.query.slug as string[];

  const [searchType, setSearchType] = useState({
    label: slugs[0] === 'title' ? '제목' : '글쓴이',
    value: slugs[0],
  });
  const [orderType, setOrderType] = useState({
    label:
      slugs[1] === 'created'
        ? '최신순'
        : slugs[1] === 'view_num'
        ? '조회순'
        : '댓글 많은 순',
    value: slugs[1],
  });
  const [searchTerm, setSearchTerm] = useState(slugs[3] || '');

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setSearchTerm(value);
  };

  return (
    <div className='flex justify-between md:mb-8'>
      <div className='flex space-x-4 md:space-x-2'>
        {/* <Select
          select={searchType}
          option={[
            {
              id: 0,
              label: '제목',
              value: 'title',
            },
            {
              id: 1,
              label: '글쓴이',
              value: 'user',
            },
          ]}
          setSelect={setSearchType}
        /> */}

        <div className='flex h-12 w-36 items-center justify-between rounded-lg border border-[#d6d6d6] px-5 text-lg md:h-[2.188rem] md:w-20 md:px-2.5 md:text-[0.813rem]'>
          제목
        </div>

        <div className='flex space-x-4 md:space-x-2'>
          <input
            type='text'
            placeholder=''
            value={searchTerm}
            onChange={handleSearchTerm}
            className='h-12 w-80 rounded-lg border border-[#d6d6d6] pl-3 outline-none md:h-[2.188rem] md:w-auto md:grow'
          />

          <div
            onClick={() =>
              searchTerm &&
              searchTerm.length > 0 &&
              router.push(
                `/support/${url}/${searchType.value}/${orderType.value}/1/${searchTerm}`
              )
            }
            className='flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg bg-[#2fb6bc] text-lg font-medium text-white md:h-[2.188rem] md:w-[3.312rem] md:text-[0.813rem]'
          >
            검 색
          </div>
        </div>
      </div>

      <Select
        select={orderType}
        option={[
          {
            id: 0,
            label: '최신순',
            value: 'created',
          },
          {
            id: 1,
            label: '조회순',
            value: 'view_num',
          },
          // {
          //   id: 2,
          //   label: '댓글 많은 순',
          //   value: 'like_num',
          // },
        ]}
        url={(orderType: string) =>
          router.push(
            `/support/${url}/${searchType.value}/${orderType}/1/${searchTerm}`
          )
        }
        setSelect={setOrderType}
      />
    </div>
  );
}
