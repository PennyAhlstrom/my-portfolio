type CardProps = {
  children: React.ReactNode
  variant?: "light" | "dark"
  className?: string
}

export default function Card({
  children,
  variant = "light",
  className = "",
}: CardProps) {
  const variants = {
    light: "border border-gray-200 bg-white text-gray-900 shadow-sm",
    dark: "border border-white/10 bg-white/5 text-white shadow-sm",
  }

  return (
    <div className={`rounded-2xl p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}