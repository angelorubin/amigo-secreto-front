import useSWR from 'swr';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useCustomSWR = (key, queryParams) => {
  const urlWithQuery = `${key}?${new URLSearchParams(queryParams)}`;
  const { data, error, mutate } = useSWR(urlWithQuery, fetcher);

  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
