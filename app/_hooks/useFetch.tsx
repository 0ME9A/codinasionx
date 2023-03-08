"use client";
import { useEffect, useState } from "react";

type useFetchType = {
  storage?: boolean;
  url: string | null;
  per_page?: number | "auto";
};

export default function useFetch({ url = null, storage = false, per_page = "auto" }: useFetchType) {
  const [increment, setIncrement] = useState<number>(1);
  const [status, setStatus] = useState<number>(102);
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      const isPage = page > 1 ? `page=${page}&` : "";
      const isPer_page = per_page !== "auto" ? `per_page=${per_page}&` : "";
      const finalUrl = `${url}?${isPer_page}${isPage}`;

      try {
        if (status !== 0) {
          const fetchData = await fetch(finalUrl);
          if (fetchData.status === 200) {
            const res = await fetchData.json();
            storage ? setData([...data, ...res]) : setData(res);
            !res.length ? setStatus(0) : setStatus(fetchData.status);
            setPage(page + 1);
          }
        }
      } catch (error) {
        console.log("Error code: UF0000X", error);
        setStatus(404);
      }
    }

    url && fetchData();
  }, [increment]);

  useEffect(() => {
    // console.log("use fetch", status);
    const reFetch = setTimeout(() => {
      if (status !== 200 && status !== 102) setIncrement(increment + 1);
    }, 5000);

    return () => clearInterval(reFetch);
  }, [status]);
  return {
    data,
    status,
    setIncrement,
    page,
    increment,
    setStatus,
  };
}
