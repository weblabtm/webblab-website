import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — WEBBLAB" },
      { name: "description", content: "WEBBLAB Terms of Service. Project engagement and license structures." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero border-b border-border/40">
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <ScrollReveal variant="fade-up">
            <p className="text-xs uppercase tracking-widest text-primary font-medium">Agreement</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl font-display">Terms of Service</h1>
            <p className="mt-3 text-xs text-muted-foreground">Last updated: June 5, 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">1. Terms of Engagement</h2>
              <p className="mt-3">
                By entering into a custom development scope or ordering software engineering sprints from WEBBLAB Studio, you agree to be bound by these Terms of Service. These terms form a legally binding agreement between you (the Client) and WEBBLAB.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">2. Sprints & Project Scoping</h2>
              <p className="mt-3">
                Our custom development work is scheduled in structured bi-weekly Sprints. Each sprint begins with an alignment kickoff and concludes with a demo. Project milestones, features, and database schemas are mapped and explicitly approved before the start of each sprint.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">3. Fees & Invoicing</h2>
              <p className="mt-3">
                Client agrees to pay all fees outlined in the custom scoping document. Sprint retainers are invoiced upfront and must be settled prior to sprint launch. Retainer fees are non-refundable once engineering resources have been allocated.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">4. Intellectual Property (IP) Transfer</h2>
              <p className="mt-3">
                We respect your ideas. Full intellectual property transfer (including custom source code, design assets, schemas, and API documentation) occurs immediately upon full settlement of all outstanding invoices. Prior to full settlement, Client holds a revocable, non-exclusive license to inspect the software.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">5. Warranty & Limitation of Liability</h2>
              <p className="mt-3">
                We weave resilient software according to industry best practices. However, custom software is deployed "as is" without warranties of any kind. WEBBLAB shall not be liable for any lost profits, database downtime, security incidents, or indirect damages arising from third-party server failures.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">6. SLA & Post-Launch Support</h2>
              <p className="mt-3">
                Standard support during active sprints includes Slack/Discord sync access. Post-launch SLA support, edge node maintenance, and priority bug resolution are governed by a separate SLA Agreement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">7. Governing Law</h2>
              <p className="mt-3">
                These terms shall be governed by and construed in accordance with local laws, excluding its conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of our local courts.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
