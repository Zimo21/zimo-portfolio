import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { site } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Best way to reach me is email. Feel free to connect on LinkedIn/GitHub."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-base font-semibold">Email</h3>
          <p className="mt-2 text-sm text-zinc-600">{site.email}</p>
          <a
            className="mt-4 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm text-white no-underline hover:bg-zinc-800"
            href={`mailto:${site.email}`}
          >
            Send an email
          </a>
        </Card>

        <Card>
          <h3 className="text-base font-semibold">Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a className="no-underline hover:underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn →
            </a>
            <a className="no-underline hover:underline" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub →
            </a>
            <Link className="no-underline hover:underline" href={site.links.resume}>
              Resume PDF →
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Tip: Update <code>lib/site-data.ts</code> with your real GitHub/LinkedIn links.
          </p>
        </Card>
      </div>
    </Section>
  );
}
