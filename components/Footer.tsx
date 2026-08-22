import Link from "next/link";
import Reveal from "./Reveal";
import { credits } from "@/lib/projects";

const columns = [
  {
    title: "Navigate",
    items: [
      { label: "Selected work", href: "/work" },
      { label: "The studio", href: "/studio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Offices",
    items: [
      { label: "Limmatstrasse 264, Zürich", href: "/contact" },
      { label: "Chausseestraße 18, Berlin", href: "/contact" },
      { label: "12 Marina Link, Singapore", href: "/contact" },
    ],
  },
  {
    title: "Elsewhere",
    items: [
      { label: "Instagram", href: "/contact" },
      { label: "LinkedIn", href: "/contact" },
      { label: "Divisare", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <p className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.86]">
                Oblique
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                Architecture, urbanism and research. Founded 2011. Sixty-four
                people across three offices.
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="label mb-6">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="link-underline text-sm text-chalk-2 transition-colors hover:text-chalk"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="hair mt-20 mb-6" />
        <div className="label flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <span>© 2026 Oblique AG · Fictional practice, demonstration site</span>
          <span className="max-w-xl lg:text-right">
            Photography: {credits.join(" · ")} — via Unsplash
          </span>
        </div>
      </div>
    </footer>
  );
}
