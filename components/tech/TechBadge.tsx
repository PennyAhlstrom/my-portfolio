type TechBadgeProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export default function TechBadge({
  children,
  icon,
  className = "",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted ${className}`}
    >
      {icon && (
        <span className="text-muted">
          {icon}
        </span>
      )}
      {children}
    </span>
  )
}