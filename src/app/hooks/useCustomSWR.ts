import useSWR from "swr";

export const useCustomSWR = (
  key: string,
  endpoint: string,
  customFetcher: any,
) => {
  const apiUrl = `https://localhost:3001/${endpoint}`;

  const fetcher = async () => await customFetcher(apiUrl);

  return useSWR(endpoint, fetcher);
};
