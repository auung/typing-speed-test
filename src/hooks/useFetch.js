import { useState, useEffect } from "react";

function useFetch(reset) {

  const url = process.env.REACT_APP_LOCAL_ROUTE;

  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(res => {
        setData(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, [reset, url])
  return data;
}

export default useFetch;