import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { experience } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <Section title="Experience" subtitle="Internships, research, and relevant roles.">
      <div className="grid gap-4">
        {experience.map((e) => (
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
  );
}
