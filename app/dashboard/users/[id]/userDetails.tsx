import { LuUserRound } from "react-icons/lu";
import StarRating from "@/components/StarRating";
import { formatToNaira } from "@/utils/helper";
import style from "./user.module.css";
import { useSearchParamsHook } from "@/hooks/useSearchParamHook";

function UserDetails() {
  const { getParam, setParam } = useSearchParamsHook();

  const tab = getParam("tabs") || "general-details";

  const tabParam = (val: string) => {
    setParam("tabs", val);
  };

  const tabs = [
    "General Details",
    "Documents",
    "Loan",
    "Savings",
    "Bank Details",
    "App and System",
  ];
  return (
    <section>
      <div className={style.basicInfo}>
        <span>
          <LuUserRound size={26} />
        </span>

        <div className={style.name}>
          <h1>Evans DIegbe</h1>
          <span>LSQFf587g90</span>
        </div>
        <div className={style.star}>
          <h1>User Tier</h1>
          <span>
            <StarRating maxRating={3} size={24} defaultRating={1}/>
          </span>
        </div>
        <div className={style.money}>
          <h1>{formatToNaira(200000, "NGN", 2)}</h1>
          <span>Evans DIegbe</span>
        </div>
      </div>

      <div className={style.tabs}>
        {tabs.map((ele) => {
          const txt = ele.toLowerCase().split(" ").join("-");
        //   console.log(txt);
          const isActive = txt === tab;
          return (
            <p
              key={ele}
              onClick={() => tabParam(txt)}
              className={`${isActive && style.tabsActive}`}
            >
              {ele}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default UserDetails;
