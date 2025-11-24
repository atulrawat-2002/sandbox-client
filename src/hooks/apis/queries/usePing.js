import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping";

export default function usePing() {
  const { isLoading, isError, res } = useQuery({
    queryFn: pingApi,
    queryKey: ['ping'],
    staleTime: 10000,
  });
  return { isLoading, isError, res };
}
