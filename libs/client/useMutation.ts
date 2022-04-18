import { useState } from 'react';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: boolean;
}
type UseMutationResult<T> = [(req?: any) => void, UseMutationState<T>];

interface UseMutationProps {
  req?: any;
  redirectUrl?: string;
}

export default function useMutation<T = any>(fn?: any): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const mutation = async ({ req }: UseMutationProps) => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const { data } = await fn(req);
      setState((prev) => ({ ...prev, data }));
    } catch {
      setState((prev) => ({ ...prev, error: true }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };
  return [mutation, { ...state }];
}
