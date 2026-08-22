const items = [
  "Architecture",
  "Urbanism",
  "Interiors",
  "Adaptive reuse",
  "Facade engineering",
  "Competitions",
  "Research",
  "Masterplanning",
];

/** Slow horizontal band of disciplines — a hairline rule with a pulse in it. */
export default function Ticker() {
  const run = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-5">
      <div className="ticker-track">
        {run.map((item, i) => (
          <span key={i} className="label flex items-center whitespace-nowrap">
            {item}
            <span className="mx-8 text-amber">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
