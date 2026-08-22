import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroImage from "@/components/HeroImage";
import Parallax from "@/components/Parallax";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { adjacentProjects, getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.lede };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = adjacentProjects(slug);

  const meta = [
    { label: "Location", value: project.place },
    { label: "Year", value: project.year },
    { label: "Typology", value: project.typology },
    { label: "Status", value: project.status },
    { label: "Area", value: project.size },
    { label: "Client", value: project.client },
  ];

  return (
    <article>
      {/* full-bleed hero with the title sitting on it */}
      <section className="relative h-[86svh] min-h-[460px] w-full overflow-hidden">
        <HeroImage
          src={project.cover.src}
          alt={project.cover.alt}
          focus={project.cover.focus ?? "center"}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,9,11,0.96) 0%, rgba(8,9,11,0.84) 20%, rgba(8,9,11,0.3) 46%, rgba(8,9,11,0.05) 68%, rgba(8,9,11,0.4) 100%)",
          }}
        />

        <div className="relative flex h-full flex-col justify-end">
          <div className="mx-auto w-full max-w-[1680px] px-5 pb-10 md:px-8 md:pb-14">
            <Link href="/work" className="label link-underline text-chalk">
              ← Work
            </Link>
            <div className="mt-8 flex items-baseline gap-5">
              <span className="label text-amber">{project.index}</span>
              <h1 className="display text-[clamp(2.4rem,8vw,7.5rem)]">
                <span className="line-mask">
                  <span style={{ animationDelay: "0.12s" }}>{project.title}</span>
                </span>
              </h1>
            </div>
            <p className="label mt-6 animate-[fade-in_1.2s_ease-out_0.8s_both]">
              {project.cover.caption}
            </p>
          </div>
        </div>
      </section>

      {/* data band */}
      <div className="border-b border-line bg-ink">
        <dl className="mx-auto grid max-w-[1680px] grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-3 md:px-8 lg:grid-cols-6">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="label">{m.label}</dt>
              <dd className="mt-2 text-sm text-chalk-2">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* narrative + facts */}
      <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="display text-[clamp(1.35rem,2.5vw,2.1rem)] leading-[1.12]">
                {project.lede}
              </p>
            </Reveal>
            {project.body.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="mt-8 text-[1rem] leading-[1.8] text-chalk-2">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={110} className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="label border-t border-line pt-5">Project data</h2>
            <dl className="mt-5">
              {project.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3"
                >
                  <dt className="label">{f.label}</dt>
                  <dd className="text-right text-sm text-chalk-2">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-faint">
              Project team: {project.team}
            </p>
          </Reveal>
        </div>
      </div>

      {/* image sequence */}
      <div className="mx-auto max-w-[1680px] px-5 pb-24 md:px-8 md:pb-36">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <Photo
              src={project.gallery[0].src}
              alt={project.gallery[0].alt}
              caption={project.gallery[0].caption}
              focus={project.gallery[0].focus}
              ratio="16 / 10"
              sizes="(max-width: 768px) 100vw, 65vw"
            />
          </Reveal>
          <Reveal className="md:col-span-4 md:pt-24" delay={80}>
            <Photo
              src={project.gallery[1].src}
              alt={project.gallery[1].alt}
              caption={project.gallery[1].caption}
              focus={project.gallery[1].focus}
              ratio="3 / 4"
              sizes="(max-width: 768px) 100vw, 32vw"
            />
          </Reveal>
        </div>
      </div>

      {/* full-bleed closing frame */}
      <div className="h-[72svh] min-h-[380px] w-full overflow-hidden">
        <Parallax amount={0.14} className="h-full w-full">
          <div className="relative h-[115%] w-full">
            <Image
              src={project.gallery[2].src}
              alt={project.gallery[2].alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: project.gallery[2].focus ?? "center" }}
            />
          </div>
        </Parallax>
      </div>
      <div className="mx-auto max-w-[1680px] px-5 md:px-8">
        <p className="label mt-4">{project.gallery[2].caption}</p>
      </div>

      {/* next */}
      <section className="mt-24 border-t border-line bg-ink md:mt-36">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="label mb-8">Next project</p>
            <Link
              href={`/work/${next.slug}`}
              className="group grid items-center gap-8 lg:grid-cols-[1fr_380px]"
            >
              <div>
                <h2 className="display text-[clamp(2.2rem,7vw,6rem)]">
                  {next.title}
                  <span className="ml-5 inline-block text-amber transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-5">
                    →
                  </span>
                </h2>
                <p className="label mt-5">
                  {next.place} — {next.typology} — {next.year}
                </p>
              </div>
              <div className="plate aspect-[4/3] w-full">
                <Image
                  src={next.cover.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  style={{ objectFit: "cover", objectPosition: next.cover.focus ?? "center" }}
                  className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
                />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
