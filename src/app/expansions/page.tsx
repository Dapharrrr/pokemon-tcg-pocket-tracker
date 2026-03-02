import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ExpansionLogo } from "@/components/CardImage";

export default async function ExpansionsPage() {
  const expansions = await prisma.expansion.findMany({
    orderBy: { releaseDate: "desc" },
    include: {
      _count: { select: { cards: true, packs: true } },
      packs: {
        select: { id: true, name: true, slug: true, color: true },
      },
    },
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">All Expansions</h1>

      <div className="space-y-6">
        {expansions.map((exp) => (
          <div
            key={exp.id}
            className="rounded-xl border border-gray-800 bg-gray-900 p-6"
          >
            <Link
              href={`/expansions/${exp.slug}`}
              className="flex items-center gap-3 text-2xl font-bold hover:text-blue-400"
            >
              <ExpansionLogo setCode={exp.setCode} name={exp.name} size={36} />
              {exp.name}
            </Link>
            <p className="mt-1 text-sm text-gray-500">
              Released {exp.releaseDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" · "}
              {exp._count.cards} cards · {exp._count.packs} packs
            </p>

            {/* Packs */}
            <div className="mt-4 flex flex-wrap gap-3">
              {exp.packs.map((pack) => (
                <Link
                  key={pack.id}
                  href={`/expansions/${exp.slug}/${pack.slug}`}
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
          </div>
        ))}
      </div>
    </div>
  );
}
