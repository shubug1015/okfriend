import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

interface IProfile {
  [key: string]: any;
}

interface IProps {
  isPrivate?: boolean;
}

export interface IUser {
  ok: boolean;
  token: string | null;
  profile: IProfile | null;
}

export const useUser = ({ isPrivate = false }: IProps) => {
  const { data, error, mutate } = useSWR<IUser>('/api/auth');
  const router = useRouter();

  console.log(data);

  useEffect(() => {
    if (data && data.token && data.profile && !isPrivate) {
      router.replace('/');
    }

    if (data && !data.token && !data.profile && isPrivate) {
      router.replace('/login');
    }
  }, [data, router]);

  return {
    isLoading: !data && !error,
    token: data?.token,
    profile: data?.profile,
    mutate,
  };
};
