import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { rarityDisplay } from "@/lib/rarity";
import { CardImage, ExpansionLogo } from "@/components/CardImage";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ExpansionPage({ params }: Props) {
  const { slug } = await params;

  const expansion = await prisma.expansion.findUnique({
    where: { slug },
    include: {
      packs: true,
      cards: {
        orderBy: { number: "asc" },
        include: {
          packs: {
            include: { pack: { select: { name: true, slug: true } } },
          },
        },
      },
    },
  });

  if (!expansion) notFound();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/expansions" className="text-sm text-gray-500 hover:text-gray-300">
          ← Back to expansions
        </Link>
        <h1 className="mt-2 flex items-center gap-3 text-3xl font-bold">
          <ExpansionLogo setCode={expansion.setCode} name={expansion.name} size={40} />
          {expansion.name}
        </h1>
        <p className="mt-1 text-gray-400">
          {expansion.cards.length} cards · Released{" "}
          {expansion.releaseDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Packs */}
      <div className="flex flex-wrap gap-3">
        {expansion.packs.map((pack) => (
          <Link
            key={pack.id}
            href={`/expansions/${slug}/${pack.slug}`}
            className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-gray-500 hover:bg-gray-800"
            style={{
              borderLeftColor: pack.color || undefined,
              borderLeftWidth: pack.color ? "3px" : undefined,
            }}
          >
            🎁 {pack.name}
          </Link>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {expansion.cards.map((card) => {
          const rarity = rarityDisplay[card.rarity];
          return (
            <Link
              key={card.id}
              href={`/cards/${card.id}`}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <div className="aspect-[367/512] bg-gray-800">
                <CardImage
                  setCode={expansion.setCode}
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
              <div className="mt-1 text-xs text-gray-600">
                {rarity.label}
              </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
