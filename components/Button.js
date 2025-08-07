import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trx-cyan";

  const variants = {
    primary: "gradient-bg text-white hover:opacity-90 focus:ring-trx-cyan",
    secondary:
      "border border-trx-cyan text-trx-cyan hover:bg-trx-cyan hover:text-trx-bg focus:ring-trx-cyan",
    outline:
      "border border-trx-gray text-trx-gray hover:border-trx-cyan hover:text-trx-cyan focus:ring-trx-cyan",
    ghost:
      "text-trx-gray hover:text-trx-cyan hover:bg-trx-cyan/10 focus:ring-trx-cyan",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
