import Link from "next/link"

type CardProps = {
  title: string
  children: React.ReactNode
  variant?: "light" | "dark"
  href?: string
  className?: string
}

export default function Card({
  title,
  children,
  variant = "light",
  href,
  className = "",
}: CardProps) {

  const variants = {
    light: "border border-gray-200 bg-white text-gray-900 shadow-sm",
    dark: "border border-white/10 bg-white/5 text-white shadow-white/5",
  }

  const styles = `rounded-2xl p-6 ${variants[variant]} ${className}`

  const content = (
    <>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`block ${styles}`}>
        {content}
      </Link>
    )
  }

  return <div className={styles}>{content}</div>
}