import { STATUS_STYLES } from "@/utils/data";

type StatusKey = keyof typeof STATUS_STYLES;

export function StatusBadge({ status }: { status: StatusKey }) {
  const s = STATUS_STYLES[status];
  return <span className={`status-badge ${s.className}`}>{s.label}</span>;
}