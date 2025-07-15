import { MenuItem } from "@/types/type";
import Link from "next/link";

export function SideItem({ item, pathname }: { item: MenuItem; pathname: string }) {
  const { title, subItems } = item;
  return (
    <div style={{ marginTop: "1.5em" }}>
      <h4 className="sideItem">{title}</h4>
      {subItems?.map((ele) => (
        <Link
          href={`/dashboard${ele.path}`}
          key={ele.title}
          className={`sideItem ${
            pathname.includes((ele.path ?? "").slice(0)) ? "sideActive" : ""
          } `}
        >
          <ele.icon />
          <span>{ele.title}</span>
        </Link>
      ))}
    </div>
  );
}