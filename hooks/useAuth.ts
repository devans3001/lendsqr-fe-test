import { LoginDetails } from "@/types/type";
import { useLocalStorageState } from "./useLocalStorage";


export function useAuth() {
  const [user] = useLocalStorageState<LoginDetails | null>(null, "user");
  return { user, isAuthenticated: !!(user?.email && user?.password) };
}
