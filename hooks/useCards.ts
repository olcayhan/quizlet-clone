import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCards = (setId: string) => {
  const url = setId ? `/api/card/${setId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCards;
