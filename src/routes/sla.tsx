import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/sla")({
  head: () => ({
    meta: [
      { title: "Service Level Agreement (SLA) — WEBBLAB" },
      { name: "description", content: "WEBBLAB Service Level Agreement (SLA) policy and uptime metrics." },
    ],
  }),
  component: SlaPage,
});

function SlaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero border-b border-border/40">
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <ScrollReveal variant="fade-up">
            <p className="text-xs uppercase tracking-widest text-primary font-medium">Uptime Guarantee</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl font-display">Service Level Agreement</h1>
            <p className="mt-3 text-xs text-muted-foreground">Last updated: June 5, 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">1. Service Level & Target Uptime</h2>
              <p className="mt-3">
                WEBBLAB Studio commits to providing hosting architectures and custom SaaS deployments that meet high-availability performance metrics. Our monthly target service uptime for active enterprise retainers is:
              </p>
              <div className="mt-4 p-5 rounded-lg border border-primary/20 bg-primary/5 text-center font-display text-3xl font-extrabold text-primary">
                99.99% Monthly Uptime
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">2. Support Priority & Response Times</h2>
              <p className="mt-3">
                Support incidents for platforms under SLA active maintenance are categorized by severity. We respond within the following deadlines:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs border border-border/60 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-card border-b border-border">
                      <th className="p-3 font-semibold text-foreground">Severity Level</th>
                      <th className="p-3 font-semibold text-foreground">Incident Description</th>
                      <th className="p-3 font-semibold text-foreground">Response Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="p-3 font-semibold text-foreground">P0 (Critical)</td>
                      <td className="p-3">Core system offline; database lockup; active data leaks.</td>
                      <td className="p-3 text-primary font-semibold">Under 1 hour</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="p-3 font-semibold text-foreground">P1 (High)</td>
                      <td className="p-3">Significant functional outage affecting some operations or integrations.</td>
                      <td className="p-3 text-foreground font-semibold">Under 4 hours</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">P2 (Normal)</td>
                      <td className="p-3">General software questions, small cosmetic layout bugs, minor adjustments.</td>
                      <td className="p-3 text-muted-foreground">Under 24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">3. Service Credits</h2>
              <p className="mt-3">
                In the event that our hosting environment fails to meet the 99.99% uptime target in a calendar month, Client is eligible to request service credits calculated as a percentage of their monthly retainer fee:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>Uptime &lt; 99.99% but &gt; 99.9% : 10% Service Credit</li>
                <li>Uptime &lt; 99.9% but &gt; 99.0% : 25% Service Credit</li>
                <li>Uptime &lt; 99.0% : 50% Service Credit</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">4. SLA Exclusions</h2>
              <p className="mt-3">
                SLA guarantees do not apply to downtime or performance degradations caused by:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>Exclusions listed in cloud partner agreements (AWS, Cloudflare outages)</li>
                <li>Client-provided legacy databases or un-scoped API integrations</li>
                <li>Scheduled maintenance windows (announced at least 48 hours in advance)</li>
                <li>Force Majeure events (acts of god, national internet fiber disruptions)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">5. Monitoring and Verification</h2>
              <p className="mt-3">
                Uptime measurements are tracked using independent edge monitoring services (such as Sentry or specialized API ping nodes). Client can request uptime log copies at any time by contacting:
              </p>
              <p className="mt-2 font-mono text-xs text-primary">
                ops@webblab.com
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
