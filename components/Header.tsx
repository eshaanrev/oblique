"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/work", label: "Work", n: "01" },
  { href: "/studio", label: "Studio", n: "02" },
  { href: "/contact", label: "Contact", n: "03" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [routeAtOpen, setRouteAtOpen] = useState(pathname);

  // navigating closes the mobile drawer — adjusted during render rather than
  // in an effect, so the drawer is never painted open on the new page
  if (routeAtOpen !== pathname) {
    setRouteAtOpen(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    // read the initial position off the next frame rather than during the effect
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] " +
        (scrolled || open
          ? "border-b border-line bg-void/85 py-4 backdrop-blur-xl"
          : "border-b border-transparent py-6")
      }
    >
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Oblique, home">
          <span
            aria-hidden="true"
            className="block h-3.5 w-3.5 shrink-0 bg-amber transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rotate-45"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          />
          <span className="display text-[1.15rem] tracking-[0.02em]">Oblique</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/work" ? pathname.startsWith("/work") : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className="link-underline group flex items-baseline gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-chalk-2 transition-colors hover:text-chalk"
              >
                <span className="label text-faint">{item.n}</span>
                {item.label}
              </Link>
            );
          })}
          <span className="label border-l border-line pl-9">ZRH · BER · SIN</span>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-6 w-7 flex-col justify-center gap-[6px] md:hidden"
        >
          <span
            className={
              "block h-px w-full bg-chalk transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] " +
              (open ? "translate-y-[3.5px] rotate-45" : "")
            }
          />
          <span
            className={
              "block h-px w-full bg-chalk transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] " +
              (open ? "-translate-y-[3.5px] -rotate-45" : "")
            }
          />
        </button>
      </div>

      <div
        className={
          "fixed inset-0 -z-10 bg-void transition-opacity duration-500 md:hidden " +
          (open ? "opacity-100" : "pointer-events-none opacity-0")
        }
      >
        <nav className="flex h-full flex-col justify-center px-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="display flex items-baseline gap-4 border-b border-line py-6 text-5xl"
              style={{
                transitionDelay: `${i * 70}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(16px)",
                transition: "opacity .6s, transform .6s cubic-bezier(0.19,1,0.22,1)",
              }}
            >
              <span className="label text-faint">{item.n}</span>
              {item.label}
            </Link>
          ))}
          <p className="label mt-10">Zürich · Berlin · Singapore</p>
        </nav>
      </div>
    </header>
  );
}
