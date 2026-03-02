export type {
  Card,
  Pack,
  Expansion,
  User,
  UserCard,
  CardPack,
} from "@prisma/client";

export { Rarity, CardType, CardCategory } from "@prisma/client";

import type {
  Card as PrismaCard,
  Pack as PrismaPack,
  Expansion as PrismaExpansion,
} from "@prisma/client";

export type CardWithRelations = PrismaCard & {
  expansion: PrismaExpansion;
  packs: {
    pack: PrismaPack;
  }[];
};

export type PackWithCards = PrismaPack & {
  cards: {
    card: PrismaCard;
  }[];
  expansion: PrismaExpansion;
};

export type ExpansionWithPacks = PrismaExpansion & {
  packs: PrismaPack[];
  _count: {
    cards: number;
  };
};



export type CollectionProgress = {
  total: number;
  owned: number;
  missing: number;
  percentage: number;
};

export type MissingCard = PrismaCard & {
  expansion: PrismaExpansion;
  packs: {
    pack: PrismaPack;
  }[];
};

export const RARITY_DISPLAY: Record<
  string,
  { label: string; symbol: string; color: string }
> = {
  COMMON: { label: "Common", symbol: "♦", color: "#9CA3AF" },
  UNCOMMON: { label: "Uncommon", symbol: "♦♦", color: "#6B7280" },
  RARE: { label: "Rare", symbol: "♦♦♦", color: "#F59E0B" },
  DOUBLE_RARE: { label: "Double Rare", symbol: "♦♦♦♦", color: "#EF4444" },
  ART_RARE: { label: "Art Rare", symbol: "☆", color: "#8B5CF6" },
  SUPER_ART_RARE: { label: "Super Art Rare", symbol: "☆☆", color: "#EC4899" },
  IMMERSIVE_ART: { label: "Immersive Art", symbol: "☆☆☆", color: "#06B6D4" },
  CROWN_RARE: { label: "Crown Rare", symbol: "👑", color: "#F59E0B" },
};

export const TYPE_COLORS: Record<string, string> = {
  GRASS: "#22C55E",
  FIRE: "#EF4444",
  WATER: "#3B82F6",
  LIGHTNING: "#EAB308",
  PSYCHIC: "#A855F7",
  FIGHTING: "#D97706",
  DARKNESS: "#1F2937",
  METAL: "#9CA3AF",
  DRAGON: "#7C3AED",
  COLORLESS: "#D1D5DB",
};
