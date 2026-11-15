import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-cafe.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — The Lantern Café" },
      { name: "description", content: "Opening hours, address and phone number for The Lantern Café." },
      { property: "og:title", content: "Visit — The Lantern Café" },
      { property: "og:description", content: "Opening hours, address and phone number for The Lantern Café." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisitPage,
});

// Sample details — replace with the cafe's real address, hours and phone.
const details = [
  { icon: MapPin, label: "Address", value: "12 Lamplight Lane, Your City" },
  { icon: Clock, label: "Hours", value: "Every day · 11:00 AM – 11:30 PM" },
  { icon: Phone, label: "Call", value: "+91 98765 43210" },
];

function VisitPage() {
  return (
    <div className="lamp-glow">
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-32 md:grid-cols-2 md:items-center md:pt-40">
        <div>
          <p className="eyebrow">Visit us</p>
          <h1 className="mt-4 text-5xl font-light tracking-tight md:text-6xl">
            The lights are low, <em className="text-primary text-glow">the door is open.</em>
          </h1>
          <ul className="mt-12 space-y-7">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                  <d.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.label}</p>
                  <p className="mt-1 text-lg">{d.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link to="/menu" className="btn-glow">See what's cooking</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 shadow-card">
          <img
            src={hero}
            alt="Warm lamp-lit interior of the cafe at night"
            width={1920}
            height={1088}
            loading="lazy"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
