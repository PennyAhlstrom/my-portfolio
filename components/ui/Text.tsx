type TextProps = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "muted";
};

export default function Text({
  children,
  variant = "dark",
}: TextProps) {

  const variants = {
    dark: "text-gray-700",
    light: "text-gray-200",
    muted: "text-gray-500",
  };

  const color = variants[variant];

  return (
    <p className={`text-base leading-relaxed ${color}`}>
      {children}
    </p>
  );
}