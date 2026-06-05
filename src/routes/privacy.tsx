import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — WEBBLAB" },
      { name: "description", content: "WEBBLAB Privacy Policy. Learn how we handle customer data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero border-b border-border/40">
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <ScrollReveal variant="fade-up">
            <p className="text-xs uppercase tracking-widest text-primary font-medium">Compliance & Trust</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl font-display">Privacy Policy</h1>
            <p className="mt-3 text-xs text-muted-foreground">Last updated: June 5, 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">1. Scope of Policy</h2>
              <p className="mt-3">
                This Privacy Policy applies to the services, products, applications, and websites operated by WEBBLAB Studio. We are committed to protecting your personal information and your right to privacy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">2. Information We Collect</h2>
              <p className="mt-3">
                We collect personal information that you voluntarily provide to us when you fill out contact forms, subscribe to our developer newsletter, or enter into client agreements. This may include:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>Full name and corporate title</li>
                <li>Company name and email address</li>
                <li>Project descriptions, scopes, and budget ranges</li>
                <li>IP address and anonymous analytical cookies (when enabled)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">3. How We Use Your Data</h2>
              <p className="mt-3">
                We process your personal information for purposes based on legitimate business interests, the fulfillment of our services, compliance with legal obligations, and client intake. Specifically, we use it to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
                <li>Facilitate client scoping sessions and pricing quotes</li>
                <li>Deliver project status updates, deliverables, and billing communications</li>
                <li>Send technical newsletters or open-source software release notes (if subscribed)</li>
                <li>Protect our networks and API servers against malicious requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">4. Data Encryption & Security</h2>
              <p className="mt-3">
                Security is our default posture. All personal data is encrypted both in transit (using TLS 1.3) and at rest (using AES-256). Cryptographic logs and credentials are isolated on secure HSM nodes and are never written to standard plaintext server logs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">5. Sharing of Personal Data</h2>
              <p className="mt-3">
                We do not sell, rent, or trade your personal data. We only share information with trusted third-party cloud sub-processors (such as Stripe, AWS, and Cloudflare) to the minimum extent necessary to process invoices, render website assets, or host client code environments.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">6. Your Data Rights</h2>
              <p className="mt-3">
                Under the GDPR and CCPA, you have the right to request access to your data, request deletion of your records, object to marketing lists, or port your database info. To exercise these rights, submit a request to our compliance team.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground font-display border-b border-border/40 pb-2">7. Contact Compliance</h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, your rights, or data handling protocols, please reach out to us at:
              </p>
              <p className="mt-2 font-mono text-xs text-primary">
                compliance@webblab.com
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
