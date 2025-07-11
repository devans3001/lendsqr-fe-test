"use client"
import { useLocalStorageState } from '@/hooks/useLocalStorage';
import { LoginDetails } from '@/types/type';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Logout() {

   const router = useRouter();
   const [isLoading,setIsloading] = useState<boolean>(false)
  const [user, setUser] = useLocalStorageState<LoginDetails | null>(null, "user");
console.log(user )

  const handleLogout = () => {
  setIsloading(true);

  setTimeout(() => {
    setUser(null);
    router.push("/login");
  }, 1000);
};


if(isLoading) return <p>loading</p>

  return (
    <div onClick={handleLogout}>
      <LogOut/>
      <span>logout</span>
    </div>
  )
}

export default Logout