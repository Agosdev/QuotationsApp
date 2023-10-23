import { useState, useEffect } from "react";

interface IFetchData {
    url: string;
    initialData: any;
}

const useFetch = ({url, initialData}: IFetchData ) => {
      const [data, setData] = useState(initialData);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);

      useEffect(() => {
        setLoading(true);
          fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch(() => {
            setError(true);
          })
          .finally(() => setLoading(false));
      }, [url]);
      
      return { data, loading, error };
};

export default useFetch;