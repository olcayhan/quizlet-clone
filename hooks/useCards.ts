import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCards = (setId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/card/${setId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCards;
