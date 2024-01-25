import useSWR from 'swr';

export const useCustomSWR = (endpoint: string, customFetcher: any, options = {}) => {
  const apiUrl = `https://localhost:3001${endpoint}`;

  const fetcher = async () => await customFetcher(apiUrl)

  return useSWR(apiUrl, fetcher, options);
};
