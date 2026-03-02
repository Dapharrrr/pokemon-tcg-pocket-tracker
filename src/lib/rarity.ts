// src/lib/rarity.ts
// Maps database enums to user-friendly display strings

import { Rarity } from "@prisma/client";

export const rarityDisplay: Record<Rarity, { label: string; symbol: string; color: string }> = {
  COMMON:          { label: "Common",          symbol: "♦",     color: "text-gray-400" },
  UNCOMMON:        { label: "Uncommon",        symbol: "♦♦",    color: "text-green-400" },
  RARE:            { label: "Rare",            symbol: "♦♦♦",   color: "text-blue-400" },
  DOUBLE_RARE:     { label: "Double Rare",     symbol: "♦♦♦♦",  color: "text-purple-400" },
  ART_RARE:        { label: "Art Rare",        symbol: "☆",     color: "text-yellow-400" },
  SUPER_ART_RARE:  { label: "Super Art Rare",  symbol: "☆☆",    color: "text-orange-400" },
  IMMERSIVE_ART:   { label: "Immersive Art",   symbol: "☆☆☆",   color: "text-red-400" },
  CROWN_RARE:      { label: "Crown Rare",      symbol: "👑",    color: "text-amber-300" },
};
