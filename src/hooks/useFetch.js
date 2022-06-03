import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useFetch(uri) {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_HEROES_BASE_URL}${uri}?ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error
  };
}
