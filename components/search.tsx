import React, { useState } from 'react';
import Select from './select';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const slugs = router.query.slug as string[];
  const [searchType, setSearchType] = useState({
    label: (slugs[0] === 'title' ? '제목' : '글쓴일') || '제목',
    value: slugs[0] || 'title',
  });
  const [orderType, setOrderType] = useState({
    label:
      (slugs[1] === 'created'
        ? '최신순'
        : slugs[1] === 'view_num'
        ? '조회순'
        : '댓글 많은 순') || '최신순',
    value: slugs[1] || 'created',
  });
  const [searchTerm, setSearchTerm] = useState(slugs[3] || '');

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setSearchTerm(value);
  };

  return (
    <div className='flex justify-between'>
      <div className='flex space-x-4'>
        <Select
          select={searchType}
          option={[
            {
              id: 0,
              label: '제목',
              value: 'title',
            },
            {
              id: 1,
              label: '글쓴일',
              value: 'user',
            },
          ]}
          setSelect={setSearchType}
        />

        <div className='flex space-x-4'>
          <input
            type='text'
            placeholder=''
            value={searchTerm}
            onChange={handleSearchTerm}
            className='h-12 w-80 rounded-lg border border-[#d6d6d6] pl-3 outline-none'
          />

          <div
            onClick={() =>
              searchTerm &&
              searchTerm.length > 0 &&
              router.push(
                `/support/notice/${searchType.value}/${orderType.value}/1/${searchTerm}`
              )
            }
            className='flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg bg-[#2fb6bc] text-lg font-medium text-white'
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
          {
            id: 2,
            label: '댓글 많은 순',
            value: 'like_num',
          },
        ]}
        url={(order: string) =>
          router.push(
            `/support/notice/${searchType.value}/${order}/1/${searchTerm}`
          )
        }
        setSelect={setOrderType}
      />
    </div>
  );
}
