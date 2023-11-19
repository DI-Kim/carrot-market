import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  const { data, error } = useSWR("/api/users/me", fetcher);

  const router = useRouter();

  //! replace: 브라우저에 히스토리를 남기지 않음. 따라서 권한이 없으면 replace를 사용하여 히스토리를 남기지 말자.
  //! push: 성공적으로 로딩됐다면 브라우저에 히스토리를 남김.
  // return router.replace("/enter");

  return data;
}
