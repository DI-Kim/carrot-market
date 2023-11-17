import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: undefined | any;
  error?: undefined | any;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

//return [function, object]
export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  function mutation(data: any) {}

  return [mutation, { loading, data, error }];
}
