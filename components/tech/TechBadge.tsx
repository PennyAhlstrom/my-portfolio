import { techIcons } from "@/components/icons/techIcons";

type TechBadgeProps = {
  children: string;
  className?: string;
};

export default function TechBadge({
  children,
  className = "",
}: TechBadgeProps) {
  const key = children.toLowerCase();
  const Icon = techIcons[key];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted ${className}`}
    >
      {Icon && (
        <span className="text-muted">
          <Icon className="text-sm shrink-0" />
        </span>
      )}
      {children}
    </span>
  );
}