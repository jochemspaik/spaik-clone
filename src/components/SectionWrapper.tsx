import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
  padY = "py-20",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  padY?: string;
}) {
  return (
    <section id={id} className={cn("px-6 md:px-10", padY, className)}>
      <div className={cn("mx-auto", innerClassName)} style={{ maxWidth: "1080px" }}>
        {children}
      </div>
    </section>
  );
}
