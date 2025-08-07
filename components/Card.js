import { cn } from "@/lib/utils";

export function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        "glass-effect rounded-xl p-6",
        hover && "hover:scale-105 transition-transform duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
