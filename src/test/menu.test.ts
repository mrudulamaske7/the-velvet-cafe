import { describe, expect, it } from "vitest";
import { filterMenu, menu } from "@/data/menu";

const names = (cats: ReturnType<typeof filterMenu>) => cats.flatMap((c) => c.items.map((i) => i.name));

describe("menu filters", () => {
  it("veg filter hides egg and chicken items, including non-veg extras", () => {
    const veg = names(filterMenu(menu, "veg", ""));
    expect(veg).not.toContain("Extra Egg");
    expect(veg).not.toContain("Extra Non Veg Stuffing");
    expect(veg).not.toContain("Spicy Omelette");
    expect(veg).toContain("Paneer Kolhapuri");
  });

  it("non-veg filter drops all-veg categories", () => {
    const ids = filterMenu(menu, "nonveg", "").map((c) => c.id);
    expect(ids).not.toContain("drinks");
    expect(ids).toContain("extras");
  });

  it("search matches across categories, case-insensitively", () => {
    const hits = names(filterMenu(menu, "all", "butter chicken"));
    expect(hits.filter((n) => n === "Butter Chicken")).toHaveLength(3);
  });
});
