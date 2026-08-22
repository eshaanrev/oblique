"use client";

import { useState } from "react";

const budgets = ["Under CHF 1m", "CHF 1m – 5m", "CHF 5m – 20m", "Over CHF 20m", "Not yet known"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend is wired up — swap this for a POST to your own endpoint.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-t border-line pt-10">
        <p className="display text-[clamp(1.5rem,3vw,2.4rem)]">
          Received. <span className="text-amber">Thank you.</span>
        </p>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
          A partner reads every enquiry personally. You will hear back within two
          weeks, whether or not we are able to take the project on.
        </p>
        <button onClick={() => setSent(false)} className="label link-underline mt-10 text-chalk">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border-t border-line pt-10">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Organisation" name="org" />
        <Field label="Site location" name="site" />

        <label className="sm:col-span-2">
          <span className="label">Approximate budget</span>
          <select
            name="budget"
            defaultValue=""
            className="mt-3 w-full appearance-none border-b border-line-2 bg-transparent pb-3 text-[0.95rem] text-chalk outline-none transition-colors focus:border-amber"
          >
            <option value="" disabled className="bg-ink">
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink">
                {b}
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="label">The project</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="The site, what is on it now, and what you need it to become."
            className="mt-3 w-full resize-none border-b border-line-2 bg-transparent pb-3 text-[0.95rem] text-chalk outline-none transition-colors placeholder:text-faint focus:border-amber"
          />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-12 inline-flex items-center gap-4 border border-line-2 px-8 py-4 text-[0.75rem] tracking-[0.16em] uppercase text-chalk transition-colors duration-500 hover:border-amber hover:bg-amber hover:text-void"
      >
        Send enquiry
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label">
        {label}
        {required ? <sup className="ml-1 text-amber">*</sup> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b border-line-2 bg-transparent pb-3 text-[0.95rem] text-chalk outline-none transition-colors focus:border-amber"
      />
    </label>
  );
}
