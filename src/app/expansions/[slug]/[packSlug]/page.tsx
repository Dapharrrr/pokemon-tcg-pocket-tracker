import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { rarityDisplay } from "@/lib/rarity";

type Props = {
  params: Promise<{ slug: string; packSlug: string }>;
};

export default async function PackPage({ params }: Props) {
  const { slug, packSlug } = await params;

  const expansion = await prisma.expansion.findUnique({
    where: { slug },
  });

  if (!expansion) notFound();

  const pack = await prisma.pack.findUnique({
    where: {
      expansionId_slug: {
        expansionId: expansion.id,
        slug: packSlug,
      },
    },
    include: {
      cards: {
        include: {
          card: true,
        },
        orderBy: { card: { number: "asc" } },
      },
    },
  });

  if (!pack) notFound();

  return (
    <div className="space-y-8">
      <div>
        <Link
          href={`/expansions/${slug}`}
          className="text-sm text-gray-500 hover:text-gray-300"
        >
          ← Back to {expansion.name}
        </Link>
        <h1 className="mt-2 text-3xl font-bold">🎁 {pack.name}</h1>
        <p className="mt-1 text-gray-400">
          {pack.cards.length} cards in this pack
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pack.cards.map(({ card }) => {
          const rarity = rarityDisplay[card.rarity];
          return (
            <Link
              key={card.id}
              href={`/cards/${card.id}`}
              className="group rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-gray-500">
                  #{String(card.number).padStart(3, "0")}
                </span>
                <span className={`text-xs ${rarity.color}`}>
                  {rarity.symbol}
                </span>
              </div>
              <h3 className="mt-2 font-semibold group-hover:text-blue-400">
                {card.name}
                {card.isEX && (
                  <span className="ml-1 text-xs text-purple-400">EX</span>
                )}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                {card.type && <span>{card.type}</span>}
                {card.hp && <span>· {card.hp} HP</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
