// prisma/seed.ts

import { PrismaClient, Rarity, CardType, CardCategory } from "@prisma/client";

const prisma = new PrismaClient();

// ──────────────────────────────────────────────
// Seed Data
// ──────────────────────────────────────────────
// This is a representative subset. In production, you'd import
// from a complete data source or API.

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing data (order matters due to foreign keys)
  await prisma.userCard.deleteMany();
  await prisma.cardPack.deleteMany();
  await prisma.card.deleteMany();
  await prisma.pack.deleteMany();
  await prisma.expansion.deleteMany();
  await prisma.user.deleteMany();

  // ─── Create Expansions ───────────────────────
  const geneticApex = await prisma.expansion.create({
    data: {
      name: "Genetic Apex",
      slug: "genetic-apex",
      setCode: "A1",
      releaseDate: new Date("2024-10-30"),
      imageUrl: "/images/expansions/genetic-apex.png",
    },
  });

  const mythicalIsland = await prisma.expansion.create({
    data: {
      name: "Mythical Island",
      slug: "mythical-island",
      setCode: "A1a",
      releaseDate: new Date("2024-12-17"),
      imageUrl: "/images/expansions/mythical-island.png",
    },
  });

  const spaceTimeSmackdown = await prisma.expansion.create({
    data: {
      name: "Space-Time Smackdown",
      slug: "space-time-smackdown",
      setCode: "A2",
      releaseDate: new Date("2025-01-30"),
      imageUrl: "/images/expansions/space-time-smackdown.png",
    },
  });

  const triumphantLight = await prisma.expansion.create({
    data: {
      name: "Triumphant Light",
      slug: "triumphant-light",
      setCode: "A2a",
      releaseDate: new Date("2025-03-14"),
      imageUrl: "/images/expansions/triumphant-light.png",
    },
  });

  const shiningRevelry = await prisma.expansion.create({
    data: {
      name: "Shining Revelry",
      slug: "shining-revelry",
      setCode: "A2b",
      releaseDate: new Date("2025-05-29"),
      imageUrl: "/images/expansions/shining-revelry.png",
    },
  });

  const celestialGuardians = await prisma.expansion.create({
    data: {
      name: "Celestial Guardians",
      slug: "celestial-guardians",
      setCode: "A3",
      releaseDate: new Date("2025-07-31"),
      imageUrl: "/images/expansions/celestial-guardians.png",
    },
  });

  const extradimensionalCrisis = await prisma.expansion.create({
    data: {
      name: "Extradimensional Crisis",
      slug: "extradimensional-crisis",
      setCode: "A3a",
      releaseDate: new Date("2025-09-25"),
      imageUrl: "/images/expansions/extradimensional-crisis.png",
    },
  });

  const legendaryClash = await prisma.expansion.create({
    data: {
      name: "Legendary Clash",
      slug: "legendary-clash",
      setCode: "A4",
      releaseDate: new Date("2025-11-27"),
      imageUrl: "/images/expansions/legendary-clash.png",
    },
  });

  const mysticHorizon = await prisma.expansion.create({
    data: {
      name: "Mystic Horizon",
      slug: "mystic-horizon",
      setCode: "A4a",
      releaseDate: new Date("2026-01-29"),
      imageUrl: "/images/expansions/mystic-horizon.png",
    },
  });

  console.log("✅ Expansions created");

  // ─── Create Packs ────────────────────────────
  const mewtewPack = await prisma.pack.create({
    data: {
      name: "Mewtwo Pack",
      slug: "mewtwo",
      color: "#7C3AED",
      expansionId: geneticApex.id,
    },
  });

  const charizardPack = await prisma.pack.create({
    data: {
      name: "Charizard Pack",
      slug: "charizard",
      color: "#EF4444",
      expansionId: geneticApex.id,
    },
  });

  const pikachuPack = await prisma.pack.create({
    data: {
      name: "Pikachu Pack",
      slug: "pikachu",
      color: "#EAB308",
      expansionId: geneticApex.id,
    },
  });

  const mewPack = await prisma.pack.create({
    data: {
      name: "Mew Pack",
      slug: "mew",
      color: "#EC4899",
      expansionId: mythicalIsland.id,
    },
  });

  const dialgaPack = await prisma.pack.create({
    data: {
      name: "Dialga Pack",
      slug: "dialga",
      color: "#3B82F6",
      expansionId: spaceTimeSmackdown.id,
    },
  });

  const palkiaPack = await prisma.pack.create({
    data: {
      name: "Palkia Pack",
      slug: "palkia",
      color: "#A855F7",
      expansionId: spaceTimeSmackdown.id,
    },
  });

  // Triumphant Light packs
  const arceusPack = await prisma.pack.create({
    data: {
      name: "Arceus Pack",
      slug: "arceus",
      color: "#F59E0B",
      expansionId: triumphantLight.id,
    },
  });

  // Shining Revelry packs
  const hoOhPack = await prisma.pack.create({
    data: {
      name: "Ho-Oh Pack",
      slug: "ho-oh",
      color: "#EF4444",
      expansionId: shiningRevelry.id,
    },
  });

  const lugiaPack = await prisma.pack.create({
    data: {
      name: "Lugia Pack",
      slug: "lugia",
      color: "#6366F1",
      expansionId: shiningRevelry.id,
    },
  });

  // Celestial Guardians packs
  const kyogrePack = await prisma.pack.create({
    data: {
      name: "Kyogre Pack",
      slug: "kyogre",
      color: "#3B82F6",
      expansionId: celestialGuardians.id,
    },
  });

  const groudonPack = await prisma.pack.create({
    data: {
      name: "Groudon Pack",
      slug: "groudon",
      color: "#DC2626",
      expansionId: celestialGuardians.id,
    },
  });

  const rayquazaPack = await prisma.pack.create({
    data: {
      name: "Rayquaza Pack",
      slug: "rayquaza",
      color: "#10B981",
      expansionId: celestialGuardians.id,
    },
  });

  // Extradimensional Crisis packs
  const giratinaPack = await prisma.pack.create({
    data: {
      name: "Giratina Pack",
      slug: "giratina",
      color: "#6B7280",
      expansionId: extradimensionalCrisis.id,
    },
  });

  // Legendary Clash packs
  const reshiramPack = await prisma.pack.create({
    data: {
      name: "Reshiram Pack",
      slug: "reshiram",
      color: "#EF4444",
      expansionId: legendaryClash.id,
    },
  });

  const zekromPack = await prisma.pack.create({
    data: {
      name: "Zekrom Pack",
      slug: "zekrom",
      color: "#3B82F6",
      expansionId: legendaryClash.id,
    },
  });

  // Mystic Horizon packs
  const meloettaPack = await prisma.pack.create({
    data: {
      name: "Meloetta Pack",
      slug: "meloetta",
      color: "#EC4899",
      expansionId: mysticHorizon.id,
    },
  });

  console.log("✅ Packs created");

  // ─── Helper: Create a card and link to packs ─
  type CardSeed = {
    name: string;
    number: number;
    rarity: Rarity;
    type?: CardType;
    hp?: number;
    isEX?: boolean;
    category: CardCategory;
    expansionId: string;
    packIds: string[];
    imageUrl?: string;
  };

  async function createCard(data: CardSeed) {
    const card = await prisma.card.create({
      data: {
        name: data.name,
        number: data.number,
        rarity: data.rarity,
        type: data.type,
        hp: data.hp,
        isEX: data.isEX ?? false,
        category: data.category,
        expansionId: data.expansionId,
        imageUrl: data.imageUrl,
      },
    });

    // Create pack relationships
    for (const packId of data.packIds) {
      await prisma.cardPack.create({
        data: {
          cardId: card.id,
          packId: packId,
        },
      });
    }

    return card;
  }

  // ─── Genetic Apex Cards ──────────────────────
  const geneticApexCards: CardSeed[] = [
    // Common cards (♦)
    { name: "Bulbasaur", number: 1, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Ivysaur", number: 2, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Venusaur", number: 3, rarity: Rarity.RARE, type: CardType.GRASS, hp: 160, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Caterpie", number: 4, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 50, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Metapod", number: 5, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Butterfree", number: 6, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 120, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Oddish", number: 7, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Gloom", number: 8, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Vileplume", number: 9, rarity: Rarity.RARE, type: CardType.GRASS, hp: 140, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Paras", number: 10, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Parasect", number: 11, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 120, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Bellsprout", number: 12, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Weepinbell", number: 13, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Victreebel", number: 14, rarity: Rarity.RARE, type: CardType.GRASS, hp: 140, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Tangela", number: 15, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Scyther", number: 16, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Pinsir", number: 17, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Venusaur EX", number: 18, rarity: Rarity.DOUBLE_RARE, type: CardType.GRASS, hp: 190, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Exeggutor EX", number: 19, rarity: Rarity.DOUBLE_RARE, type: CardType.GRASS, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    // Fire
    { name: "Charmander", number: 20, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Charmeleon", number: 21, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Charizard", number: 22, rarity: Rarity.RARE, type: CardType.FIRE, hp: 150, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Vulpix", number: 23, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 50, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Ninetales", number: 24, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Growlithe", number: 25, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Arcanine", number: 26, rarity: Rarity.RARE, type: CardType.FIRE, hp: 130, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Ponyta", number: 27, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Rapidash", number: 28, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Magmar", number: 29, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Moltres", number: 30, rarity: Rarity.RARE, type: CardType.FIRE, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Charizard EX", number: 31, rarity: Rarity.DOUBLE_RARE, type: CardType.FIRE, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Moltres EX", number: 32, rarity: Rarity.DOUBLE_RARE, type: CardType.FIRE, hp: 140, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    // Water
    { name: "Squirtle", number: 33, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Wartortle", number: 34, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Blastoise", number: 35, rarity: Rarity.RARE, type: CardType.WATER, hp: 150, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Psyduck", number: 36, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Golduck", number: 37, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Poliwag", number: 38, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Poliwhirl", number: 39, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Poliwrath", number: 40, rarity: Rarity.RARE, type: CardType.WATER, hp: 150, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Seel", number: 41, rarity: Rarity.COMMON, type: CardType.WATER, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Dewgong", number: 42, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Shellder", number: 43, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Starmie", number: 44, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Gyarados", number: 45, rarity: Rarity.RARE, type: CardType.WATER, hp: 150, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Blastoise EX", number: 46, rarity: Rarity.DOUBLE_RARE, type: CardType.WATER, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    // Lightning
    { name: "Pikachu", number: 47, rarity: Rarity.COMMON, type: CardType.LIGHTNING, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Raichu", number: 48, rarity: Rarity.UNCOMMON, type: CardType.LIGHTNING, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Magnemite", number: 49, rarity: Rarity.COMMON, type: CardType.LIGHTNING, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Magneton", number: 50, rarity: Rarity.UNCOMMON, type: CardType.LIGHTNING, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Voltorb", number: 51, rarity: Rarity.COMMON, type: CardType.LIGHTNING, hp: 50, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Electrode", number: 52, rarity: Rarity.UNCOMMON, type: CardType.LIGHTNING, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Electabuzz", number: 53, rarity: Rarity.UNCOMMON, type: CardType.LIGHTNING, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Jolteon", number: 54, rarity: Rarity.RARE, type: CardType.LIGHTNING, hp: 90, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Zapdos", number: 55, rarity: Rarity.RARE, type: CardType.LIGHTNING, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Zapdos EX", number: 56, rarity: Rarity.DOUBLE_RARE, type: CardType.LIGHTNING, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Pikachu EX", number: 57, rarity: Rarity.DOUBLE_RARE, type: CardType.LIGHTNING, hp: 120, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    // Psychic
    { name: "Gastly", number: 58, rarity: Rarity.COMMON, type: CardType.PSYCHIC, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Haunter", number: 59, rarity: Rarity.UNCOMMON, type: CardType.PSYCHIC, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Gengar", number: 60, rarity: Rarity.RARE, type: CardType.PSYCHIC, hp: 130, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Drowzee", number: 61, rarity: Rarity.COMMON, type: CardType.PSYCHIC, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Mewtwo", number: 62, rarity: Rarity.RARE, type: CardType.PSYCHIC, hp: 120, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Mewtwo EX", number: 63, rarity: Rarity.DOUBLE_RARE, type: CardType.PSYCHIC, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Mew", number: 64, rarity: Rarity.RARE, type: CardType.PSYCHIC, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    // Fighting
    { name: "Machop", number: 65, rarity: Rarity.COMMON, type: CardType.FIGHTING, hp: 70, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Machoke", number: 66, rarity: Rarity.UNCOMMON, type: CardType.FIGHTING, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Machamp", number: 67, rarity: Rarity.RARE, type: CardType.FIGHTING, hp: 150, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Cubone", number: 68, rarity: Rarity.COMMON, type: CardType.FIGHTING, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Marowak", number: 69, rarity: Rarity.UNCOMMON, type: CardType.FIGHTING, hp: 100, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Hitmonlee", number: 70, rarity: Rarity.UNCOMMON, type: CardType.FIGHTING, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Hitmonchan", number: 71, rarity: Rarity.UNCOMMON, type: CardType.FIGHTING, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Machamp EX", number: 72, rarity: Rarity.DOUBLE_RARE, type: CardType.FIGHTING, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    // Darkness
    { name: "Ekans", number: 73, rarity: Rarity.COMMON, type: CardType.DARKNESS, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Arbok", number: 74, rarity: Rarity.UNCOMMON, type: CardType.DARKNESS, hp: 110, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    // Colorless
    { name: "Pidgey", number: 75, rarity: Rarity.COMMON, type: CardType.COLORLESS, hp: 50, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Pidgeotto", number: 76, rarity: Rarity.UNCOMMON, type: CardType.COLORLESS, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Pidgeot", number: 77, rarity: Rarity.RARE, type: CardType.COLORLESS, hp: 130, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Rattata", number: 78, rarity: Rarity.COMMON, type: CardType.COLORLESS, hp: 40, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Eevee", number: 79, rarity: Rarity.COMMON, type: CardType.COLORLESS, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Snorlax", number: 80, rarity: Rarity.RARE, type: CardType.COLORLESS, hp: 150, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Dratini", number: 81, rarity: Rarity.COMMON, type: CardType.DRAGON, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Dragonair", number: 82, rarity: Rarity.UNCOMMON, type: CardType.DRAGON, hp: 80, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Dragonite", number: 83, rarity: Rarity.RARE, type: CardType.DRAGON, hp: 160, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    // Trainers
    { name: "Poké Ball", number: 84, rarity: Rarity.COMMON, category: CardCategory.ITEM, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Professor's Research", number: 85, rarity: Rarity.COMMON, category: CardCategory.SUPPORTER, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Potion", number: 86, rarity: Rarity.COMMON, category: CardCategory.ITEM, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Red Card", number: 87, rarity: Rarity.UNCOMMON, category: CardCategory.ITEM, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    { name: "Sabrina", number: 88, rarity: Rarity.UNCOMMON, category: CardCategory.SUPPORTER, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
    // Art Rares (☆)
    { name: "Venusaur EX Art", number: 89, rarity: Rarity.ART_RARE, type: CardType.GRASS, hp: 190, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Charizard EX Art", number: 90, rarity: Rarity.ART_RARE, type: CardType.FIRE, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Blastoise EX Art", number: 91, rarity: Rarity.ART_RARE, type: CardType.WATER, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Pikachu EX Art", number: 92, rarity: Rarity.ART_RARE, type: CardType.LIGHTNING, hp: 120, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Mewtwo EX Art", number: 93, rarity: Rarity.ART_RARE, type: CardType.PSYCHIC, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    // Super Art Rares (☆☆)
    { name: "Venusaur EX SAR", number: 94, rarity: Rarity.SUPER_ART_RARE, type: CardType.GRASS, hp: 190, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Charizard EX SAR", number: 95, rarity: Rarity.SUPER_ART_RARE, type: CardType.FIRE, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Blastoise EX SAR", number: 96, rarity: Rarity.SUPER_ART_RARE, type: CardType.WATER, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Pikachu EX SAR", number: 97, rarity: Rarity.SUPER_ART_RARE, type: CardType.LIGHTNING, hp: 120, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    { name: "Mewtwo EX SAR", number: 98, rarity: Rarity.SUPER_ART_RARE, type: CardType.PSYCHIC, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    // Immersive Art (☆☆☆)
    { name: "Mewtwo EX IA", number: 99, rarity: Rarity.IMMERSIVE_ART, type: CardType.PSYCHIC, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id] },
    { name: "Charizard EX IA", number: 100, rarity: Rarity.IMMERSIVE_ART, type: CardType.FIRE, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [charizardPack.id] },
    { name: "Pikachu EX IA", number: 101, rarity: Rarity.IMMERSIVE_ART, type: CardType.LIGHTNING, hp: 120, isEX: true, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [pikachuPack.id] },
    // Crown Rare (👑)
    { name: "Mew Crown", number: 102, rarity: Rarity.CROWN_RARE, type: CardType.PSYCHIC, hp: 60, category: CardCategory.POKEMON, expansionId: geneticApex.id, packIds: [mewtewPack.id, charizardPack.id, pikachuPack.id] },
  ];

  // ─── Mythical Island Cards ───────────────────
  const mythicalIslandCards: CardSeed[] = [
    { name: "Exeggcute", number: 1, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 50, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Exeggutor", number: 2, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 130, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Petilil", number: 3, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 60, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Lilligant", number: 4, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 100, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Slugma", number: 5, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 70, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Magcargo", number: 6, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 120, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Wailord", number: 9, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 160, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Staryu", number: 10, rarity: Rarity.COMMON, type: CardType.WATER, hp: 50, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Starmie EX", number: 11, rarity: Rarity.RARE, type: CardType.WATER, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Electabuzz", number: 12, rarity: Rarity.COMMON, type: CardType.LIGHTNING, hp: 80, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Electivire", number: 13, rarity: Rarity.UNCOMMON, type: CardType.LIGHTNING, hp: 120, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Mew EX", number: 14, rarity: Rarity.RARE, type: CardType.PSYCHIC, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Aerodactyl EX", number: 15, rarity: Rarity.RARE, type: CardType.FIGHTING, hp: 140, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Celebi EX", number: 16, rarity: Rarity.RARE, type: CardType.GRASS, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    // Mythical Island Art Rares
    { name: "Mew EX Art", number: 17, rarity: Rarity.ART_RARE, type: CardType.PSYCHIC, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    { name: "Celebi EX Art", number: 18, rarity: Rarity.ART_RARE, type: CardType.GRASS, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    // Mythical Island Immersive Art
    { name: "Mew EX IA", number: 19, rarity: Rarity.IMMERSIVE_ART, type: CardType.PSYCHIC, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
    // Mythical Island Crown Rare
    { name: "Mew Crown", number: 20, rarity: Rarity.CROWN_RARE, type: CardType.PSYCHIC, hp: 130, category: CardCategory.POKEMON, expansionId: mythicalIsland.id, packIds: [mewPack.id] },
  ];

  // ─── Space-Time Smackdown Cards ──────────────
  const spaceTimeCards: CardSeed[] = [
    { name: "Budew", number: 1, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 50, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Roselia", number: 2, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Roserade", number: 3, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 110, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    { name: "Turtwig", number: 4, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Grotle", number: 5, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 100, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Torterra EX", number: 6, rarity: Rarity.RARE, type: CardType.GRASS, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Chimchar", number: 7, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 60, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Monferno", number: 8, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 80, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    { name: "Infernape EX", number: 9, rarity: Rarity.RARE, type: CardType.FIRE, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    { name: "Piplup", number: 10, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Prinplup", number: 11, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Empoleon EX", number: 12, rarity: Rarity.RARE, type: CardType.WATER, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Shinx", number: 13, rarity: Rarity.COMMON, type: CardType.LIGHTNING, hp: 60, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Luxio", number: 14, rarity: Rarity.UNCOMMON, type: CardType.LIGHTNING, hp: 90, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    { name: "Luxray", number: 15, rarity: Rarity.RARE, type: CardType.LIGHTNING, hp: 140, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    { name: "Dialga EX", number: 16, rarity: Rarity.RARE, type: CardType.METAL, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Palkia EX", number: 17, rarity: Rarity.RARE, type: CardType.WATER, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    { name: "Garchomp EX", number: 18, rarity: Rarity.RARE, type: CardType.DRAGON, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    // Space-Time Trainers
    { name: "Cynthia", number: 19, rarity: Rarity.UNCOMMON, category: CardCategory.SUPPORTER, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    { name: "Dawn", number: 20, rarity: Rarity.UNCOMMON, category: CardCategory.SUPPORTER, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
    // Space-Time Art Rares
    { name: "Dialga EX Art", number: 21, rarity: Rarity.ART_RARE, type: CardType.METAL, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Palkia EX Art", number: 22, rarity: Rarity.ART_RARE, type: CardType.WATER, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    // Space-Time Immersive Art
    { name: "Dialga EX IA", number: 23, rarity: Rarity.IMMERSIVE_ART, type: CardType.METAL, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id] },
    { name: "Palkia EX IA", number: 24, rarity: Rarity.IMMERSIVE_ART, type: CardType.WATER, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [palkiaPack.id] },
    // Space-Time Crown Rare
    { name: "Arceus Crown", number: 25, rarity: Rarity.CROWN_RARE, type: CardType.COLORLESS, hp: 100, category: CardCategory.POKEMON, expansionId: spaceTimeSmackdown.id, packIds: [dialgaPack.id, palkiaPack.id] },
  ];

  // ─── Triumphant Light Cards ───────────────────
  const triumphantLightCards: CardSeed[] = [
    { name: "Eevee", number: 1, rarity: Rarity.COMMON, type: CardType.COLORLESS, hp: 60, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Leafeon", number: 2, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 100, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Glaceon", number: 3, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 100, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Espeon", number: 4, rarity: Rarity.UNCOMMON, type: CardType.PSYCHIC, hp: 90, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Umbreon", number: 5, rarity: Rarity.UNCOMMON, type: CardType.DARKNESS, hp: 100, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Starly", number: 6, rarity: Rarity.COMMON, type: CardType.COLORLESS, hp: 50, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Staraptor", number: 7, rarity: Rarity.RARE, type: CardType.COLORLESS, hp: 140, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Sylveon EX", number: 8, rarity: Rarity.DOUBLE_RARE, type: CardType.PSYCHIC, hp: 140, isEX: true, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Sylveon EX Art", number: 9, rarity: Rarity.ART_RARE, type: CardType.PSYCHIC, hp: 140, isEX: true, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Sylveon EX IA", number: 10, rarity: Rarity.IMMERSIVE_ART, type: CardType.PSYCHIC, hp: 140, isEX: true, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
    { name: "Darkrai Crown", number: 11, rarity: Rarity.CROWN_RARE, type: CardType.DARKNESS, hp: 120, category: CardCategory.POKEMON, expansionId: triumphantLight.id, packIds: [arceusPack.id] },
  ];

  // ─── Shining Revelry Cards ──────────────────
  const shiningRevelryCards: CardSeed[] = [
    { name: "Chikorita", number: 1, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 60, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id, lugiaPack.id] },
    { name: "Bayleef", number: 2, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 90, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id] },
    { name: "Meganium", number: 3, rarity: Rarity.RARE, type: CardType.GRASS, hp: 150, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id] },
    { name: "Cyndaquil", number: 4, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 60, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id, lugiaPack.id] },
    { name: "Quilava", number: 5, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 80, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id] },
    { name: "Typhlosion", number: 6, rarity: Rarity.RARE, type: CardType.FIRE, hp: 150, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id] },
    { name: "Totodile", number: 7, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id, lugiaPack.id] },
    { name: "Croconaw", number: 8, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [lugiaPack.id] },
    { name: "Feraligatr", number: 9, rarity: Rarity.RARE, type: CardType.WATER, hp: 160, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [lugiaPack.id] },
    { name: "Ho-Oh EX", number: 10, rarity: Rarity.DOUBLE_RARE, type: CardType.FIRE, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id] },
    { name: "Lugia EX", number: 11, rarity: Rarity.DOUBLE_RARE, type: CardType.COLORLESS, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [lugiaPack.id] },
    { name: "Ho-Oh EX Art", number: 12, rarity: Rarity.ART_RARE, type: CardType.FIRE, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id] },
    { name: "Lugia EX Art", number: 13, rarity: Rarity.ART_RARE, type: CardType.COLORLESS, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [lugiaPack.id] },
    { name: "Celebi Crown", number: 14, rarity: Rarity.CROWN_RARE, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: shiningRevelry.id, packIds: [hoOhPack.id, lugiaPack.id] },
  ];

  // ─── Celestial Guardians Cards ──────────────
  const celestialGuardiansCards: CardSeed[] = [
    { name: "Treecko", number: 1, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 50, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id, groudonPack.id, rayquazaPack.id] },
    { name: "Grovyle", number: 2, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 80, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [rayquazaPack.id] },
    { name: "Sceptile", number: 3, rarity: Rarity.RARE, type: CardType.GRASS, hp: 140, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [rayquazaPack.id] },
    { name: "Torchic", number: 4, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 60, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id, groudonPack.id, rayquazaPack.id] },
    { name: "Combusken", number: 5, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 90, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [groudonPack.id] },
    { name: "Blaziken", number: 6, rarity: Rarity.RARE, type: CardType.FIRE, hp: 150, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [groudonPack.id] },
    { name: "Mudkip", number: 7, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id, groudonPack.id, rayquazaPack.id] },
    { name: "Marshtomp", number: 8, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id] },
    { name: "Swampert", number: 9, rarity: Rarity.RARE, type: CardType.WATER, hp: 160, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id] },
    { name: "Kyogre EX", number: 10, rarity: Rarity.DOUBLE_RARE, type: CardType.WATER, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id] },
    { name: "Groudon EX", number: 11, rarity: Rarity.DOUBLE_RARE, type: CardType.FIGHTING, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [groudonPack.id] },
    { name: "Rayquaza EX", number: 12, rarity: Rarity.DOUBLE_RARE, type: CardType.DRAGON, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [rayquazaPack.id] },
    { name: "Kyogre EX Art", number: 13, rarity: Rarity.ART_RARE, type: CardType.WATER, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id] },
    { name: "Groudon EX Art", number: 14, rarity: Rarity.ART_RARE, type: CardType.FIGHTING, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [groudonPack.id] },
    { name: "Rayquaza EX Art", number: 15, rarity: Rarity.ART_RARE, type: CardType.DRAGON, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [rayquazaPack.id] },
    { name: "Rayquaza EX IA", number: 16, rarity: Rarity.IMMERSIVE_ART, type: CardType.DRAGON, hp: 160, isEX: true, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [rayquazaPack.id] },
    { name: "Rayquaza Crown", number: 17, rarity: Rarity.CROWN_RARE, type: CardType.DRAGON, hp: 160, category: CardCategory.POKEMON, expansionId: celestialGuardians.id, packIds: [kyogrePack.id, groudonPack.id, rayquazaPack.id] },
  ];

  // ─── Extradimensional Crisis Cards ──────────
  const extradimensionalCrisisCards: CardSeed[] = [
    { name: "Ralts", number: 1, rarity: Rarity.COMMON, type: CardType.PSYCHIC, hp: 60, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Kirlia", number: 2, rarity: Rarity.UNCOMMON, type: CardType.PSYCHIC, hp: 80, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Gardevoir", number: 3, rarity: Rarity.RARE, type: CardType.PSYCHIC, hp: 130, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Duskull", number: 4, rarity: Rarity.COMMON, type: CardType.PSYCHIC, hp: 50, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Dusclops", number: 5, rarity: Rarity.UNCOMMON, type: CardType.PSYCHIC, hp: 90, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Dusknoir", number: 6, rarity: Rarity.RARE, type: CardType.PSYCHIC, hp: 150, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Spiritomb", number: 7, rarity: Rarity.UNCOMMON, type: CardType.DARKNESS, hp: 70, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Giratina EX", number: 8, rarity: Rarity.DOUBLE_RARE, type: CardType.DRAGON, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Gardevoir EX", number: 9, rarity: Rarity.DOUBLE_RARE, type: CardType.PSYCHIC, hp: 150, isEX: true, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Giratina EX Art", number: 10, rarity: Rarity.ART_RARE, type: CardType.DRAGON, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Giratina EX IA", number: 11, rarity: Rarity.IMMERSIVE_ART, type: CardType.DRAGON, hp: 180, isEX: true, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
    { name: "Giratina Crown", number: 12, rarity: Rarity.CROWN_RARE, type: CardType.DRAGON, hp: 180, category: CardCategory.POKEMON, expansionId: extradimensionalCrisis.id, packIds: [giratinaPack.id] },
  ];

  // ─── Legendary Clash Cards ──────────────────
  const legendaryClashCards: CardSeed[] = [
    { name: "Snivy", number: 1, rarity: Rarity.COMMON, type: CardType.GRASS, hp: 60, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id, zekromPack.id] },
    { name: "Servine", number: 2, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 80, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Serperior", number: 3, rarity: Rarity.RARE, type: CardType.GRASS, hp: 140, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Tepig", number: 4, rarity: Rarity.COMMON, type: CardType.FIRE, hp: 70, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id, zekromPack.id] },
    { name: "Pignite", number: 5, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 100, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Emboar", number: 6, rarity: Rarity.RARE, type: CardType.FIRE, hp: 160, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Oshawott", number: 7, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id, zekromPack.id] },
    { name: "Dewott", number: 8, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 90, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [zekromPack.id] },
    { name: "Samurott", number: 9, rarity: Rarity.RARE, type: CardType.WATER, hp: 150, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [zekromPack.id] },
    { name: "Reshiram EX", number: 10, rarity: Rarity.DOUBLE_RARE, type: CardType.FIRE, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Zekrom EX", number: 11, rarity: Rarity.DOUBLE_RARE, type: CardType.LIGHTNING, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [zekromPack.id] },
    { name: "Reshiram EX Art", number: 12, rarity: Rarity.ART_RARE, type: CardType.FIRE, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Zekrom EX Art", number: 13, rarity: Rarity.ART_RARE, type: CardType.LIGHTNING, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [zekromPack.id] },
    { name: "Reshiram EX IA", number: 14, rarity: Rarity.IMMERSIVE_ART, type: CardType.FIRE, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id] },
    { name: "Zekrom EX IA", number: 15, rarity: Rarity.IMMERSIVE_ART, type: CardType.LIGHTNING, hp: 170, isEX: true, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [zekromPack.id] },
    { name: "Kyurem Crown", number: 16, rarity: Rarity.CROWN_RARE, type: CardType.WATER, hp: 140, category: CardCategory.POKEMON, expansionId: legendaryClash.id, packIds: [reshiramPack.id, zekromPack.id] },
  ];

  // ─── Mystic Horizon Cards ──────────────────
  const mysticHorizonCards: CardSeed[] = [
    { name: "Victini", number: 1, rarity: Rarity.UNCOMMON, type: CardType.FIRE, hp: 70, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Keldeo", number: 2, rarity: Rarity.UNCOMMON, type: CardType.WATER, hp: 80, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Jirachi", number: 3, rarity: Rarity.UNCOMMON, type: CardType.PSYCHIC, hp: 70, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Shaymin", number: 4, rarity: Rarity.UNCOMMON, type: CardType.GRASS, hp: 70, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Manaphy", number: 5, rarity: Rarity.COMMON, type: CardType.WATER, hp: 50, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Phione", number: 6, rarity: Rarity.COMMON, type: CardType.WATER, hp: 60, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Meloetta EX", number: 7, rarity: Rarity.DOUBLE_RARE, type: CardType.PSYCHIC, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Victini EX", number: 8, rarity: Rarity.DOUBLE_RARE, type: CardType.FIRE, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Meloetta EX Art", number: 9, rarity: Rarity.ART_RARE, type: CardType.PSYCHIC, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Meloetta EX IA", number: 10, rarity: Rarity.IMMERSIVE_ART, type: CardType.PSYCHIC, hp: 130, isEX: true, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
    { name: "Meloetta Crown", number: 11, rarity: Rarity.CROWN_RARE, type: CardType.PSYCHIC, hp: 130, category: CardCategory.POKEMON, expansionId: mysticHorizon.id, packIds: [meloettaPack.id] },
  ];

  // ─── Insert All Cards ────────────────────────
  const allCards = [...geneticApexCards, ...mythicalIslandCards, ...spaceTimeCards, ...triumphantLightCards, ...shiningRevelryCards, ...celestialGuardiansCards, ...extradimensionalCrisisCards, ...legendaryClashCards, ...mysticHorizonCards];

  for (const cardData of allCards) {
    await createCard(cardData);
  }

  console.log(`✅ ${allCards.length} cards created`);
  console.log("🌱 Seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
