import Link from "next/link";
import { Project } from "@/lib/site-data";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold">{p.title}</h3>
            {p.period ? (
              <span className="shrink-0 text-xs text-zinc-500">{p.period}</span>
            ) : null}
          </div>
          <p className="text-sm text-zinc-600">{p.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <ul className="ml-4 list-disc text-sm text-zinc-700">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        {p.links?.length ? (
          <div className="flex flex-wrap gap-3 text-sm">
            {p.links.map((l) =>
              l.href.startsWith("/") ? (
                <Link
                  key={l.href}
                  href={l.href}
                  className="no-underline hover:underline"
                >
                  {l.label} →
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="no-underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} →
                </a>
              )
            )}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
