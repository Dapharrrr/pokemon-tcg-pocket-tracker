import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { rarityDisplay } from "@/lib/rarity";
import { CardImage } from "@/components/CardImage";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CardDetailPage({ params }: Props) {
  const { id } = await params;

  const card = await prisma.card.findUnique({
    where: { id },
    include: {
      expansion: true,
      packs: {
        include: {
          pack: { include: { expansion: { select: { slug: true } } } },
        },
      },
    },
  });

  if (!card) notFound();

  const rarity = rarityDisplay[card.rarity];

  return (
    <div className="space-y-8">
      <Link
        href={`/expansions/${card.expansion.slug}`}
        className="text-sm text-gray-500 hover:text-gray-300"
      >
        ← Back to {card.expansion.name}
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Card Visual */}
        <div className="flex items-center justify-center rounded-2xl border border-gray-800 bg-gray-900 p-4">
          <CardImage
            setCode={card.expansion.setCode}
            cardNumber={card.number}
            cardName={card.name}
            size="lg"
            className="w-full"
          />
        </div>

        {/* Card Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">
              #{String(card.number).padStart(3, "0")} · {card.expansion.name}
            </p>
            <h1 className="mt-1 text-4xl font-bold">
              {card.name}
              {card.isEX && (
                <span className="ml-2 text-2xl text-purple-400">EX</span>
              )}
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="text-xs text-gray-500">Rarity</div>
              <div className={`mt-1 text-lg font-semibold ${rarity.color}`}>
                {rarity.symbol} {rarity.label}
              </div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="text-xs text-gray-500">Category</div>
              <div className="mt-1 text-lg font-semibold">{card.category}</div>
            </div>
            {card.type && (
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <div className="text-xs text-gray-500">Type</div>
                <div className="mt-1 text-lg font-semibold">{card.type}</div>
              </div>
            )}
            {card.hp && (
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <div className="text-xs text-gray-500">HP</div>
                <div className="mt-1 text-lg font-semibold">{card.hp}</div>
              </div>
            )}
          </div>

          {/* Found in packs */}
          <div>
            <h2 className="text-sm font-semibold text-gray-400">
              Found in packs:
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {card.packs.map(({ pack }) => (
                <Link
                  key={pack.id}
                  href={`/expansions/${pack.expansion.slug}/${pack.slug}`}
                  className="rounded-lg border border-gray-700 px-3 py-1.5 text-sm transition hover:border-gray-500 hover:bg-gray-800"
                  style={{
                    borderLeftColor: pack.color || undefined,
                    borderLeftWidth: pack.color ? "3px" : undefined,
                  }}
                >
                  🎁 {pack.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
