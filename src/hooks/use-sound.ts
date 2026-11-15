// Kitchen sounds: each menu category plays its own short, tempting clip.
import { useState } from "react";
import sandwich from "@/assets/sfx/sfx-sandwich-crunch.mp3.asset.json";
import pizza from "@/assets/sfx/sfx-pizza-sizzle.mp3.asset.json";
import drinks from "@/assets/sfx/sfx-drink-pour.mp3.asset.json";
import momos from "@/assets/sfx/sfx-momo-steam.mp3.asset.json";
import sides from "@/assets/sfx/sfx-sides-crunch.mp3.asset.json";
import salad from "@/assets/sfx/sfx-salad-chop.mp3.asset.json";
import extras from "@/assets/sfx/sfx-extras-pop.mp3.asset.json";

const sounds = {
  sandwich: sandwich.url,
  pizza: pizza.url,
  drinks: drinks.url,
  momos: momos.url,
  sides: sides.url,
  salad: salad.url,
  extras: extras.url,
};

function soundFor(categoryId: string): string {
  if (categoryId.includes("sandwich")) return sounds.sandwich;
  if (categoryId.includes("pizza")) return sounds.pizza;
  if (categoryId.includes("drink") || categoryId.includes("pitcher")) return sounds.drinks;
  if (categoryId.includes("momo")) return sounds.momos;
  if (categoryId.includes("side")) return sounds.sides;
  if (categoryId.includes("salad")) return sounds.salad;
  return sounds.extras;
}

const MUTE_KEY = "swich-sound-muted";
let muted = typeof localStorage !== "undefined" && localStorage.getItem(MUTE_KEY) === "1";

const audioCache = new Map<string, HTMLAudioElement>();

/** Play the kitchen sound for a menu category (call from a click handler). */
export function playCategorySound(categoryId: string) {
  if (muted || typeof Audio === "undefined") return;
  const url = soundFor(categoryId);
  let audio = audioCache.get(url);
  if (!audio) {
    audio = new Audio(url);
    audio.volume = 0.55;
    audioCache.set(url, audio);
  }
  audio.currentTime = 0;
  void audio.play().catch(() => {});
}

/** Speaker toggle state, remembered across visits. */
export function useSoundToggle() {
  const [isMuted, setIsMuted] = useState(muted);
  const toggle = () => {
    muted = !muted;
    try {
      localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
    } catch {
      // private mode — keep the in-memory value
    }
    setIsMuted(muted);
  };
  return { isMuted, toggle };
}
