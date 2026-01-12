import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <Section
        title="Projects"
        subtitle="Selected work in ML, data, and software engineering."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      <Section
        title="Notes"
        subtitle="Anchor sections you can expand later with screenshots, repos, and deeper technical write-ups."
      >
        <div className="prose max-w-none">
          <h3 id="seizure">Seizure prediction + CIOPC</h3>
          <p>
            Add: dataset links (if public), your training setup, metrics, and a small figure showing
            prediction probability curves and how CIOPC selects the best window.
          </p>

          <h3 id="travel">Travel Manager Application</h3>
          <p>
            Add: ER diagram screenshot, key SQL queries, and UI screenshots.
          </p>

          <h3 id="viz">Smoking & Cholesterol visualization</h3>
          <p>
            Add: interactive chart embeds (Altair screenshots) and key findings.
          </p>
        </div>
      </Section>
    </>
  );
}
