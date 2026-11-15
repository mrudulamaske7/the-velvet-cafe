import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Bunting } from "@/components/site/bunting";
import { Polaroid } from "@/components/site/polaroid";
import { menu } from "@/data/menu";
import { photos } from "@/data/photos";
import { playCategorySound } from "@/hooks/use-sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S'WICH — Sandwiches, Momos, Pizza & Shakes" },
      {
        name: "description",
        content:
          "Grilled sandwiches, momos, 10\" pizzas and thick shakes at S'WICH — the cafe with the fairy lights, palm leaves and bunting.",
      },
      { property: "og:title", content: "S'WICH — Sandwiches, Momos, Pizza & Shakes" },
      {
        property: "og:description",
        content: "Grilled sandwiches, momos, pizzas and shakes under the fairy lights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Dish = { img: string; name: string; note: string; className?: string; big?: boolean };

const dishes: Dish[] = [
  {
    img: photos.tableSpread,
    name: "The full spread",
    note: "how a table here usually ends up",
    big: true,
    className: "md:col-span-2 md:row-span-2",
  },
  { img: photos.tandooriPizza, name: "Veg Tandoori Paneer Pizza", note: '10", made to share' },
  { img: photos.sandwichSmoothie, name: "Sandwich & a Shake", note: "the classic pairing" },
  { img: photos.vegMomos, name: "Steamed Veg Momos", note: "straight from the bamboo" },
  { img: photos.cheeseFries, name: "Peri Cheese Fries", note: "extra peri, trust us" },
  {
    img: photos.grilledCut,
    name: "Grilled Sandwiches",
    note: "toasted till the edges crunch",
    className: "md:col-span-2",
  },
  { img: photos.saladBowl, name: "Garden Salad", note: "for the one being good" },
];

const corners = [
  { src: photos.gardenSeating, caption: "the garden corner", tilt: -3 },
  { src: photos.counterPlants, caption: "say hi at the counter", tilt: 2, imgClassName: "aspect-square object-top" },
  { src: photos.pizzaCounter, caption: "pizza o'clock", tilt: -1.5 },
  { src: photos.lanterns, caption: "lanterns + palms", tilt: 3 },
];

function Index() {
  const total = menu.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      {/* Opening: one real photo of the room, full width, with the sign glowing over it */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={photos.interiorWide}
          alt="Inside S'WICH at night — copper lamps, palms and bunting over the tables"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:pb-24">
          <Bunting className="mb-8 max-w-md" count={22} />
          <p className="font-hand text-2xl text-leaf">a little cafe, after dark</p>
          <h1 className="mt-2 font-display text-7xl leading-none tracking-[0.06em] sign-glow sm:text-8xl lg:text-[9rem]">
            S'WICH
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/90">
            Copper lamps low over the tables, palms in every corner, bunting strung across the
            roof. The kind of place where one coffee turns into three and nobody checks the time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/menu" className="btn-glow">
              See the menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/visit" className="btn-quiet">
              How to find us
            </Link>
          </div>
        </div>
      </section>

      {/* The room, up close */}
      <section className="border-t border-border/70 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="md:sticky md:top-28">
              <p className="eyebrow">Inside S'WICH</p>
              <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
                Low lights, big plants, <em className="text-primary">long chats.</em>
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
                Copper lamps over every table, paper lanterns, bunting across the roof and more
                palms than we can count. Grab a corner seat, order a pitcher, and nobody's
                going to rush you out.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-4">
              {corners.map((c, i) => (
                <Polaroid
                  key={c.caption}
                  src={c.src}
                  alt={c.caption}
                  caption={c.caption}
                  tilt={c.tilt}
                  tape={i % 2 === 0}
                  className={i % 2 === 1 ? "mt-10" : ""}
                  imgClassName={cn("aspect-[4/5]", c.imgClassName)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food */}
      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">From the kitchen</p>
              <h2 className="mt-3 text-4xl md:text-5xl">What's on the tables tonight</h2>
            </div>
            <p className="max-w-xs text-muted-foreground">
              {total} things on the menu. These are the ones that keep coming back to the
              counter.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
            {dishes.map((d) => (
              <figure
                key={d.name}
                className={cn(
                  "group relative overflow-hidden rounded-md bg-card",
                  d.big ? "col-span-2 aspect-square md:aspect-auto" : "aspect-square md:aspect-auto",
                  d.className,
                )}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-4 pt-12">
                  <p className={cn("font-display leading-tight", d.big ? "text-3xl" : "text-lg")}>
                    {d.name}
                  </p>
                  <p className="font-hand text-lg leading-none text-primary">{d.note}</p>
                </figcaption>
              </figure>
            ))}
            <Link
              to="/menu"
              className="group flex aspect-square flex-col justify-between rounded-md border border-dashed border-primary/50 p-5 transition-colors hover:bg-primary/10 md:aspect-auto"
            >
              <span className="font-hand text-2xl text-leaf">and {total - dishes.length} more…</span>
              <span className="flex items-center gap-2 font-display text-2xl text-primary">
                Full menu <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu index */}
      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-center gap-5">
            <h2 className="text-3xl md:text-4xl">The menu, at a glance</h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((c) => (
              <li key={c.id}>
                <Link
                  to="/menu"
                  hash={c.id}
                  onClick={() => playCategorySound(c.id)}
                  className="flex items-baseline gap-3 py-2.5 text-lg transition-colors hover:text-primary"
                >
                  <span>{c.title}</span>
                  <span className="mb-1 flex-1 border-b border-dotted border-muted-foreground/40" />
                  <span className="text-sm text-muted-foreground">{c.note ?? c.items.length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
