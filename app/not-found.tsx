import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src="/images/aperture-hall.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/80" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1680px] flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">
        <p className="label mb-6">Error 404</p>
        <h1 className="display text-[clamp(2.6rem,8vw,7rem)]">
          Nothing has been
          <br />
          <span className="text-amber">built here</span>
        </h1>
        <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-muted">
          The page you asked for does not exist. The work index is the best place
          to start again.
        </p>
        <div className="mt-10 flex gap-10">
          <Link href="/" className="label link-underline text-chalk">
            Home
          </Link>
          <Link href="/work" className="label link-underline text-chalk">
            Selected work
          </Link>
        </div>
      </div>
    </div>
  );
}
