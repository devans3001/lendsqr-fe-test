import Skeleton from "react-loading-skeleton";
import style from "./users.module.css";
import { SkeletonTableRows } from "@/components/SkeletonTableRow";

function UsersSkeleton() {
  return (
    <div className={style.container}>
        <h1>

          <Skeleton width={50} height={20} />
        </h1>
      <div className={style.userCards}>
        {Array.from({ length: 4 }).map((_, cellIdx) => (
          <div key={cellIdx} className={style.card}>
            <Skeleton width={"200px"} height={"100px"} />
          </div>
        ))}
      </div>

      <table className="userTableWrapper">
        <SkeletonTableRows count={10}/>
      </table>
    </div>
  );
}

export default UsersSkeleton;
