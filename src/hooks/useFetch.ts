import { useEffect, useState } from 'react';
import axios from "axios"



export const useFetch = (url: string, config: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(true);


  useEffect(() => {
    axios
      .get(url, config)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url]);
  return {
    data,
    setData,
    error,
    isFetching,
  };
};
