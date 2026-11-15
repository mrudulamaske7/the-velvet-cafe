import { Link } from "@tanstack/react-router";
import { Bunting } from "./bunting";
import { CAFE } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <Bunting className="mt-0" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl tracking-[0.08em] sign-glow">S'WICH</p>
          <p className="mt-3 text-sm text-muted-foreground">{CAFE.tagline}</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/menu" className="hover:text-primary">Menu</Link>
          <Link to="/visit" className="hover:text-primary">Visit us</Link>
        </div>
      </div>
    </footer>
  );
}
