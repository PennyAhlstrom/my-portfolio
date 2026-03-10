import Link from "next/link"

type AppLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "default" | "muted" | "light"
  className?: string
}

export default function AppLink({
  href,
  children,
  variant = "default",
  className = "",
}: AppLinkProps) {
  const variants = {
    default: "text-sm font-medium text-gray-700 hover:text-black",
    muted: "text-sm text-gray-500 hover:text-gray-700",
    light: "text-sm font-medium text-gray-200 hover:text-white",
  }

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}