"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** px from the bottom of the viewport before the element counts as visible */
  offset?: number;
  as?: "div" | "section" | "li" | "figure" | "span";
};

/** Fades and lifts its children in once, the first time they scroll into view. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  offset = -80,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: `0px 0px ${offset}px 0px` },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [offset]);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`fade-up ${className}`}
    >
      {children}
    </Component>
  );
}
