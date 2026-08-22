import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquiries, offices and press contacts for Oblique.",
};

const offices = [
  {
    city: "Zürich",
    lines: ["Limmatstrasse 264", "8005 Zürich", "Switzerland"],
    tel: "+41 44 271 08 60",
  },
  {
    city: "Berlin",
    lines: ["Chausseestraße 18", "10115 Berlin", "Germany"],
    tel: "+49 30 4171 2280",
  },
  {
    city: "Singapore",
    lines: ["12 Marina Link, #21-04", "018812 Singapore", "Singapore"],
    tel: "+65 6812 4409",
  },
];

const contacts = [
  { label: "New work", value: "studio@oblique.example" },
  { label: "Press", value: "press@oblique.example" },
  { label: "Careers", value: "join@oblique.example" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1680px] px-5 pt-32 pb-28 md:px-8 md:pt-44 md:pb-40">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
        <div>
          <p className="label mb-8 animate-[fade-in_1.2s_ease-out_0.7s_both]">Contact</p>
          <h1 className="display text-[clamp(2.6rem,7.5vw,6rem)]">
            <span className="line-mask">
              <span style={{ animationDelay: "0.1s" }}>Bring us a</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.2s" }} className="text-amber">
                difficult site
              </span>
            </span>
          </h1>
          <p className="mt-9 max-w-lg text-[0.95rem] leading-relaxed text-muted animate-[fade-in_1.3s_ease-out_0.9s_both]">
            We take on roughly six new projects a year. The more you can tell us
            about the ground, the constraints and the people who will use the
            building, the more useful our first reply will be.
          </p>

          <div className="mt-14">
            <ContactForm />
          </div>
        </div>

        <div className="lg:pt-20">
          <Reveal>
            <Photo
              src="/images/steinweg-arts.jpg"
              alt="A pale concrete arts building in low golden light beside an empty street"
              ratio="4 / 5"
              focus="30% 50%"
              caption="Limmatstrasse 264 — the yard, 07:20"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <h2 className="label border-t border-line pt-5">Offices</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              {offices.map((o) => (
                <div key={o.city}>
                  <h3 className="display text-[1.3rem]">{o.city}</h3>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-muted">
                    {o.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <span className="mt-2 block text-chalk-2">{o.tel}</span>
                  </address>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-12">
            <h2 className="label border-t border-line pt-5">Direct</h2>
            <ul className="mt-3">
              {contacts.map((c) => (
                <li
                  key={c.label}
                  className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line py-4"
                >
                  <span className="label">{c.label}</span>
                  <a
                    href={`mailto:${c.value}`}
                    className="link-underline text-sm text-chalk-2 hover:text-chalk"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
