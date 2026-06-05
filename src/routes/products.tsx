import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — WEBBLAB" },
      { name: "description", content: "SaaS products and platforms crafted by WEBBLAB." },
      { property: "og:title", content: "Products — WEBBLAB" },
      { property: "og:description", content: "Explore WEBBLAB's SaaS products." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    name: "Loom OS",
    tag: "Operations platform",
    desc: "Unified workspace for ops teams — projects, automations, and reporting in one place.",
    status: "In production",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=70&auto=format&fit=crop",
  },
  {
    name: "Strand Analytics",
    tag: "Product analytics",
    desc: "Lightweight, privacy-first analytics for SaaS teams that need clarity without bloat.",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70&auto=format&fit=crop",
  },
  {
    name: "Webbnet",
    tag: "Integration hub",
    desc: "Connect any API to any workflow with a visual orchestration canvas.",
    status: "Early access",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=70&auto=format&fit=crop",
  },
  {
    name: "Silk Auth",
    tag: "Identity",
    desc: "Drop-in authentication and role-based access designed for modern SaaS.",
    status: "Coming soon",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=70&auto=format&fit=crop",
  },
];

function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        {/* Background Image Overlay */}
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
          loading="eager"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <ScrollReveal variant="fade-up" duration={600}>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Products</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
              SaaS, spun from <span className="text-gradient">the lab</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A growing constellation of products born inside WEBBLAB — each one solving a problem we
              lived ourselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, idx) => (
            <ScrollReveal key={p.name} variant="fade-up" delay={idx * 100} className="h-full flex flex-col">
              <article
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur transition-all duration-300 hover:border-primary/60 hover:shadow-glow w-full h-full"
              >
                {/* Product cover image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-primary uppercase tracking-wider bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-border/40">
                    {p.tag}
                  </span>
                  <span className="absolute top-3 right-3 rounded bg-background/85 backdrop-blur px-2.5 py-0.5 text-[10px] text-muted-foreground border border-border/40">
                    {p.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <SpiderWeb className="absolute -right-24 -bottom-24 h-56 w-56 opacity-0 transition-opacity group-hover:opacity-30 pointer-events-none" />
                    <h2 className="text-2.5xl font-bold group-hover:text-primary transition-colors">{p.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground group-hover:translate-x-0.5 transition-all"
                  >
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Customer Impact & Performance Stats (Section 3) */}
      <section className="border-t border-border/60 bg-card/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Efficiency</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Performance in numbers</h2>
              <p className="mt-4 text-muted-foreground">
                We engineer digital tools that carry weight. The metrics of our deployed client platforms.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((m, idx) => (
              <ScrollReveal key={m.label} variant="fade-up" delay={idx * 80} className="h-full flex">
                <div className="border border-border bg-card/45 p-6 rounded-xl hover:border-primary/50 transition-all w-full h-full flex flex-col justify-between">
                  <div>
                    <span className="text-4xl font-extrabold text-primary font-display block">{m.value}</span>
                    <h3 className="text-sm font-bold mt-2">{m.label}</h3>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partner Badges (Section 4) */}
      <section className="border-t border-border/60 py-24 bg-card/5">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Ecosystem</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Seamless integrations</h2>
              <p className="mt-4 text-muted-foreground">
                All WEBBLAB products connect out-of-the-box with the standard tools your engineering team already relies on.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {partners.map((p, idx) => {
              const Icon = partnerLogos[p.name];
              return (
                <ScrollReveal key={p.name} variant="fade-up" delay={idx * 60} className="h-full flex">
                  <div className="group border border-border/60 bg-card/30 backdrop-blur rounded-lg p-5 hover:border-primary/50 hover:shadow-glow transition-all duration-300 text-center flex flex-col items-center justify-between w-full h-full">
                    <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-lg bg-background/50 border border-border/40 text-muted-foreground group-hover:text-primary group-hover:border-primary/45 group-hover:shadow-[0_0_15px_oklch(0.63_0.22_25_/_20%)] transition-all duration-300">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-gradient block">{p.name}</h3>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1.5 block">{p.category}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// Brand SVG components for integration partners
const StripeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.922 9.422c0-.987-.738-1.545-1.996-1.545-1.282 0-2.617.408-3.486.914l-.84-3.22c1.077-.48 2.698-.823 4.542-.823 3.655 0 5.922 1.697 5.922 4.793 0 4.673-6.26 3.86-6.26 5.86 0 .96.84 1.347 2.057 1.347 1.503 0 2.87-.492 3.738-1.018l.842 3.193c-1.12.63-2.982 1.12-4.838 1.12-3.708 0-6.04-1.748-6.04-4.816 0-4.795 6.36-3.926 6.36-6.02z"/>
  </svg>
);

const CloudflareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.16 11.23a4.75 4.75 0 0 0-8.93-1.66 3.5 3.5 0 0 0-4.04 4.54 3.75 3.75 0 0 0 .54 7.22h12.5a4.25 4.25 0 0 0-.07-8.63z" />
  </svg>
);

const AWSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.5 14.3c-.6-.4-1.4-.4-1.8.1-.8 1-2.1 1.6-3.7 1.6-2.5 0-4.5-1.5-4.5-4s2-4 4.5-4c1.6 0 2.9.6 3.7 1.6.4.5 1.2.5 1.8.1.5-.4.6-1.1.2-1.6C16.3 6.4 14.3 5.5 12 5.5 8.1 5.5 5 8.4 5 12s3.1 6.5 7 6.5c2.3 0 4.3-.9 5.7-2.6.4-.5.3-1.2-.2-1.6zM6 21c4.5 3.5 11.5 4 16 0 .5-.4.5-1.2 0-1.6s-1.2-.4-1.6 0c-3.5 3-9 2.5-12.8 0-.4-.4-1.2-.4-1.6 0s-.4 1.2 0 1.6z" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const SlackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.522-2.522V8.824a2.528 2.528 0 0 1 2.522-2.52h5.043zm10.135 3.781a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.781 10.135a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.52h-5.043z"/>
  </svg>
);

const Auth0Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.9 11.5L12 1.5 2.1 11.5c-.8.8-.8 2 0 2.8l9.9 10 9.9-10c.8-.8.8-2 0-2.8zM12 4.3l7.2 7.2h-14.4L12 20.7l-7.2-7.2z" />
  </svg>
);

const SentryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8l1.46 1.46A3.979 3.979 0 0 0 8 14c0 2.21 1.79 4 4 4a3.99 3.99 0 0 0 2.34-.76l1.46 1.46c-.83.45-1.79.7-2.8.7zm5.3-3.2l-1.46-1.46A3.99 3.99 0 0 0 16 14c0-2.21-1.79-4-4-4a3.99 3.99 0 0 0-2.34.76L8.2 9.3c.83-.45 1.79-.7 2.8-.7 3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8z" />
  </svg>
);

const PostgreSQLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 12c.5 0 .9-.2 1.2-.6.7-.8 1-2.1 1-3.6 0-4-3.1-6-7.2-6H9.5C6.5 1.8 4 3.8 4 7.2v4.3c0 2.5 1.5 4.3 3.5 5v3.1c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5v-3.1h3.5c4.1 0 7.2-2 7.2-6H19zm-3-4.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm-6.5.6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
  </svg>
);

const partnerLogos: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Stripe: StripeIcon,
  Cloudflare: CloudflareIcon,
  AWS: AWSIcon,
  GitHub: GitHubIcon,
  Slack: SlackIcon,
  Auth0: Auth0Icon,
  Sentry: SentryIcon,
  PostgreSQL: PostgreSQLIcon,
};

const impactMetrics = [
  { value: "99.99%", label: "System Uptime", desc: "Guaranteed edge-availability across all deployed client nodes." },
  { value: "10M+", label: "Daily API Transactions", desc: "Processed with sub-10ms latencies under peak load conditions." },
  { value: "40%", label: "Operational Savings", desc: "Average cost reduction achieved via automated cloud orchestration." },
  { value: "1.2s", label: "Average Page Load Time", desc: "Rendered globally using lightweight hydration architectures." },
];

const partners = [
  { name: "Stripe", category: "Billing & Subscriptions" },
  { name: "Cloudflare", category: "DNS & Edge Infrastructure" },
  { name: "AWS", category: "Serverless & Database Clusters" },
  { name: "GitHub", category: "CI/CD & Source Sync" },
  { name: "Slack", category: "Ops Notifications & Webhooks" },
  { name: "Auth0", category: "OAuth Enterprise Identity" },
  { name: "Sentry", category: "Observability & Error Audits" },
  { name: "PostgreSQL", category: "Relational Database Sync" },
];
