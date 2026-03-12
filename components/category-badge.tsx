interface CategoryBadgeProps {
  category: string;
}

const categoryConfig: Record<string, { label: string; classes: string }> = {
  construction: { label: "Construction", classes: "bg-blue-100 text-blue-800" },
  IT: { label: "IT", classes: "bg-purple-100 text-purple-800" },
  services: { label: "Services", classes: "bg-green-100 text-green-800" },
  supplies: { label: "Supplies", classes: "bg-orange-100 text-orange-800" },
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = categoryConfig[category] || { label: category, classes: "bg-gray-100 text-gray-600" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.classes}`}>
      {config.label}
    </span>
  );
}
