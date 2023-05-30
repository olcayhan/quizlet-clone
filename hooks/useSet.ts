import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useSet = (setId: string) => {
  const url = setId ? `/api/set/${setId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useSet;
