import type { Metadata } from "next";
import Link from "next/link";
import IndexList from "@/components/IndexList";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected cultural, residential, civic and education projects by Oblique.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1680px] px-5 pt-32 pb-28 md:px-8 md:pt-44 md:pb-40">
      <header className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
        <h1 className="display text-[clamp(2.8rem,9vw,8rem)]">
          <span className="line-mask">
            <span style={{ animationDelay: "0.1s" }}>Selected</span>
          </span>
          <span className="line-mask">
            <span style={{ animationDelay: "0.2s" }} className="text-amber">
              work
            </span>
          </span>
        </h1>
        <p className="max-w-md text-[0.95rem] leading-relaxed text-muted animate-[fade-in_1.2s_ease-out_0.7s_both] lg:pb-3">
          Forty-seven buildings completed since 2011. These six describe the
          range — a cultural centre with no straight line in it, two housing
          blocks, an arts school, a tower and an exhibition hall lifted off a
          public square.
        </p>
      </header>

      <IndexList projects={projects} />

      {/* the same six, at scale */}
      <div className="mt-28 grid gap-x-8 gap-y-20 md:grid-cols-12">
        {projects.map((p, i) => {
          const layout = [
            "md:col-span-7",
            "md:col-span-5 md:pt-24",
            "md:col-span-5 md:col-start-2",
            "md:col-span-6 md:col-start-7 md:pt-20",
            "md:col-span-8",
            "md:col-span-4 md:pt-28",
          ][i];
          const ratio = ["4 / 3", "3 / 4", "3 / 4", "4 / 3", "16 / 9", "3 / 4"][i];
          return (
            <Reveal key={p.slug} className={layout} delay={(i % 2) * 80}>
              <Link href={`/work/${p.slug}`} className="group block">
                <Photo
                  src={p.cover.src}
                  alt={p.cover.alt}
                  ratio={ratio}
                  focus={p.cover.focus}
                  hover
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-line pt-4">
                  <div className="flex items-baseline gap-4">
                    <span className="label">{p.index}</span>
                    <h2 className="display text-[clamp(1.3rem,2.4vw,2rem)]">
                      <span className="link-underline">{p.title}</span>
                    </h2>
                  </div>
                  <span className="label whitespace-nowrap">{p.year}</span>
                </div>
                <p className="label mt-2">
                  {p.place} — {p.typology}
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
