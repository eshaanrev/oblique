import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import HeroImage from "@/components/HeroImage";
import IndexList from "@/components/IndexList";
import Parallax from "@/components/Parallax";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import { projects } from "@/lib/projects";

const capabilities = [
  {
    n: "01",
    title: "Architecture",
    body: "Cultural, residential, civic and education buildings from competition through to defects. We keep the drawing in the office for the whole of that journey.",
  },
  {
    n: "02",
    title: "Urbanism",
    body: "Blocks, quarters and public realm. We work at 1:1000 with the same obsessiveness we bring to a 1:5 junction, because the two decide each other.",
  },
  {
    n: "03",
    title: "Façade research",
    body: "An in-house group of six developing envelopes with our engineers. Every system we specify has been built at full size before it is drawn.",
  },
];

export default function Home() {
  const hero = projects[0];

  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
        <HeroImage src={hero.cover.src} alt={hero.cover.alt} focus="50% 45%" />
        {/* one scrim only: heavy where the type sits, almost nothing over the picture */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,9,11,0.96) 0%, rgba(8,9,11,0.86) 18%, rgba(8,9,11,0.34) 44%, rgba(8,9,11,0.06) 66%, rgba(8,9,11,0.42) 100%)",
          }}
        />

        <div className="relative flex h-full flex-col justify-end">
          <div className="mx-auto w-full max-w-[1680px] px-5 pb-10 md:px-8 md:pb-14">
            <p className="label mb-7 animate-[fade-in_1.2s_ease-out_0.9s_both]">
              Zürich · Berlin · Singapore — Est. 2011
            </p>

            <h1 className="display text-[clamp(2.6rem,8.6vw,8.6rem)]">
              <span className="line-mask">
                <span style={{ animationDelay: "0.15s" }}>Structure</span>
              </span>
              <span className="line-mask">
                <span style={{ animationDelay: "0.27s" }}>
                  as <span className="text-amber">argument</span>
                </span>
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-6 border-t border-line-2 pt-6 animate-[fade-in_1.4s_ease-out_1.1s_both] md:flex-row md:items-start md:justify-between">
              <p className="max-w-md text-[0.95rem] leading-relaxed text-chalk-2">
                An architecture, urbanism and research practice building in three
                cities. We are interested in what a building is made of, how it
                is held up, and who gets to stand underneath it.
              </p>
              <div className="flex items-center gap-10">
                <span className="label hidden lg:block">{hero.cover.caption}</span>
                <Link href="/work" className="label link-underline text-chalk">
                  Selected work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ---------- statement ---------- */}
      <section className="mx-auto max-w-[1680px] px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <Reveal>
            <h2 className="label pt-3">The practice</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="display max-w-5xl text-[clamp(1.5rem,3.6vw,3.2rem)] leading-[1.06]">
              Sixty-four people, three offices, one rule — the person who draws
              the detail stands on the scaffold when it is built.
            </p>
            <div className="mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
              <p className="text-[0.95rem] leading-relaxed text-muted">
                Oblique was founded in 2011 on a single technical conviction:
                that the envelope is not a finish applied to a building but the
                argument the building is making. Everything else in the practice
                follows from taking that seriously — the in-house façade group,
                the full-size mock-ups, the refusal to hand a project to a
                delivery team at stage four.
              </p>
              <p className="text-[0.95rem] leading-relaxed text-muted">
                We work across cultural, residential and civic sectors, mostly by
                competition, and we publish the embodied-carbon figure for every
                completed building whether or not it flatters us. Since 2019 that
                number has fallen by just over a third.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- index ---------- */}
      <section className="mx-auto max-w-[1680px] px-5 md:px-8">
        <Reveal className="mb-10 flex items-end justify-between">
          <h2 className="label">Selected work — Index</h2>
          <Link href="/work" className="label link-underline text-chalk">
            All projects ({projects.length})
          </Link>
        </Reveal>
        <IndexList projects={projects} />
      </section>

      {/* ---------- feature one ---------- */}
      <section className="mt-24 md:mt-36">
        <div className="h-[78svh] min-h-[420px] w-full overflow-hidden">
          <Parallax amount={0.16} className="h-full w-full">
            <div className="relative h-[116%] w-full">
              <Image
                src={projects[5].cover.src}
                alt={projects[5].cover.alt}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Parallax>
        </div>
        <div className="mx-auto max-w-[1680px] px-5 md:px-8">
          <Reveal className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="flex items-baseline gap-5">
              <span className="label">{projects[5].index}</span>
              <h3 className="display text-[clamp(1.5rem,3vw,2.4rem)]">
                {projects[5].title}
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {projects[5].lede}
            </p>
            <Link
              href={`/work/${projects[5].slug}`}
              className="label link-underline shrink-0 text-chalk"
            >
              View project →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- capabilities ---------- */}
      <section className="mx-auto max-w-[1680px] px-5 py-24 md:px-8 md:py-36">
        <Reveal className="mb-14">
          <h2 className="label">What we do</h2>
        </Reveal>

        <div className="grid gap-x-10 lg:grid-cols-[1fr_0.72fr] lg:gap-x-20">
          <div>
            {capabilities.map((c, i) => (
              <Reveal
                key={c.n}
                delay={i * 90}
                className="grid grid-cols-[44px_1fr] gap-4 border-t border-line py-8 last:border-b md:grid-cols-[80px_1fr] md:gap-8"
              >
                <span className="label pt-2 text-amber">{c.n}</span>
                <div>
                  <h3 className="display text-[clamp(1.5rem,3vw,2.3rem)]">{c.title}</h3>
                  <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-14 lg:mt-0">
            <Photo
              src={projects[3].gallery[2].src}
              alt={projects[3].gallery[2].alt}
              ratio="3 / 4"
              caption="Façade research group — galvanised balustrade prototype, Zürich"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>

        {/* numbers */}
        <div className="mt-24 grid grid-cols-2 gap-y-12 border-t border-line pt-12 md:grid-cols-4">
          {[
            { v: 15, s: "", l: "Years in practice" },
            { v: 64, s: "", l: "People" },
            { v: 47, s: "", l: "Buildings completed" },
            { v: 34, s: "%", l: "Embodied carbon, since 2019" },
          ].map((stat, i) => (
            <Reveal key={stat.l} delay={i * 80}>
              <p className="display text-[clamp(2.6rem,6vw,5rem)] leading-none">
                <Counter to={stat.v} suffix={stat.s} />
              </p>
              <p className="label mt-4">{stat.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- feature two: split ---------- */}
      <section className="mx-auto max-w-[1680px] px-5 pb-24 md:px-8 md:pb-36">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <Link href={`/work/${projects[3].slug}`} className="group block">
              <Photo
                src={projects[3].cover.src}
                alt={projects[3].cover.alt}
                ratio="4 / 3"
                hover
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                <h3 className="display text-[clamp(1.3rem,2.4vw,2rem)]">
                  {projects[3].title}
                </h3>
                <span className="label">{projects[3].year}</span>
              </div>
              <p className="label mt-2">{projects[3].place}</p>
            </Link>
          </Reveal>

          <Reveal delay={90} className="md:col-span-5 md:pt-24">
            <Link href={`/work/${projects[2].slug}`} className="group block">
              <Photo
                src={projects[2].cover.src}
                alt={projects[2].cover.alt}
                ratio="3 / 4"
                hover
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                <h3 className="display text-[clamp(1.3rem,2.4vw,2rem)]">
                  {projects[2].title}
                </h3>
                <span className="label">{projects[2].year}</span>
              </div>
              <p className="label mt-2">{projects[2].place}</p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- cta ---------- */}
      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-8 md:py-36">
          <Reveal>
            <p className="label mb-10">New work</p>
            <Link href="/contact" className="group block">
              <h2 className="display text-[clamp(2.4rem,9vw,8.5rem)] leading-[0.88]">
                Bring us
                <br />
                a difficult site
                <span className="ml-5 inline-block text-amber transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-5">
                  →
                </span>
              </h2>
            </Link>
            <p className="mt-10 max-w-lg text-[0.95rem] leading-relaxed text-muted">
              We take on roughly six new projects a year and read every enquiry
              ourselves. Expect an answer within two weeks, including a no.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
