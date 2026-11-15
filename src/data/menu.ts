export type Diet = "veg" | "nonveg";

export type MenuItem = { name: string; diet: Diet };

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  section: "cafe" | "momos-pizza";
  items: MenuItem[];
};

const list = (diet: Diet, names: string[]): MenuItem[] => names.map((name) => ({ name, diet }));

export const menu: MenuCategory[] = [
  {
    id: "veg-sandwich",
    title: "Veg Sandwich",
    section: "cafe",
    items: list("veg", [
      "Hara Bhara Kebab", "Paneer Tikka Masala", "Corn Palak Sandwich", "Bombay Masala",
      "Veggie Finger", "Veg Tikki", "Falafel", "Cheesy Mushroom", "Fries Sandwich",
      "Crispy Paneer", "Premium Mix Veg", "Spicy Veg", "Cheese Corn Grill", "Veg Cheese Grill",
      "Paneer Butter Masala", "Masala Chaap", "Red Green Cutlet", "Paneer Kolhapuri",
      "Chocolate", "Crispy Veg", "Tandoori Paneer", "Cheese Chilli Garlic Grill",
      "Veg Basil Pesto Sandwich", "Avocado Toast", "Broccoli Baby Corn Grilled",
      "Kolhapuri Soya Sandwich", "Edamame Coleslaw", "Shahi Paneer", "Crispy Mushroom",
    ]),
  },
  {
    id: "non-veg-sandwich",
    title: "Non-Veg Sandwich",
    section: "cafe",
    items: list("nonveg", [
      "Chicken Cheese Saute", "Chicken Tikka", "Chicken Salt Pepper", "Chicken Keema",
      "Spicy Omelette", "Simple Omelette", "Tandoori Chicken", "Grilled Chicken",
      "Chicken Cheese Meatball Grill", "Chicken Kebab", "Fried Chicken Patty",
      "Chicken Cheese Salami", "Chicken Ham Loaded", "RHCP", "Butter Chicken",
      "Barbeque Chicken", "Kolhapuri Chicken", "Basil Pesto Chicken", "Basil Pesto Omelette",
      "Edamame Chicken Coleslaw", "Shahi Chicken", "Hariyali Chicken Tikka",
    ]),
  },
  {
    id: "drinks",
    title: "Drinks",
    section: "cafe",
    items: list("veg", [
      "Oreo Shake", "Kitkat Shake", "Cold Coffee", "Cold Coffee With Ice Cream", "Bourbon",
      "Hazelnut", "Hazelnut Coffee", "Chocolate", "Mixberry", "Mango", "Strawberry",
      "Blueberry", "Cola Bournvita", "Hot Coffee", "Hot Chocolate", "Biscoff Shake",
    ]),
  },
  {
    id: "pitchers",
    title: "Pitchers",
    note: "Serves 4",
    section: "cafe",
    items: list("veg", [
      "Oreo Pitcher", "Cold Coffee Pitcher", "Kitkat Pitcher", "Chocolate Pitcher",
      "Hazelnut Pitcher", "Blueberry Pitcher",
    ]),
  },
  {
    id: "veg-sides",
    title: "Veg Sides",
    section: "cafe",
    items: list("veg", [
      "Peri Fries", "Salted Fries", "Cheese Fries", "Large Cheese Fries", "Open Fries",
      "Peri Open Fries", "Large Fries", "Large Peri Fries", "Large Open Fries",
      "Large Peri Open Fries", "Potato Garlic", "Cheese Finger", "Masala Potato Wedges",
      "Cheese Balls",
    ]),
  },
  {
    id: "non-veg-sides",
    title: "Non-Veg Sides",
    section: "cafe",
    items: list("nonveg", ["Chicken Nuggets", "Chicken Popcorn", "Chicken Finger"]),
  },
  {
    id: "salad",
    title: "Salad",
    section: "cafe",
    items: list("veg", ["Veg Salad", "Veg Stir Fry", "Falafel", "Veg Caesar"]),
  },
  {
    id: "non-veg-salad",
    title: "Non-Veg Salad",
    section: "cafe",
    items: list("nonveg", ["Chicken Salad", "Chicken Stir Fry", "Chicken Caesar", "Egg Salad"]),
  },
  {
    id: "extras",
    title: "Extras",
    section: "cafe",
    items: [
      ...list("veg", [
        "Extra Veg Stuffing", "Extra Cheese", "Extra Cheddar Cheese", "Extra Parmesan Cheese",
        "Extra Premium Veggies", "Extra Dip", "Extra Peri", "Extra Fried Onion",
        "Extra Caramelized Onion", "Extra Coffee", "Extra Ice Cream", "Extra Chocolate",
      ]),
      ...list("nonveg", ["Extra Non Veg Stuffing", "Extra Egg"]),
      ...list("veg", ["Extra Salad Dressing"]),
    ],
  },
  {
    id: "veg-momo",
    title: "Veg Momo",
    section: "momos-pizza",
    items: list("veg", [
      "Classic Mix Veg", "Veg Schezwan", "Veg Paneer", "Veg Corn Cheese", "Veg Kurkure",
      "Paneer Kurkure",
    ]),
  },
  {
    id: "non-veg-momo",
    title: "Non-Veg Momo",
    section: "momos-pizza",
    items: list("nonveg", ["Classic Chicken", "Chicken Schezwan", "Butter Chicken", "Peri Chicken Momo"]),
  },
  {
    id: "veg-pizza",
    title: "Veg Pizza",
    note: '10"',
    section: "momos-pizza",
    items: list("veg", ["Veg Corn Cheese", "Veg Tandoori Paneer", "Plain Cheese", "Premium Veggies"]),
  },
  {
    id: "non-veg-pizza",
    title: "Non-Veg Pizza",
    note: '10"',
    section: "momos-pizza",
    items: list("nonveg", ["Chicken Kheema", "Chicken Tikka", "Chicken Kheema Tikka", "Butter Chicken"]),
  },
];

export type DietFilter = "all" | Diet;

/** Returns categories with only the items matching the diet filter and search text; empty categories are dropped. */
export function filterMenu(categories: MenuCategory[], diet: DietFilter, query: string): MenuCategory[] {
  const q = query.trim().toLowerCase();
  return categories
    .map((c) => ({
      ...c,
      items: c.items.filter(
        (i) => (diet === "all" || i.diet === diet) && (!q || i.name.toLowerCase().includes(q)),
      ),
    }))
    .filter((c) => c.items.length > 0);
}

export const CAFE = {
  name: "S'WICH",
  tagline: "Good bread. Warm lights. Slow evenings.",
};
