import { useState, useEffect } from "react";

function useFetch() {
  const url = "http://localhost:8000/paragraph";
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(res => {
        setData(res[0].content);
      })
      .catch(err => {
        err.json().then(body => setError(body));
      })
  }, [url])

  return {data, error};
}

export default useFetch;