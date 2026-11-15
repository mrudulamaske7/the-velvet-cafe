import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { filterMenu, menu, type Diet, type DietFilter } from "@/data/menu";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Lantern Café" },
      {
        name: "description",
        content:
          "Veg and non-veg sandwiches, shakes, pitchers, fries, salads, momos and 10\" pizzas at The Lantern Café.",
      },
      { property: "og:title", content: "Menu — The Lantern Café" },
      {
        property: "og:description",
        content: "Sandwiches, shakes, pitchers, sides, salads, momos and pizzas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const filters: { value: DietFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "nonveg", label: "Non-veg" },
];

function DietMark({ diet }: { diet: Diet }) {
  return (
    <span
      aria-label={diet === "veg" ? "Vegetarian" : "Non-vegetarian"}
      className={cn(
        "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border",
        diet === "veg" ? "border-veg" : "border-nonveg",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", diet === "veg" ? "bg-veg" : "bg-nonveg")} />
    </span>
  );
}

function MenuPage() {
  const [diet, setDiet] = useState<DietFilter>("all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => filterMenu(menu, diet, query), [diet, query]);

  const sections = [
    { id: "cafe", title: "Café Menu" },
    { id: "momos-pizza", title: "Momos & Pizza" },
  ] as const;

  return (
    <div className="lamp-glow">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-32 md:pt-40">
        <p className="eyebrow">The menu</p>
        <h1 className="mt-4 text-5xl font-light tracking-tight md:text-7xl">
          Tonight we're <em className="text-primary text-glow">serving…</em>
        </h1>
      </section>

      <div className="sticky top-16 z-40 border-y border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center">
          <div className="flex shrink-0 gap-1 rounded-full border border-border p-1">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setDiet(f.value)}
                aria-pressed={diet === f.value}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  diet === f.value
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f.value !== "all" && <DietMark diet={f.value} />}
                {f.label}
              </button>
            ))}
          </div>
          <label className="relative flex-1 md:max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu"
              className="w-full rounded-full border border-input bg-transparent py-2 pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </label>
          <nav className="flex gap-1 overflow-x-auto text-xs md:ml-auto">
            {visible.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16">
        {visible.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            Nothing matches "{query}". Try another word.
          </p>
        )}

        {sections.map((s) => {
          const cats = visible.filter((c) => c.section === s.id);
          if (cats.length === 0) return null;
          return (
            <section key={s.id} className="mb-20 last:mb-0">
              <div className="mb-10 flex items-center gap-5">
                <h2 className="font-display text-3xl italic text-primary md:text-4xl">{s.title}</h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="columns-1 gap-10 md:columns-2">
                {cats.map((c) => (
                  <article
                    key={c.id}
                    id={c.id}
                    className="mb-10 scroll-mt-48 break-inside-avoid rounded-2xl border border-border/60 bg-card/60 p-7 shadow-card"
                  >
                    <header className="mb-5 flex items-baseline justify-between gap-4 border-b border-border/60 pb-4">
                      <h3 className="text-2xl font-normal">{c.title}</h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {c.note ?? `${c.items.length} items`}
                      </span>
                    </header>
                    <ul className="space-y-2.5">
                      {c.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center gap-3 text-[0.95rem] text-foreground/90"
                        >
                          <DietMark diet={item.diet} />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
