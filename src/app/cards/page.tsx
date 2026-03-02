import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { rarityDisplay } from "@/lib/rarity";
import { Rarity, CardType } from "@prisma/client";
import { CardImage } from "@/components/CardImage";

type Props = {
  searchParams: Promise<{ rarity?: string; type?: string; search?: string }>;
};

export default async function CardsPage({ searchParams }: Props) {
  const filters = await searchParams;

  // Build dynamic where clause based on URL query params
  const where: Record<string, unknown> = {};

  if (filters.rarity && Object.values(Rarity).includes(filters.rarity as Rarity)) {
    where.rarity = filters.rarity;
  }
  if (filters.type && Object.values(CardType).includes(filters.type as CardType)) {
    where.type = filters.type;
  }
  if (filters.search) {
    where.name = { contains: filters.search, mode: "insensitive" };
  }

  const cards = await prisma.card.findMany({
    where,
    orderBy: [{ expansion: { releaseDate: "desc" } }, { number: "asc" }],
    include: {
      expansion: { select: { name: true, slug: true, setCode: true } },
    },
    take: 100, // Limit for performance
  });

  const totalCount = await prisma.card.count({ where });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">All Cards</h1>

      {/* ── Filters ── */}
      <form className="flex flex-wrap gap-3">
        {/* Search */}
        <input
          name="search"
          type="text"
          placeholder="Search by name..."
          defaultValue={filters.search || ""}
          className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />

        {/* Rarity filter */}
        <select
          name="rarity"
          defaultValue={filters.rarity || ""}
          className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Rarities</option>
          {Object.values(Rarity).map((r) => (
            <option key={r} value={r}>
              {rarityDisplay[r].symbol} {rarityDisplay[r].label}
            </option>
          ))}
        </select>

        {/* Type filter */}
        <select
          name="type"
          defaultValue={filters.type || ""}
          className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Types</option>
          {Object.values(CardType).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
        >
          Filter
        </button>

        <Link
          href="/cards"
          className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:bg-gray-800"
        >
          Clear
        </Link>
      </form>

      <p className="text-sm text-gray-500">
        Showing {cards.length} of {totalCount} cards
      </p>

      {/* ── Cards Grid ── */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card) => {
          const rarity = rarityDisplay[card.rarity];
          return (
            <Link
              key={card.id}
              href={`/cards/${card.id}`}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <div className="aspect-[367/512] bg-gray-800">
                <CardImage
                  setCode={card.expansion.setCode}
                  cardNumber={card.number}
                  cardName={card.name}
                  size="sm"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3">
              <div className="flex items-start justify-between">
                <span className="text-xs text-gray-500">
                  #{String(card.number).padStart(3, "0")}
                </span>
                <span className={`text-xs ${rarity.color}`}>
                  {rarity.symbol}
                </span>
              </div>
              <h3 className="mt-1 font-semibold group-hover:text-blue-400 text-sm">
                {card.name}
                {card.isEX && (
                  <span className="ml-1 text-xs text-purple-400">EX</span>
                )}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                {card.type && <span>{card.type}</span>}
                {card.hp && <span>· {card.hp} HP</span>}
              </div>
              <div className="mt-1 flex items-center justify-between text-xs text-gray-600">
                <span>{rarity.label}</span>
                <span>{card.expansion.name}</span>
              </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
