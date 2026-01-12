import { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-sm text-zinc-600">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
