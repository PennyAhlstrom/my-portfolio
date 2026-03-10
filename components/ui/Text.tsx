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
    dark: "text-gray-700",
    light: "text-gray-200",
    muted: "text-gray-500",
  };

  const color = variants[variant];
  
  const Component = as;

  return (
    <Component className={`text-base leading-relaxed ${color}`}>
      {children}
    </Component>
  );
}