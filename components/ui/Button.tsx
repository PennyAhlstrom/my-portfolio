import Link from "next/link" // Enables client-side navigation - faster than using <a>

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  theme?: "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: React.ReactNode
  external?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  theme = "dark", // Default
  size = "md",
  className = "",
  icon,
  external = false,
}: ButtonProps) {
    
    const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition"

    const variants = {
        dark: {
        primary: "bg-white text-black hover:opacity-90",
        secondary: "border border-white/20 text-white hover:bg-white/10",
        },
        light: {
        primary: "bg-black text-white hover:opacity-90",
        secondary: "border border-gray-300 text-gray-900 hover:bg-gray-100",
        },
    }

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-4 text-base",
    }

    const styles = `${baseStyles} ${sizes[size]} ${variants[theme][variant]} ${className}`

    const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  )

    if (href) {
        if (external) {
        return (
            <a
            href={href}
            className={styles}
            target="_blank"
            rel="noopener noreferrer"
            >
            {content}
            </a>
        )
        }

        return (
        <Link href={href} className={styles}>
            {content}
        </Link>
        )
    }

    return (
        <button onClick={onClick} className={styles}>
        {children}
        </button>
  )
}