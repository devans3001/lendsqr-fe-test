

import Skeleton from "react-loading-skeleton";

export function SkeletonTableRows({ count = 10 }: { count?: number }) {
  return (
    <tbody>
      {Array.from({ length: count }).map((_, idx) => (
        <tr key={idx}>
          {Array.from({ length: 7 }).map((_, cellIdx) => (
            <td key={cellIdx} style={{ padding: "1em" }}>
              <Skeleton height={20} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
