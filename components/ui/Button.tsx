type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  theme?: "light" | "dark"
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  theme = "dark", // Default
  className = "",
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

    const variantStyles = variants[theme][variant]


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