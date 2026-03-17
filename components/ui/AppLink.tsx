import Link from "next/link"

type AppLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light" | "muted"
  arrow?: boolean
  direction?: "forward" | "back"
  external?: boolean
  newTab?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"  
  className?: string
  onClick?: () => void
}

export default function AppLink({
  href,
  children,
  variant = "muted",
  arrow = false,
  direction = "forward",
  external = false,
  newTab = false,
  icon,
  iconPosition = "left",
  className = "",
  onClick,
}: AppLinkProps) {

  const variants = {
    dark: "text-sm font-medium text-foreground hover:text-accent",
    light: "text-sm font-medium text-white/90 hover:text-white",
    muted: "text-sm text-muted hover:text-foreground",
  };

  // const styles = `${variants[variant]} ${className}` // OG version
  // const styles = `inline-flex items-center group ${variants[variant]} ${className}` // check if this looks nicer

  const styles = `inline-flex items-center transition-colors duration-200 ${variants[variant]} ${className}` // Smoother transitions?

  const arrowSymbol = direction === "back" ? "←" : "→"
  const arrowClass =
    direction === "back"
      ? "transition-transform duration-200 group-hover:-translate-x-0.5"
      : "transition-transform duration-200 group-hover:translate-x-0.5";

  const content = (
    <>
      {/* Back arrow */}
      {arrow && direction === "back" && (
        <span className={arrowClass}>{arrowSymbol}</span>
      )}

      {/* Left icon */}
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0 opacity-80">{icon}</span>
      )}

      {/* Text */}
      <span>{children}</span>

      {/* Right icon */}
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0 opacity-80">{icon}</span>
      )}

      {/* Forward arrow */}
      {arrow && direction === "forward" && (
        <span className={arrowClass}>{arrowSymbol}</span>
      )}
    </>
  )


  if (external || newTab) {
    return (
      <a
        href={href}
        className={`group ${styles}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={`group ${styles}`} onClick={onClick}>
      {content}
    </Link>
  )
}