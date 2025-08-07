import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("py-16 px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-trx-gray max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
