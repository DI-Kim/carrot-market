import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: undefined | any;
  error?: undefined | any;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

//return [function, object]
export default function useMutation(url: string): UseMutationResult {
  const [states, setStates] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setStates((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setStates((prev) => ({ ...prev, data: json })))
      .catch((error) => setStates((prev) => ({ ...prev, error: error })))
      .finally(() => setStates((prev) => ({ ...prev, loading: false })));
  }

  return [mutation, { ...states }];
}
