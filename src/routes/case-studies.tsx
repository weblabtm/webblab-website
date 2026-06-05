import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Shield, Zap, TrendingUp, Layers } from "lucide-react";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — WEBBLAB" },
      { name: "description", content: "Explore case studies of production SaaS platforms built by WEBBLAB." },
      { property: "og:title", content: "Case Studies — WEBBLAB" },
      { property: "og:description", content: "Detailing how we weave high-performance software." },
    ],
  }),
  component: CaseStudiesPage,
});

const studies = [
  {
    title: "SilkRoad CRM",
    tag: "Enterprise SaaS",
    year: "2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70&auto=format&fit=crop",
    metrics: [
      { value: "sub-2s", label: "Salesforce Sync Latency" },
      { value: "99.997%", label: "Database Read Uptime" },
      { value: "4.8x", label: "Pipeline Load Acceleration" },
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Cloudflare Workers", "Redis"],
    challenge:
      "Enterprise clients struggled with real-time pipeline sync latencies in Salesforce, causing pipeline locks, delayed customer insights, and duplicate billing logs.",
    solution:
      "We engineered a custom edge-caching layer using Cloudflare Workers and PostgreSQL read-replicas. This decoupled heavy read operations from API rate limits and synced data in real-time.",
  },
  {
    title: "AetherFlow API",
    tag: "Developer Tools",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70&auto=format&fit=crop",
    metrics: [
      { value: "8ms", label: "Edge Response Time" },
      { value: "50M+", label: "Processed Requests Daily" },
      { value: "0.0%", label: "Packet Loss Rate" },
    ],
    stack: ["Vite", "Nitro", "Bun", "WebSockets", "Rust Edge Layer"],
    challenge:
      "A fast-growing fintech gateway needed an API system to handle tens of millions of concurrent WebSockets messages with minimal latency overhead.",
    solution:
      "We designed an edge-rendered router using Nitro and Bun, wrapping a lightweight WebSocket hub. High-load cryptographic routines were offloaded to a specialized Rust WASM layer.",
  },
  {
    title: "CryptNet Dashboard",
    tag: "FinTech Security",
    year: "2025",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=70&auto=format&fit=crop",
    metrics: [
      { value: "100%", label: "End-to-End Encryption" },
      { value: "Zod", label: "Zero-Trust Schema Validations" },
      { value: "SOC2", label: "Audit-Log Compliance Ready" },
    ],
    stack: ["Next.js", "Zod", "WebCrypto API", "Tailwind CSS", "Audit Trail SDK"],
    challenge:
      "A compliance auditor platform required strict separation of customer cryptographic logs, ensuring no plain-text logs could be accessed by external database administrators.",
    solution:
      "We built a client-side WebCrypto encryption vault. Data is validated with strict Zod schemas on the edge and encrypted before storing in the central databases.",
  },
];

function CaseStudiesPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-hero">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
          loading="eager"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <ScrollReveal variant="fade-up" duration={600}>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Portfolios</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
              Proven <span className="text-gradient">resilience</span> in production.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Deep dives into how we design, configure, and scale load-bearing software systems for SaaS startups and enterprise platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies list */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-24">
          {studies.map((s, idx) => (
            <ScrollReveal key={s.title} variant="fade-up" delay={idx * 100}>
              <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start border-b border-border/40 pb-16 last:border-0 last:pb-0">
                
                {/* Visual block */}
                <div className="space-y-6">
                  <div className="relative h-[280px] sm:h-[380px] overflow-hidden rounded-xl border border-border/50 shadow-elegant group">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 text-xs font-bold text-primary uppercase tracking-widest bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-border/40">
                      {s.tag}
                    </span>
                    <span className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/80 backdrop-blur px-2.5 py-1 rounded border border-border/40">
                      {s.year}
                    </span>
                  </div>

                  {/* Performance metrics callout row */}
                  <div className="grid grid-cols-3 gap-4">
                    {s.metrics.map((m) => (
                      <div key={m.label} className="border border-border/60 bg-card/25 backdrop-blur p-4 rounded-lg text-center">
                        <span className="block text-xl md:text-2xl font-extrabold text-primary font-display">{m.value}</span>
                        <span className="block text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Narrative content block */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-3xl font-bold font-display group-hover:text-primary transition-colors">{s.title}</h2>
                    
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {s.stack.map((tech) => (
                        <span key={tech} className="text-xs text-primary bg-primary/10 border border-primary/15 px-2.5 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-primary" /> The Challenge
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {s.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Code2 className="h-3.5 w-3.5 text-primary" /> Our Solution
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {s.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow group"
                    >
                      Build a platform like this <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-border/60 bg-card/20 py-20">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl font-bold md:text-4xl">Have a scaling problem to solve?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
              Whether you need to decouple a slow legacy system, deploy global edge nodes, or secure sensitive customer logs, we can weave a solution.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-103"
            >
              Get started with WEBBLAB
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
