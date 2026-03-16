import Link from "next/link" // Enables client-side navigation - faster than using <a>

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  newTab?: boolean;
  icon?: React.ReactNode;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  theme = "light", // Default
  size = "md",
  className = "",
  newTab = false,
  icon,
  external = false,
}: ButtonProps) {
    
    const baseStyles =
  // "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" // with shadow
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5";
   const variants = {
    light: {
      primary:
        "border border-foreground bg-foreground text-white hover:border-accent hover:bg-accent",
      secondary:
        "border border-border bg-surface text-foreground hover:border-foreground hover:bg-white",
    },
    dark: {
      primary:
        "border border-white bg-white text-foreground hover:bg-white/90",
      secondary:
        "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10",
    },
  };

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
        if (external || newTab) {
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
        <button type="button" onClick={onClick} className={styles}>
        {content}
        </button>
  )
}