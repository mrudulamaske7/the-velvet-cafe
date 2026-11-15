import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-cafe.jpg";
import sandwich from "@/assets/sandwich.jpg";
import shake from "@/assets/shake.jpg";
import momosPizza from "@/assets/momos-pizza.jpg";
import { CAFE, menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Lantern Café — Grilled Sandwiches, Shakes & Momos" },
      {
        name: "description",
        content: "A cosy, dim-lit cafe for grilled sandwiches, thick shakes, momos and 10\" pizzas.",
      },
      { property: "og:title", content: "The Lantern Café — Grilled Sandwiches, Shakes & Momos" },
      {
        property: "og:description",
        content: "A cosy, dim-lit cafe for grilled sandwiches, thick shakes, momos and 10\" pizzas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    img: sandwich,
    title: "Grilled, pressed, melting",
    text: "Over fifty sandwiches — from Paneer Kolhapuri to Butter Chicken — toasted until the cheese gives in.",
  },
  {
    img: shake,
    title: "Shakes worth lingering over",
    text: "Oreo, Biscoff, Kitkat, Hazelnut and cold coffee. Bring three friends and order a pitcher.",
  },
  {
    img: momosPizza,
    title: "Momos & 10\" pizzas",
    text: "Kurkure momos, Peri Chicken, Tandoori Paneer pizza — for when a sandwich isn't enough.",
  },
];

function Index() {
  const itemCount = menu.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Candle-lit table with a latte and a grilled sandwich inside the cafe"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-fade" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:pb-28">
          <p className="eyebrow animate-rise">Open late · Dim lights · Good food</p>
          <h1 className="mt-5 max-w-3xl animate-rise text-5xl font-light leading-[1.02] tracking-tight [animation-delay:120ms] md:text-7xl lg:text-8xl">
            Pull up a chair, <em className="text-primary text-glow">stay a while.</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground [animation-delay:240ms]">
            {CAFE.tagline}
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link to="/menu" className="btn-glow">
              See the menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/visit" className="btn-quiet">
              Find us
            </Link>
          </div>
        </div>
      </section>

      <section className="relative lamp-glow">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow">The kitchen</p>
              <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
                {itemCount}+ things to order, <em>none of them rushed.</em>
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg">
              Sandwiches, sides, salads, shakes, momos and pizza — made to order under warm
              lamps, for slow evenings and long talks.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-sm italic text-primary">0{i + 1}</p>
                  <h3 className="mt-1 text-2xl font-normal">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-light md:text-4xl">
            Hungry already? <em className="text-primary">The whole menu is one tap away.</em>
          </h2>
          <Link to="/menu" className="btn-glow">
            Browse the menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
