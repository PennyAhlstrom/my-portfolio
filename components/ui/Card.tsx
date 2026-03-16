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
    light: "border border-border bg-surface text-foreground shadow-sm",
    dark: "border border-white/10 bg-white/5 text-white shadow-sm",
  };

  const interactiveStyles = href
    ? "transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
    : "";

  const styles = `overflow-hidden rounded-2xl ${variants[variant]} ${interactiveStyles} ${className}`;

 const content = (
    <>
      {image && (
        <div className="relative h-48 w-full border-b border-border/70">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl font-semibold tracking-[-0.02em]">
          {title}
        </h3>

        <div className="mt-3">{children}</div>
      </div>
    </>
  );


  if (href) {
    return (
      <Link href={href} className={`block ${styles}`}>
        {content}
      </Link>
    )
  }

  return <div className={styles}>{content}</div>
}