import { getDaysUntilDeadline, getDeadlineStatus, formatDeadline } from "@/lib/utils";

interface DeadlineBadgeProps {
  deadline: string;
}

export default function DeadlineBadge({ deadline }: DeadlineBadgeProps) {
  const status = getDeadlineStatus(deadline);
  const days = getDaysUntilDeadline(deadline);
  const formatted = formatDeadline(deadline);

  const config = {
    active: { classes: "bg-green-100 text-green-800", label: `Due ${formatted}` },
    "closing-soon": { classes: "bg-yellow-100 text-yellow-800", label: `${days}d left – ${formatted}` },
    "closing-today": { classes: "bg-red-100 text-red-800", label: "Closing today!" },
    closed: { classes: "bg-gray-100 text-gray-500", label: `Closed ${formatted}` },
  };

  const c = config[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${c.classes}`}>
      {c.label}
    </span>
  );
}
