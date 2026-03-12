export function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
}

export function formatValueRange(min: number, max: number): string {
  if (min === max) return formatCurrency(min);
  return `${formatCurrency(min)} – ${formatCurrency(max)}`;
}

export function getDaysUntilDeadline(deadline: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const d = new Date(deadline);
  d.setHours(0, 0, 0, 0);
  return Math.round((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function getDeadlineStatus(deadline: string): "active" | "closing-soon" | "closing-today" | "closed" {
  const days = getDaysUntilDeadline(deadline);
  if (days < 0) return "closed";
  if (days === 0) return "closing-today";
  if (days <= 7) return "closing-soon";
  return "active";
}

export function formatDeadline(deadline: string): string {
  const d = new Date(deadline);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
