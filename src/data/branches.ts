// The two S'WICH cafes, the shared order line and the delivery apps.
// Phone is the "delivery & bulk orders" number printed on the cafe's own signboard.
import { photos } from "@/data/photos";

export const PHONE = { display: "+91 95455 33226", tel: "+919545533226" };

export type Branch = {
  id: "kanchanwadi" | "dashmesh-nagar";
  label: string;
  name: string;
  address: string;
  mapsUrl: string;
  mood: string;
  photos: { src: string; caption: string }[];
};

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const branches: Branch[] = [
  {
    id: "kanchanwadi",
    label: "Branch 1",
    name: "Kanchanwadi",
    address:
      "Gut No. 20, Plot No. 5, Paithan Road, opp. Dhillon Residency, Walmi Naka, Kanchanwadi, Chhatrapati Sambhajinagar 431011",
    mapsUrl: maps("S'wich, Paithan Rd, opposite Dhillon Residency, Walmi Naka, Kanchanwadi"),
    mood: "Under a tin roof after dark — paper lanterns, copper lamps and a jungle of palms.",
    photos: [
      { src: photos.interiorWide, caption: "the big room at night" },
      { src: photos.kanchanwadiLanterns, caption: "lantern hour" },
      { src: photos.kanchanwadiCounter, caption: "the counter" },
      { src: photos.gardenSeating, caption: "the garden corner" },
    ],
  },
  {
    id: "dashmesh-nagar",
    label: "Branch 2",
    name: "Dashmesh Nagar",
    address: "Dashmesh Nagar, Chhatrapati Sambhajinagar",
    mapsUrl: maps("S'wich cafe Dashmesh Nagar Chhatrapati Sambhajinagar"),
    mood: "The glowing sign, hanging vines, brick-orange counter and cane chairs out front.",
    photos: [
      { src: photos.dashmeshStorefront, caption: "look for the glowing sign" },
      { src: photos.dashmeshSeating, caption: "cane chairs out front" },
      { src: photos.dashmeshFacade, caption: "vines everywhere" },
      { src: photos.dashmeshShakes, caption: "two shakes, please" },
    ],
  },
];

export type OrderApp = { name: string; url: string; note: string };

export const orderApps: OrderApp[] = [
  {
    name: "Zomato",
    url: "https://www.zomato.com/aurangabad/swich-vedant-nagar/order",
    note: "Delivery",
  },
  {
    name: "Swiggy",
    url: "https://www.swiggy.com/search?query=S%27wich",
    note: "Delivery",
  },
  {
    name: "District",
    url: "https://www.district.in/dining/aurangabad/swich-vedant-nagar",
    note: "Book a table",
  },
];
