type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition"

  const variantStyles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-90"
      : "border border-white/20 text-white hover:bg-white/10"

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}