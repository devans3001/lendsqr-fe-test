"use client";

import { useRouter } from "next/navigation";
import style from "./user.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import UserDetails from "./userDetails";
import ProfileSummary from "./userSummary";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { User } from "@/types/type";
import { usePageTitle } from "@/hooks/usePageTitle";

/**
 * Renders the user details page within the dashboard.
 *
 * This component displays detailed information about a selected user, including their basic info,
 * profile summary, and provides actions to blacklist or activate the user. It also includes navigation
 * functionality to return to the users list.
 *
 * @component
 * @returns {JSX.Element} The user details page layout.
 *
 * @remarks
 * - Retrieves the selected user from local storage using the `useLocalStorageState` hook.
 * - Sets the page title to "User | Lendsqr" via the `usePageTitle` hook.
 * - Provides a "Back to Users" link that navigates to the users list using Next.js router.
 * - Displays user details and profile summary using `UserDetails` and `ProfileSummary` components.
 * - Includes buttons for blacklisting and activating the user (functionality not implemented in this snippet).
 *
 * @example
 * ```tsx
 * <UserPage />
 * ```
 */
function UserPage() {
  const [user] = useLocalStorageState<User | null>(null, `selectedUser`);

  const router = useRouter();

  const goBack = () => {
    router.push("/dashboard/users");
  };

   usePageTitle("User | Lendsqr")

  return (
    <div className={style.container}>
      <p onClick={goBack}>
        <HiOutlineArrowNarrowLeft />
        Back to Users
      </p>

      <header>
        <h1>user details</h1>

        <div>
          <button>blacklist user</button>
          <button>activate user</button>
        </div>
      </header>

      <UserDetails user={user}/>

      <ProfileSummary user={user} />
    </div>
  );
}

export default UserPage;
