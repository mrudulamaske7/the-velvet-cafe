import { MapPin, Navigation, Phone } from "lucide-react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { branches, PHONE } from "@/data/branches";

/** Button that opens both branch addresses and the phone number. */
export function FindUsDialog({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent className="max-w-xl border-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl font-normal">Come find us</DialogTitle>
          <DialogDescription>Two S'WICH cafes in Chhatrapati Sambhajinagar.</DialogDescription>
        </DialogHeader>

        <ul className="space-y-4">
          {branches.map((b) => (
            <li key={b.id} className="rounded-md border border-border p-4">
              <p className="eyebrow">{b.label}</p>
              <p className="mt-1 font-display text-2xl">{b.name}</p>
              <p className="mt-2 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {b.address}
              </p>
              <a
                href={b.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
              >
                <Navigation className="h-3.5 w-3.5" /> Get directions
              </a>
            </li>
          ))}
        </ul>

        <a href={`tel:${PHONE.tel}`} className="btn-glow justify-center">
          <Phone className="h-4 w-4" /> Call {PHONE.display}
        </a>
      </DialogContent>
    </Dialog>
  );
}
