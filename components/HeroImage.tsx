"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  focus?: string;
};

/**
 * Full-bleed hero photograph.
 *
 * The settle animation is deliberately withheld until the image reports
 * loaded. Promoting this element to its own compositor layer while the
 * photograph is still decoding gets the layer rasterised empty, and nothing
 * invalidates it afterwards — the hero then stays black until the first
 * scroll. Animating only after load means the layer is promoted with real
 * pixels in it, and if onLoad never fires the picture simply sits there.
 */
export default function HeroImage({ src, alt, focus = "center" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={"absolute inset-0" + (loaded ? " settle" : "")}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: focus }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
