import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('HTTP error! Status: ${response.status}');
        }

        const result = response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
