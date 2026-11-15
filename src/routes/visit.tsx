import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { Bunting } from "@/components/site/bunting";
import { Polaroid } from "@/components/site/polaroid";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — S'WICH" },
      { name: "description", content: "Opening hours, address and phone number for S'WICH." },
      { property: "og:title", content: "Visit — S'WICH" },
      { property: "og:description", content: "Opening hours, address and phone number for S'WICH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisitPage,
});

// Sample details — replace with the cafe's real address, hours and phone.
const details = [
  { icon: MapPin, label: "Address", value: "Add your address here" },
  { icon: Clock, label: "Hours", value: "Every day · 11:00 AM – 11:30 PM" },
  { icon: Phone, label: "Call", value: "+91 98765 43210" },
];

function VisitPage() {
  return (
    <div className="lamp-glow">
      <Bunting className="mt-[4.75rem]" />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-10 md:grid-cols-2 md:items-center md:pt-16">
        <div>
          <p className="eyebrow">Visit us</p>
          <h1 className="mt-4 text-5xl md:text-6xl">
            Follow the fairy lights, <em className="text-primary">we&apos;re open.</em>
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
        <div className="relative mx-auto h-[560px] w-full max-w-[460px]">
          <Polaroid
            src={photos.storefront}
            alt="S'WICH entrance lit up at night"
            caption="look for the glowing sign"
            tilt={-3}
            className="absolute left-0 top-0 w-[78%]"
            imgClassName="aspect-[6/5]"
          />
          <Polaroid
            src={photos.interior}
            alt="Inside S'WICH with copper lamps and palms"
            caption="come on in"
            tilt={4}
            tape={false}
            className="absolute bottom-0 right-0 w-[56%]"
            imgClassName="aspect-[1/1]"
          />
        </div>
      </section>
    </div>
  );
}
