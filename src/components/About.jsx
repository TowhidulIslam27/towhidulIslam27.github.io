import { about, stats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="container-px py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            About
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-2 md:self-start">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-200 bg-ink-50/50 p-5 dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="text-3xl font-semibold text-ink-900 dark:text-white">{s.value}</div>
              <div className="mt-1 text-sm text-ink-500 dark:text-ink-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
