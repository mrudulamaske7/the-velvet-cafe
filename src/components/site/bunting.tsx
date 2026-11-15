import { cn } from "@/lib/utils";

const colours = ["bg-flag-red", "bg-flag-yellow", "bg-flag-blue", "bg-flag-green", "bg-flag-orange"];

/** The string of festival flags hanging across the cafe ceiling. */
export function Bunting({ count = 40, className }: { count?: number; className?: string }) {
  return (
    <div aria-hidden className={cn("relative h-8 overflow-hidden", className)}>
      <div className="absolute inset-x-0 top-[3px] h-px bg-foreground/25" />
      <div className="flex justify-between gap-2.5 px-3">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={cn("flag", colours[(i * 3) % colours.length])}
            style={{ rotate: `${((i * 37) % 11) - 5}deg`, marginTop: `${(i * 13) % 4}px` }}
          />
        ))}
      </div>
    </div>
  );
}
