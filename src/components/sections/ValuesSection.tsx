import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALUES } from "@/data/team";

export function ValuesSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Unser Ziel"
          title="Werte, auf die Sie sich verlassen können"
          description="Was uns als Systemhaus ausmacht – im Umgang mit Kundinnen, Kunden und im eigenen Team."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <h3 className="font-sans text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">{v.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
