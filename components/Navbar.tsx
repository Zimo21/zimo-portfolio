import Link from "next/link";
import { site } from "@/lib/site-data";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publication" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="no-underline">
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">{site.name}</span>
            <span className="text-xs text-zinc-600">{site.title}</span>
          </div>
        </Link>

        <nav className="hidden gap-6 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 no-underline hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.links.resume}
          className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm no-underline hover:bg-zinc-50"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
