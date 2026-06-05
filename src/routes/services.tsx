import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cloud, Code2, Workflow, Shield, Zap, Sparkles, ArrowRight } from "lucide-react";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WEBBLAB" },
      {
        name: "description",
        content:
          "SaaS product development, custom web apps, automation, and product design from WEBBLAB.",
      },
      { property: "og:title", content: "Services — WEBBLAB" },
      {
        property: "og:description",
        content: "What we build: SaaS, custom apps, automation, design.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cloud,
    title: "SaaS Product Development",
    body: "Multi-tenant SaaS platforms, billing, user management — built to scale from day one.",
    points: ["Architecture & infrastructure", "Subscription & billing", "Admin & analytics"],
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    body: "Tailored web apps for operations, customer portals, and internal tools.",
    points: ["Type-safe modern stack", "Responsive on every device", "Accessible by default"],
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    body: "Connect the tools you already use — automate the work that slows you down.",
    points: ["API integrations", "Workflow automation", "Data pipelines"],
  },
  {
    icon: Sparkles,
    title: "Product & UX Design",
    body: "Brand-aware product design that makes complex software feel effortless.",
    points: ["Design systems", "Prototyping", "Usability testing"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    body: "Authentication, role-based access, audit trails, and best-practice hardening.",
    points: ["Auth & RBAC", "Security reviews", "Data protection"],
  },
  {
    icon: Zap,
    title: "Performance & Scale",
    body: "Edge rendering, caching, and observability so your product stays fast as it grows.",
    points: ["Edge & CDN", "Monitoring", "Load optimisation"],
  },
];

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        {/* Background Image Overlay */}
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
          loading="eager"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <ScrollReveal variant="fade-up" duration={600}>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Services</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
              Every <span className="text-gradient">strand</span> built to carry weight.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From the first sketch to scaled production, we partner with you on the entire software
              lifecycle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <ScrollReveal key={s.title} variant="fade-up" delay={idx * 80} className="h-full flex">
              <article
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-7 transition-all hover:border-primary/60 hover:shadow-elegant w-full h-full"
              >
                <SpiderWeb className="absolute -right-20 -top-20 h-48 w-48 opacity-0 transition-opacity group-hover:opacity-40" />
                <s.icon className="h-8 w-8 text-primary" />
                <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Quality standards section with visual asset */}
      <section className="border-t border-border/60 bg-card/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollReveal variant="fade-up">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-medium">Our standard</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Engineered for durability.</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We believe that software should be engineered, not just written. We build clean abstractions, establish type-safe patterns, and document all system APIs.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Every application we release goes through strict unit checking, performance load optimization, and secure dependency audits to guarantee continuous uptime.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" delay={150} className="h-full">
              <div className="relative h-[340px] overflow-hidden rounded-xl border border-border/40 shadow-elegant group">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=70&auto=format&fit=crop"
                  alt="Engineering flow"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Collaboration Pricing Models (Section 4) */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border/60">
        <ScrollReveal variant="fade-up">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Collaboration</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engagement models</h2>
            <p className="mt-4 text-muted-foreground">
              Clear structures. Zero surprises. Select the path that matches your product milestone.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={plan.name} variant="fade-up" delay={idx * 100} className="h-full flex">
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-8 backdrop-blur w-full h-full flex flex-col justify-between hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-gradient">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-display">{plan.price}</span>
                    <span className="text-xs text-muted-foreground font-medium">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
                  
                  <ul className="mt-6 space-y-3.5 border-t border-border/40 pt-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="block w-full text-center rounded-md bg-secondary/80 border border-border/80 hover:border-primary/50 hover:bg-card px-4 py-2.5 text-sm font-medium transition-all group-hover:scale-[1.02]"
                  >
                    Start conversation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ Accordion (Section 5) */}
      <section className="mx-auto max-w-4xl px-6 py-24 border-t border-border/60 bg-card/5">
        <ScrollReveal variant="fade-up">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Common questions</h2>
            <p className="mt-4 text-muted-foreground">
              Clear coordinates about our development cycle, timelines, and rights.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, faqIdx) => (
            <ScrollReveal key={faq.question} variant="fade-up" delay={faqIdx * 80}>
              <div className="border border-border bg-card/30 rounded-xl overflow-hidden backdrop-blur">
                <button
                  onClick={() => setOpenFaq(openFaq === faqIdx ? null : faqIdx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-base">{faq.question}</span>
                  <span className="text-xl font-display text-primary transition-transform duration-300">
                    {openFaq === faqIdx ? "—" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === faqIdx ? "max-h-[300px] border-t border-border/40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="p-6 text-sm text-muted-foreground leading-relaxed bg-card/10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <ScrollReveal variant="fade-up">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center w-full">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Ready to build something durable?</h2>
              <p className="mt-2 text-muted-foreground">
                Tell us about your project — we reply within one business day.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

const pricingPlans = [
  {
    name: "Dedicated Sprint",
    price: "$15k",
    period: "per 2-week block",
    desc: "Fast, highly focused engineering sprint. Best for shipping specific features or scoping MVPs.",
    features: [
      "1 Senior Engineer & 1 Product Designer",
      "Bi-weekly alignment & demo calls",
      "Full Slack/Discord sync access",
      "Clean, production-ready source code",
    ],
  },
  {
    name: "SaaS Studio Retainer",
    price: "$28k",
    period: "per month (min. 3 months)",
    desc: "Continuous software development and product design to iterate your SaaS continuously.",
    features: [
      "Dedicated UI/UX Design & Frontend support",
      "Backend & infrastructure engineering",
      "Weekly status calls & project scoping",
      "IP ownership and clean documentation",
    ],
  },
  {
    name: "Custom Integration Squad",
    price: "Custom",
    period: "based on project scope",
    desc: "Deep enterprise architectures, custom APIs, database schema migration, and security audits.",
    features: [
      "Dedicated Solutions Architect & Security lead",
      "Custom API gateways & low-latency edge nodes",
      "Penetration testing & compliance reviews",
      "Continuous 24/7 priority support retainer",
    ],
  },
];

const faqs = [
  {
    question: "Who owns the intellectual property (IP)?",
    answer: "You do. We sign a clear IP transfer agreement from day one. Once invoices are settled, all source code, design specs, asset rights, and database schemas belong entirely to you.",
  },
  {
    question: "What technology stack do you use?",
    answer: "We specialize in modern, fast, type-safe tools. Our preferred stack is React 19, TypeScript, TanStack (Router/Query), Bun, Vite, Nitro APIs, and Cloudflare/AWS edge deployments.",
  },
  {
    question: "How long does a typical SaaS product build take?",
    answer: "A production-grade SaaS MVP takes between 6 to 12 weeks. We split work into bi-weekly sprints so you always see working software and can guide feature adjustments dynamically.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. We offer maintenance retainers for continuous security audits, infrastructure scaling, uptime monitoring, and small feature refinements as your client base expands.",
  },
];
