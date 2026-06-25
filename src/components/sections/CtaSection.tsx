import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";
import { SITE } from "@/data/site";

export function CtaSection({
  title = "Schnelles & störungsfreies Arbeiten – für Sie und Ihr Team, jederzeit",
  subtitle = "Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie wir Ihre IT sicherer, schneller und effizienter machen.",
  primaryLabel = "Jetzt Erstgespräch vereinbaren",
  primaryHref = "/kontakt",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <Container className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand to-brand-600 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 clip-hex bg-white/10" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] text-white">{title}</h2>
          <p className="mt-5 text-lg text-white/80">{subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="white" size="lg" withArrow>
              {primaryLabel}
            </Button>
            <a
              href={`tel:${SITE.primaryPhoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              <Icon name="phone" className="h-5 w-5" />
              {SITE.primaryPhone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
