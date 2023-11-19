import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      //! replace: 브라우저에 히스토리를 남기지 않음. 따라서 권한이 없으면 replace를 사용하여 히스토리를 남기지 말자.
      //! push: 성공적으로 로딩됐다면 브라우저에 히스토리를 남김.
      router.replace("/enter");
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
