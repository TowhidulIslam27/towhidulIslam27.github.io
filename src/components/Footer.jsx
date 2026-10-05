import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 py-8 dark:border-ink-800">
      <div className="container-px flex flex-col items-center justify-between gap-2 text-xs text-ink-400 dark:text-ink-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind CSS.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
