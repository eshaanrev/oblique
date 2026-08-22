"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  /** CSS aspect-ratio, e.g. "4 / 5" */
  ratio?: string;
  focus?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  hover?: boolean;
  delay?: number;
  /** skip the wipe — for hero images that are already on screen at load */
  instant?: boolean;
};

/**
 * A photograph on a dark plate. The plate wipes downward off the image the
 * first time the frame enters the viewport; the image itself never fades, so
 * the reveal reads as a shutter rather than a cross-dissolve.
 */
export default function Photo({
  src,
  alt,
  caption,
  ratio = "4 / 3",
  focus = "center",
  className = "",
  sizes = "(max-width: 768px) 100vw, 60vw",
  priority = false,
  hover = false,
  delay = 0,
  instant = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(instant);

  useEffect(() => {
    if (instant) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -50px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [instant]);

  return (
    <figure className={className}>
      <div
        ref={ref}
        data-shown={shown}
        style={{ aspectRatio: ratio }}
        className="plate w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition: focus }}
          className={
            hover
              ? "transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05]"
              : ""
          }
        />
        {instant ? null : <div className="wipe" style={{ transitionDelay: `${delay}ms` }} />}
      </div>
      {caption ? <figcaption className="label mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
