import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useSets = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/set/get", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useSets;
