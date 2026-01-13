"use client";
import Link from "next/link";
import { site } from "@/lib/site-data";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

// const nav = [
//   { href: "/projects", label: "Projects" },
//   { href: "/experience", label: "Experience" },
//   { href: "/publications", label: "Publication" },
//   { href: "/contact", label: "Contact" },
// ];

const items = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <Image
              src={site.links.profile}
              alt="Zimo Zhang profile photo"
              width={36}
              height={36}
              className="cursor-pointer rounded-full border border-zinc-200"
              onClick={() => window.open(site.links.profile, "_blank")}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">{site.name}</span>
              <span className="text-xs text-zinc-600">{site.title}</span>
            </div>
          </div>
        </Link>
        {/* 
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
        </nav> */}

          {items.map(i => (
            <button key={i.id} onClick={() => scrollTo(i.id)} className="hidden gap-6 sm:flex">
              {i.label}
            </button>
          ))}
        <Link
          href={site.links.resume}
          className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm no-underline hover:bg-zinc-50"
        >
          Download Resume
        </Link>
      </div>
    </header>
  );
}


// function scrollToId(id: string) {
//   document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// }
// export default function Navbar() {
//   const [activeId, setActiveId] = useState(items[0].id);
//   const ids = useMemo(() => items.map((i) => i.id), []);

//   useEffect(() => {
//     const els = ids
//       .map((id) => document.getElementById(id))
//       .filter(Boolean) as HTMLElement[];

//     if (!els.length) return;

//     const io = new IntersectionObserver(
//       (entries) => {
//         const top = entries
//           .filter((e) => e.isIntersecting)
//           .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
//         if (top?.target?.id) setActiveId(top.target.id);
//       },
//       { threshold: [0.15, 0.25, 0.4], rootMargin: "-15% 0px -70% 0px" }
//     );

//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, [ids]);

//   return (
//     <>
//       {/* Desktop: left sidebar */}
//       <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-50 md:flex md:w-56 md:flex-col md:border-r md:bg-white md:px-6 md:py-8">
//         <div className="flex items-center gap-3">
//           <Image
//             src={site.links.profile}
//             alt="Zimo Zhang profile photo"
//             width={36}
//             height={36}
//             className="cursor-pointer rounded-full border border-zinc-200"
//             onClick={() => window.open(site.links.profile, "_blank")}
//           />
//         </div>
//         <div className="mb-8 text-lg font-semibold">Zimo Zhang</div>
//         <nav className="flex flex-col gap-3">
//           {items.map((i) => (
//             <button
//               key={i.id}
//               onClick={() => scrollToId(i.id)}
//               className="text-left text-sm text-zinc-700 hover:text-zinc-900"
//             >
//               {i.label}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Mobile: top navbar */}
//       <header className="sticky top-0 z-50 flex items-center gap-4 border-b bg-white px-4 py-3 md:hidden">
//         {items.map((i) => (
//           <button
//             key={i.id}
//             onClick={() => scrollToId(i.id)}
//             className="text-sm text-zinc-700"
//           >
//             {i.label}
//           </button>
//         ))}
//       </header>
//     </>
//   );
// }
