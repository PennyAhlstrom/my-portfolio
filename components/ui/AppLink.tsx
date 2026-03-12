import Link from "next/link"

type AppLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light" | "muted"
  arrow?: boolean
  external?: boolean
  className?: string
  onClick?: () => void
}

export default function AppLink({
  href,
  children,
  variant = "muted",
  arrow = false,
  external = false,
  className = "",
  onClick,
}: AppLinkProps) {

  const variants = {
    dark: "text-sm font-medium text-gray-700 hover:text-white",
    light: "text-sm font-medium text-gray-200 hover:text-black",
    muted: "text-sm text-gray-500 hover:text-gray-700",
  }

  const styles = `${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {arrow && <span className="ml-1">→</span>}
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={styles} onClick={onClick}>
      {content}
    </Link>
  )
}