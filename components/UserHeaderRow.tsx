import { tableHeaders } from "@/utils/data";
import { MdFilterList } from "react-icons/md";

interface UserHeaderRowProps {
  item: string;
  i: number;
  onFilterClick: () => void;
  onSortClick: () => void;
}

function UserHeaderRow({ item, i, onFilterClick,onSortClick }: UserHeaderRowProps) {
  const isLast = i === tableHeaders.length - 1;

  return (
    <th>
      <div>
        <span  onClick={onSortClick}>{item}</span>
        {!isLast && <MdFilterList size={20} onClick={onFilterClick} />}
      </div>
    </th>
  );
}

export default UserHeaderRow;
