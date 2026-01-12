import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { publication } from "@/lib/site-data";

export default function PublicationsPage() {
  return (
    <Section title="Publication" subtitle="Academic work and writing.">
      <Card>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-zinc-500">{publication.status}</p>
          <h3 className="text-base font-semibold">{publication.title}</h3>
          <p className="text-sm text-zinc-700">
            {publication.authors.join(", ")} · {publication.venue} · {publication.year}
          </p>
          <p className="text-sm text-zinc-600">
            Add a PDF / DOI / arXiv link when available.
          </p>
        </div>
      </Card>
    </Section>
  );
}
