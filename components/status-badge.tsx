interface StatusBadgeProps {
  status: string;
}

const statusConfig: Record<string, { label: string; classes: string }> = {
  researching: { label: "Researching", classes: "bg-blue-100 text-blue-800" },
  pursuing: { label: "Pursuing", classes: "bg-indigo-100 text-indigo-800" },
  submitted: { label: "Submitted", classes: "bg-yellow-100 text-yellow-800" },
  won: { label: "Won", classes: "bg-green-100 text-green-800" },
  lost: { label: "Lost", classes: "bg-red-100 text-red-800" },
  passed: { label: "Passed", classes: "bg-gray-100 text-gray-600" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || { label: status, classes: "bg-gray-100 text-gray-600" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.classes}`}>
      {config.label}
    </span>
  );
}
