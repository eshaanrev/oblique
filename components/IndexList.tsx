import Link from "next/link";
import type { Project } from "@/lib/projects";

/**
 * The project index as a table of hairline rows. No imagery — the row itself
 * does the work: the plate fills from the bottom edge and the title steps
 * right as you move across it.
 */
export default function IndexList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="group relative block border-t border-line last:border-b"
        >
          <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-surface transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100" />

          <div className="relative flex items-center gap-5 py-6 md:gap-10 md:py-8">
            <span className="label w-8 shrink-0 transition-colors group-hover:text-amber">
              {p.index}
            </span>

            <h3 className="display flex-1 text-[clamp(1.6rem,4.4vw,3.4rem)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-3">
              {p.title}
            </h3>

            <span className="label hidden w-44 shrink-0 sm:block">{p.place}</span>
            <span className="label hidden w-28 shrink-0 md:block">{p.typology}</span>
            <span className="label w-12 shrink-0 text-right">{p.year}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
