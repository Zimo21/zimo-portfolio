import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ProjectCard } from "@/components/ProjectCard";
import { site, projects, experience, publication } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm text-zinc-600">{site.location}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-3 text-lg text-zinc-700">{site.title}</p>
              <p className="mt-5 max-w-xl text-sm text-zinc-600">
                {site.hero.tagline}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                {site.hero.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white no-underline hover:bg-zinc-800"
                >
                  View Projects
                </Link>
                <Link
                  href={site.links.resume}
                  className="rounded-full border border-zinc-200 px-4 py-2 text-sm no-underline hover:bg-zinc-50"
                >
                  Download Resume
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-zinc-200 px-4 py-2 text-sm no-underline hover:bg-zinc-50"
                >
                  Contact
                </Link>
              </div>
            </div>

            <Card>
              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900">
                    Highlights
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600">
                    Quick snapshots of what I’ve been working on.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500">Recent focus</p>
                    <p className="mt-1 text-sm font-medium">
                      EEG seizure prediction + CIOPC optimal preictal window selection
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500">Publication</p>
                    <p className="mt-1 text-sm font-medium">
                      {publication.status}: {publication.venue} ({publication.year})
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      {publication.title}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500">Stack</p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Python · Java · SQL · Data Viz · ML evaluation
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Section
        title="Featured projects"
        subtitle="A few selected projects (see the Projects page for details)."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-6">
          <Link className="text-sm no-underline hover:underline" href="/projects">
            View all projects →
          </Link>
        </div>
      </Section>

      <Section
        title="Experience"
        subtitle="Internships and research experience."
      >
        <div className="grid gap-4">
          {experience.slice(0, 2).map((e) => (
            <Card key={e.org + e.role}>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{e.role}</h3>
                  <span className="text-xs text-zinc-500">{e.time}</span>
                </div>
                <p className="text-sm text-zinc-600">{e.org}</p>
                <ul className="ml-4 list-disc text-sm text-zinc-700">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Link className="text-sm no-underline hover:underline" href="/experience">
            See full experience →
          </Link>
        </div>
      </Section>
    </>
  );
}
