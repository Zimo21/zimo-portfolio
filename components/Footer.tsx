import Link from "next/link";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link className="no-underline hover:underline" href={site.links.resume}>
              Resume
            </Link>
            <a className="no-underline hover:underline" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="no-underline hover:underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
