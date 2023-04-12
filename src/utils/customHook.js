import { useState, useEffect } from "react";

export const useFetch = (url) => {
  //set up our state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFetch = useCallback(
    async (fetchUrl) => {
      try {
        setLoading(true);
        const result = await fetch(fetchUrl);
        const resultData = await result.json();
        setData(resultData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    getFetch(url);
  }, [getFetch]);

  return [loading, data, error];
};
