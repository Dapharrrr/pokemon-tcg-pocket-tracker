import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { rarityDisplay } from "@/lib/rarity";
import { CardImage } from "@/components/CardImage";

export default async function CollectionPage() {
  const user = await prisma.user.upsert({
    where: { username: "demo" },
    update: {},
    create: { username: "demo", email: "demo@example.com" },
  });

  const userCards = await prisma.userCard.findMany({
    where: { userId: user.id },
    include: {
      card: {
        include: { expansion: { select: { name: true, slug: true, setCode: true } } },
      },
    },
    orderBy: { obtainedAt: "desc" },
  });

  // Get total cards available for progress calculation
  const totalCardsInDB = await prisma.card.count();
  const uniqueOwned = userCards.length;
  const progressPercent = totalCardsInDB > 0
    ? Math.round((uniqueOwned / totalCardsInDB) * 100)
    : 0;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Collection</h1>

      {/* Progress Bar */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Collection Progress</span>
          <span className="text-sm font-semibold">
            {uniqueOwned} / {totalCardsInDB} ({progressPercent}%)
          </span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Owned Cards */}
      {userCards.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userCards.map(({ card, quantity }) => {
            const rarity = rarityDisplay[card.rarity];
            return (
              <Link
                key={card.id}
                href={`/cards/${card.id}`}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:border-gray-600 hover:bg-gray-800"
              >
                {quantity > 1 && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold">
                    x{quantity}
                  </span>
                )}
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
                </h3>
                <div className="mt-1 text-xs text-gray-600">
                  {card.expansion.name}
                </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-700 p-12 text-center text-gray-500">
          <p className="text-lg">Your collection is empty!</p>
          <p className="mt-2 text-sm">
            Browse <Link href="/cards" className="text-blue-400 hover:underline">all cards</Link> and start adding them.
          </p>
        </div>
      )}
    </div>
  );
}
