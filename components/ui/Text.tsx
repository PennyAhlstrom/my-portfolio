type TextProps = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "muted";
  as?: "p" | "li" | "span";
  className?: string;
};

export default function Text({
  children,
  variant = "dark",
  as = "p",
  className = "",
}: TextProps) {

  const variants = {
    dark: "text-foreground",
    light: "text-white/90",
    muted: "text-muted",
  };

  const color = variants[variant];
  
  const Component = as;

 return (
    <Component className={`text-base leading-6 ${color} ${className}`}>
      {children}
    </Component>
  );
}