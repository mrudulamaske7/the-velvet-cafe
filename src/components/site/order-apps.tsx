import { ArrowUpRight } from "lucide-react";
import { orderApps } from "@/data/branches";
import { cn } from "@/lib/utils";

/** Links out to Zomato, Swiggy and District. */
export function OrderApps({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {orderApps.map((app) => (
        <a
          key={app.name}
          href={app.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-input bg-background/60 px-4 py-2 text-sm backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
        >
          <span className="font-bold">{app.name}</span>
          <span className="text-xs text-muted-foreground">{app.note}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}
