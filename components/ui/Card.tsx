import Link from "next/link"
import Image from "next/image"

type CardProps = {
  title: string
  children: React.ReactNode
  variant?: "light" | "dark"
  href?: string
  image?: string
  imageAlt?: string
  className?: string
}

export default function Card({
  title,
  children,
  variant = "light",
  href,
  image,
  imageAlt = "",
  className = "",
}: CardProps) {

  const variants = {
    light: "border border-gray-200 bg-white text-gray-900 shadow-sm",
    dark: "border border-white/10 bg-white/5 text-white shadow-white/5",
  }

  const interactiveStyles = href
    ? "transition hover:-translate-y-1 hover:shadow-md"
    : ""

  const styles = `rounded-2xl overflow-hidden ${variants[variant]} ${interactiveStyles} ${className}`

  const content = (
    <>
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-3">{children}</div>
      </div>
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