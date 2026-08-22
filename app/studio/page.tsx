import type { Metadata } from "next";
import Image from "next/image";
import Counter from "@/components/Counter";
import Parallax from "@/components/Parallax";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Oblique is a sixty-four person architecture, urbanism and research practice in Zürich, Berlin and Singapore, founded in 2011.",
};

const people = [
  { name: "Nkem Adeyemi", role: "Founding partner", note: "ETH Zürich", shot: 0 },
  { name: "Simran Kaur", role: "Partner", note: "AA School / NUS", shot: 1 },
  { name: "Miro Renko", role: "Partner, façade research", note: "TU Delft", shot: 2 },
  { name: "Joy Okonkwo", role: "Associate", note: "UCL Bartlett", shot: 3 },
  { name: "Tomás Vasquez", role: "Associate", note: "PUC Chile / ETH", shot: 4 },
  { name: "Lena Brühl", role: "Head of construction", note: "HTW Berlin", shot: 5 },
];

const timeline = [
  { year: "2011", text: "Founded in a former print works on Limmatstrasse by three ETH graduates." },
  { year: "2014", text: "First competition win — a swimming hall in Winterthur, still running." },
  { year: "2017", text: "Façade research group established with six full-time staff." },
  { year: "2019", text: "Berlin office opens. Practice publishes its first carbon ledger." },
  { year: "2021", text: "Aperture Hall completes in Basel. Singapore office follows." },
  { year: "2026", text: "Sixty-four people, three cities, eleven projects on site." },
];

export default function StudioPage() {
  return (
    <>
      <div className="mx-auto max-w-[1680px] px-5 pt-32 md:px-8 md:pt-44">
        <p className="label mb-8 animate-[fade-in_1.2s_ease-out_0.7s_both]">The studio</p>
        <h1 className="display text-[clamp(2.6rem,8vw,7rem)]">
          <span className="line-mask">
            <span style={{ animationDelay: "0.1s" }}>Sixty-four people</span>
          </span>
          <span className="line-mask">
            <span style={{ animationDelay: "0.2s" }}>
              in <span className="text-amber">three cities</span>
            </span>
          </span>
        </h1>
      </div>

      <div className="mt-14 h-[62svh] min-h-[340px] overflow-hidden md:mt-20">
        <Parallax amount={0.15} className="h-full w-full">
          <div className="relative h-[116%] w-full">
            <Image
              src="/images/facet-detail.jpg"
              alt="Close view of angled metal fins and glazing across a dark façade"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Parallax>
      </div>

      {/* narrative */}
      <section className="mx-auto max-w-[1680px] px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.78fr] lg:gap-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="display text-[clamp(1.4rem,2.9vw,2.4rem)] leading-[1.1]">
                The practice was started on the suspicion that most buildings are
                detailed by people who will never have to stand next to them.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-10 text-[1rem] leading-[1.8] text-chalk-2">
                Oblique is organised to make that impossible. Projects stay with
                the team that won them from competition through to the defects
                period, and every partner is on site at least one day a week.
                There is no delivery department, and there will not be one.
              </p>
              <p className="mt-6 text-[1rem] leading-[1.8] text-chalk-2">
                Six of the sixty-four work full time on façades. They sit in the
                middle of the studio rather than off to one side, build every
                system at full size before it is drawn for tender, and hold a
                veto on any envelope the practice specifies.
              </p>
              <p className="mt-6 text-[1rem] leading-[1.8] text-chalk-2">
                The Zürich office occupies a 1960s print works with a workshop on
                the ground floor and a yard big enough to stand a three-storey
                mock-up in. Roughly a quarter of the studio&rsquo;s hours are
                spent down there rather than at a screen.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <Photo
              src="/images/aperture-hall.jpg"
              alt="Looking up at a curved, faceted metal façade against a pale sky"
              ratio="3 / 4"
              caption="Full-size envelope mock-up, Limmatstrasse yard"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </Reveal>
        </div>
      </section>

      {/* people */}
      <section className="mx-auto max-w-[1680px] px-5 pb-24 md:px-8 md:pb-36">
        <Reveal className="mb-12 border-t border-line pt-5">
          <h2 className="label">Partners and associates</h2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, i) => {
            const shot = projects[person.shot].cover;
            return (
              <Reveal key={person.name} delay={(i % 3) * 80}>
                <div className="group">
                  <Photo
                    src={shot.src}
                    alt=""
                    ratio="4 / 5"
                    focus={["30% 40%", "60% 30%", "50% 70%", "20% 50%", "70% 60%", "40% 20%"][i]}
                    hover
                    sizes="(max-width: 640px) 100vw, 32vw"
                  />
                </div>
                <h3 className="display mt-5 text-[1.35rem]">{person.name}</h3>
                <p className="mt-2 text-sm text-chalk-2">{person.role}</p>
                <p className="label mt-2">{person.note}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* timeline */}
      <section className="mx-auto max-w-[1680px] px-5 pb-24 md:px-8 md:pb-36">
        <Reveal className="mb-8 border-t border-line pt-5">
          <h2 className="label">History</h2>
        </Reveal>
        <ol>
          {timeline.map((t, i) => (
            <Reveal
              as="li"
              key={t.year}
              delay={i * 60}
              className="grid grid-cols-[72px_1fr] items-baseline gap-6 border-b border-line py-6 md:grid-cols-[180px_1fr]"
            >
              <span className="display text-[1.4rem] text-amber">{t.year}</span>
              <p className="max-w-2xl text-[0.95rem] leading-relaxed text-chalk-2">
                {t.text}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-line pt-12 md:grid-cols-4">
          {[
            { v: 11, s: "", l: "Projects on site" },
            { v: 6, s: "", l: "In façade research" },
            { v: 25, s: "%", l: "Studio hours in the workshop" },
            { v: 3, s: "", l: "Offices" },
          ].map((stat, i) => (
            <Reveal key={stat.l} delay={i * 80}>
              <p className="display text-[clamp(2.2rem,5vw,4.2rem)] leading-none">
                <Counter to={stat.v} suffix={stat.s} />
              </p>
              <p className="label mt-4">{stat.l}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
