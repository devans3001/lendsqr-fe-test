import { formatNumberWithCommas } from "@/utils/helper";
import style from "@/app/dashboard/users/users.module.css";
import { UserCardType } from "@/types/type";

function UserCard({ card }: { card: UserCardType }) {
  return (
    <div className={style.card}>
      {/* icon  */}
      <p style={{ background: `${card.background}` }}>
        <card.icon style={{color:`${card.foreground}`}} size={20}/>
      </p>
      <span>{card.title}</span>
      <h3>{formatNumberWithCommas(card.num)}</h3>
    </div>
  );
}

export default UserCard;
