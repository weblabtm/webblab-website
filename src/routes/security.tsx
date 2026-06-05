import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security Disclosure — WEBBLAB" },
      { name: "description", content: "WEBBLAB Security Disclosure. Security compliance, audits, and reporting protocols." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero border-b border-border/40">
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <ScrollReveal variant="fade-up">
            <p className="text-xs uppercase tracking-widest text-primary font-medium">Infrastructure</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl font-display">Security Disclosure</h1>
            <p className="mt-3 text-xs text-muted-foreground">Last updated: June 5, 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">1. Security Architecture</h2>
              <p className="mt-3">
                Security is built into our software studio's foundation. We construct client platforms using zero-trust designs and strict backend parameters to safeguard customer identities and database clusters:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>Strict type validations with Zod schemas to block injection vectors</li>
                <li>Secure OAuth 2.0 and Role-Based Access Controls (RBAC) on all APIs</li>
                <li>Encryption at-rest and in-transit (TLS 1.3/HTTPS, AES-256 database volumes)</li>
                <li>Serverless edge sandboxes isolating individual client request scopes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">2. System Auditing</h2>
              <p className="mt-3">
                We leverage continuous integrity checks to ensure software dependencies are clean and free of vulnerabilities. Our projects undergo:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>Automated daily dependency audits checking for known CVEs</li>
                <li>Code audits with strict static analysis tools (ESLint, typescript-eslint)</li>
                <li>Independent security code reviews before releasing to production edge endpoints</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">3. Vulnerability Reporting</h2>
              <p className="mt-3">
                If you believe you have discovered a security issue, code flaw, or server vulnerability in any product or service maintained by WEBBLAB, please contact our security response team immediately. 
              </p>
              <p className="mt-3">
                We appreciate responsible disclosures and ask that you do not publish details of the vulnerability until our response team has had a reasonable timeframe to analyze, address, and verify the patch.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">4. Reporting Channel</h2>
              <p className="mt-3">
                To report a vulnerability, please email our response group. For highly sensitive disclosures, please encrypt your payload using our public PGP key.
              </p>
              <p className="mt-2 font-mono text-xs text-primary">
                security@webblab.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">5. Response Timelines</h2>
              <p className="mt-3">
                Upon receipt of a vulnerability disclosure report:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>We acknowledge receipt of the report within 24 business hours</li>
                <li>We verify the vulnerability and schedule a patch window within 72 hours</li>
                <li>We update the reporter on status changes and public releases</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
