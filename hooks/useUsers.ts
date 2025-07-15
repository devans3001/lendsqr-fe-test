import { User } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

type UserResponse = {
  data: User[];
};

async function fetchUser(): Promise<UserResponse> {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(`/api/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export function useUser() {
  const { isPending, data, error, isError } = useQuery<UserResponse, Error>({
    queryKey: ["users"],
    queryFn: () => fetchUser(),
    staleTime: 60 * 1000,
    // enabled: !!id,
  });

  return { users:data?.data || [], isPending, error, isError };
}
