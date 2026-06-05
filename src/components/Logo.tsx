import logoPng from "@/assets/logo.png";

export function Logo({
  className = "",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "icon";
}) {
  // Use the new logo.png for the website logo.
  const src = logoPng;

  return (
    <img
      src={src}
      alt="WEBBLAB - Digital Innovation"
      className={`h-16 w-auto md:h-24 ${className}`}
    />
  );
}
