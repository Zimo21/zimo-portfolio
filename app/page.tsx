import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ProjectCard } from "@/components/ProjectCard";
import { site, projects, experience, publication, education } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-600">{site.location}</p>

            <h1 className="mt-3 text-4xl font-semineold tracking-tight sm:text-5xl">
              {site.name}
            </h1>

            {/* ✅ education 一行 */}
            {"educationLine" in site && (site as any).educationLine ? (
              <p className="mt-3 text-sm text-zinc-600">
                {(site as any).educationLine}
              </p>
            ) : null}

            <p className="mt-3 text-lg text-zinc-700">{site.title}</p>

            <p className="mt-5 text-sm text-zinc-600">{site.hero.tagline}</p>

            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
              {site.hero.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#projects"
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
                href="/#contact"
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm no-underline hover:bg-zinc-50"
              >
                Contact
              </Link>
            </div> */}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24">
        <Section title="Education" subtitle="">
          <div className="grid gap-4">
            {education.map((e) => (
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
        </Section>
      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24">
        <Section title="Experience" subtitle="">
          <div className="grid gap-4">
            {experience.map((e) => (
              <Card key={e.org + e.role}>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{e.role}</h3>
                    <span className="text-xs text-zinc-500">{e.time}</span>
                  </div>

                  <p className="text-sm text-zinc-600">{e.org}</p>


                  <div className="flex flex-wrap gap-2">
                    {(e.tags ?? []).map((b) => (
                      <Badge key={b}>{b}</Badge>
                    ))}
                  </div>

                  <ul className="ml-4 list-disc text-sm text-zinc-700">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* ✅ Links / Details */}
                  {e.links?.length ? (
                    <div className="mt-1 flex flex-wrap gap-3">
                      {e.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 underline underline-offset-4"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </section>


      {/* PROJECTS (full) */}
      <section id="projects" className="scroll-mt-24">
        <Section
          title="Projects"
          subtitle="A complete list of projects from my resume and research."
        >
          <div className="grid gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </Section>
      </section>



      {/* PUBLICATION */}
      {/* <section id="publication" className="scroll-mt-24">
        <Section title="Publication" subtitle="Academic work and writing.">
          <Card>
            <p className="text-xs text-zinc-500">{publication.status}</p>
            <h3 className="mt-2 text-base font-semibold">{publication.title}</h3>
            <p className="mt-1 text-sm text-zinc-700">
              {publication.authors.join(", ")} · {publication.venue} · {publication.year}
            </p>
          </Card>
        </Section>
      </section> */}

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <Section title="Contact" subtitle="Feel free to reach out.">
          <div className="grid gap-4">
            <Card>
              {/* <h3 className="text-base font-semi">Email</h3> 
              <p className="mt-2 text-sm text-zinc-600">{site.email}</p>
              <h3 className="text-base font-semi">Phone</h3>
              <p className="mt-2 text-sm text-zinc-600">{site.phone}</p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a
                  className="no-underline hover:underline"
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
                <a
                  className="no-underline hover:underline"
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div> */}
              <div className="space-y-3 text-sm">
                {/* Email */}
                <div className="flex gap-2">
                  <span className="font-medium text-zinc-900">Email:</span>
                  <a
                    href="mailto:zzzzimo.zhang@mail.utoronto.ca"
                    className="text-zinc-600 hover:underline"
                  >
                    {site.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex gap-2">
                  <span className="font-medium text-zinc-900">Phone:</span>
                  <a
                    href="tel:+12369654612"
                    className="text-zinc-600 hover:underline"
                  >
                    {site.phone}
                  </a>
                </div>

                {/* Links */}
                <div className="pt-1 flex flex-col gap-1">
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    className="text-zinc-700 hover:text-zinc-900"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href={site.links.github}
                    target="_blank"
                    className="text-zinc-700 hover:text-zinc-900"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

            </Card>
          </div>
        </Section>
      </section>
    </>
  );
}
