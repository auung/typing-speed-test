import { useState, useEffect } from "react";

function useFetch(reset) {

  const url = process.env.REACT_APP_API_ROUTE;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData();
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
  }, [reset, url])
  return {data, loading};
}

export default useFetch;