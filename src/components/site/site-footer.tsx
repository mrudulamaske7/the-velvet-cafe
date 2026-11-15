import { Link } from "@tanstack/react-router";
import { CAFE } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl italic">{CAFE.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{CAFE.tagline}</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/menu" className="hover:text-primary">Menu</Link>
          <Link to="/visit" className="hover:text-primary">Visit us</Link>
        </div>
      </div>
    </footer>
  );
}
