import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Code2,
  Cloud,
  Shield,
  Zap,
  Workflow,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Layers,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Activity,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WEBBLAB — Software woven with precision" },
      {
        name: "description",
        content:
          "WEBBLAB designs and builds resilient SaaS products and custom software for ambitious teams.",
      },
      { property: "og:title", content: "WEBBLAB — Software woven with precision" },
      {
        property: "og:description",
        content: "We design and build SaaS products for ambitious teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const slides = heroSlides;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [settledSelected, setSettledSelected] = useState(0);
  const [step, setStep] = useState(0);
  const prevSelectedRef = useRef(0);
  const selectTimeoutRef = useRef<any>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const len = slides.length;
    const initialSelected = emblaApi.selectedScrollSnap();
    prevSelectedRef.current = initialSelected;
    setSelected(initialSelected);
    setSettledSelected(initialSelected);

    const onSelect = () => {
      const newSelected = emblaApi.selectedScrollSnap();
      const prevSelected = prevSelectedRef.current;
      setSelected(newSelected);
      setSettledSelected(-1);

      if (selectTimeoutRef.current) {
        clearTimeout(selectTimeoutRef.current);
      }

      // Snappy timing: trigger the slow reveal 200ms after sliding begins so it is starting just as it stops
      selectTimeoutRef.current = setTimeout(() => {
        setSettledSelected(newSelected);
      }, 200);

      setStep((prevStep) => {
        const diff = newSelected - prevSelected;
        if (diff === 1 || diff === -(len - 1)) {
          return prevStep + 1;
        } else if (diff === -1 || diff === (len - 1)) {
          return prevStep - 1;
        }
        return prevStep;
      });
      prevSelectedRef.current = newSelected;
    };

    emblaApi.on("select", onSelect);

    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      if (selectTimeoutRef.current) {
        clearTimeout(selectTimeoutRef.current);
      }
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, slides.length]);

  const getWebPosition = (idx: number) => {
    const len = slides.length;
    if (idx === selected) {
      return step % 2 === 0 ? "right" : "left";
    }
    if (idx === (selected + 1) % len) {
      return (step + 1) % 2 === 0 ? "right" : "left";
    }
    if (idx === (selected - 1 + len) % len) {
      return (step - 1) % 2 === 0 ? "right" : "left";
    }
    return "right";
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        {/* Fixed gradient overlay — outside Embla so drag events are unaffected */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background via-background/70 to-transparent" />

        <div className="relative z-20" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, idx) => (
              <div key={s.titleAccent} className="min-w-0 flex-[0_0_100%] relative overflow-hidden">
                {/* Slide background image */}
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 z-0"
                />
                {/* Dynamic spider web (alternating corner position) — slides with carousel, bright opacity */}
                {/* Dark vignette under the spider web to blend it naturally with the background */}
                <div
                  className={`absolute -top-[620px] h-[1200px] w-[1200px] pointer-events-none blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0)_70%)] z-10 ${
                    getWebPosition(idx) === "right" ? "-right-[620px]" : "-left-[620px]"
                  }`}
                />
                <SpiderWeb
                  className={`absolute -top-[620px] h-[1200px] w-[1200px] opacity-35 mix-blend-screen z-20 ${
                    getWebPosition(idx) === "right" ? "-right-[620px]" : "-left-[620px]"
                  }`}
                  animated={false}
                />
                <div className="relative z-30 mx-auto max-w-7xl px-6 py-24 md:py-36">
                  <div className="max-w-3xl">
                    <h1
                      className={`text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl ${
                        settledSelected === idx ? "animate-hero-fade-up" : "opacity-0"
                      }`}
                    >
                      {s.titleStart} <span className="text-gradient">{s.titleAccent}</span>{" "}
                      {s.titleEnd}
                    </h1>
                    <div className="mt-6 max-w-xl space-y-2">
                      {s.bodyLines.map((line, lineIdx) => (
                        <p
                          key={lineIdx}
                          className={`text-lg text-muted-foreground leading-relaxed ${
                            settledSelected === idx
                              ? `animate-hero-fade-up fill-mode-both`
                              : "opacity-0"
                          }`}
                          style={{
                            animationDelay: settledSelected === idx ? `${150 + lineIdx * 150}ms` : "0ms",
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div
                      className={`mt-10 flex flex-wrap gap-4 ${
                        settledSelected === idx
                          ? "animate-hero-fade-up fill-mode-both"
                          : "opacity-0"
                      }`}
                      style={{
                        animationDelay: settledSelected === idx ? "450ms" : "0ms",
                      }}
                    >
                      <Link
                        to={s.primaryHref}
                        className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent border border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_oklch(0.63_0.22_25_/_50%)] active:scale-95 overflow-hidden relative"
                      >
                        <span
                          className={`flex items-center gap-2 ${
                            settledSelected === idx
                              ? "animate-button-content fill-mode-both"
                              : "opacity-0"
                          }`}
                          style={{
                            animationDelay: settledSelected === idx ? "600ms" : "0ms",
                          }}
                        >
                          {s.primaryLabel} 
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </Link>
                      <Link
                        to={s.secondaryHref}
                        className="group inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/30 backdrop-blur px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:bg-card/70 hover:shadow-elegant active:scale-95 overflow-hidden relative"
                      >
                        <span
                          className={`flex items-center gap-2 ${
                            settledSelected === idx
                              ? "animate-button-content fill-mode-both"
                              : "opacity-0"
                          }`}
                          style={{
                            animationDelay: settledSelected === idx ? "600ms" : "0ms",
                          }}
                        >
                          {s.secondaryLabel}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border/60 bg-card/60 p-2 text-foreground backdrop-blur transition hover:bg-card md:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border/60 bg-card/60 p-2 text-foreground backdrop-blur transition hover:bg-card md:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <ScrollReveal variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary">What we do</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A connected lab for building software products.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, idx) => (
            <ScrollReveal key={f.title} variant="fade-up" delay={idx * 80}>
              <article
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-all hover:border-primary/60 hover:shadow-elegant h-full"
              >
                <SpiderWeb className="absolute -right-16 -top-16 h-44 w-44 opacity-0 transition-opacity group-hover:opacity-50" />
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="border-t border-border/60 bg-card/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Selected work</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Software built to solve hard problems.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A curated collection of full-scale SaaS platforms, high-performance APIs, and custom integrations designed and engineered by our studio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p, idx) => (
              <ScrollReveal key={p.title} variant="fade-up" delay={idx * 100} className="h-full flex">
                <article
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur transition-all duration-300 hover:border-primary/60 hover:shadow-glow w-full h-full"
                >
                  {/* Project cover image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-medium text-primary uppercase tracking-wider bg-background/70 backdrop-blur px-2.5 py-1 rounded-full border border-border/40">
                      {p.tag}
                    </span>
                    <p className="absolute top-3 right-3 text-xs text-muted-foreground bg-background/70 backdrop-blur px-2 py-1 rounded">{p.year}</p>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-1">
                        {p.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    </div>
                    <div className="mt-6 border-t border-border/40 pt-4 flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground/80 bg-muted/30 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-t border-border/60 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-16 text-center">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Our methodology</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Deliberate planning. Flawless execution.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                We don't build minimum viable prototypes. We weave load-bearing digital structures designed to last.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-4 relative">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={step.number} variant="fade-up" delay={idx * 100} className="relative group h-full">
                <div className="bg-card/40 border border-border p-6 rounded-xl relative z-10 backdrop-blur hover:border-primary/50 transition-all h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors font-display">
                      {step.number}
                    </span>
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] border-t border-dashed border-border/80 z-0" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE STACK */}
      <section className="border-t border-border/60 bg-card/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Engineered stack</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Type-safe, fast, and scalable tools.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We build systems on modern foundations to ensure lightning fast load speeds, clean developer ergonomics, and infinite scaling capabilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech, idx) => (
              <ScrollReveal key={tech.name} variant="fade-up" delay={idx * 80} className="h-full flex">
                <div
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-all hover:border-primary/50 w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                  
                  {/* Image Banner */}
                  <div className="relative h-32 w-full overflow-hidden border-b border-border/40">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-3 left-3 rounded-lg bg-background/80 p-2 backdrop-blur border border-border/60 text-primary">
                      <tech.icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{tech.name}</h3>
                    <p className="mt-1 text-xs text-primary/80 font-medium font-display">{tech.tagline}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">{tech.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60 bg-card/30">
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-bold md:text-5xl">Have an idea? Let's weave it.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell us about the product you want to build — we'll reply within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: Cloud,
    title: "SaaS Product Studio",
    body: "End-to-end design and engineering of multi-tenant SaaS platforms — from prototype to scale.",
  },
  {
    icon: Code2,
    title: "Custom Web Apps",
    body: "Bespoke web applications built on a modern, type-safe stack with delightful UX.",
  },
  {
    icon: Workflow,
    title: "Automation & APIs",
    body: "Workflow automation, integrations, and internal tools that connect every part of your business.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Authentication, role-based access, audit trails and best-practice security baked in.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    body: "Edge-rendered, fast-loading apps optimised for every device and every connection.",
  },
  {
    icon: Sparkles,
    title: "Product Design",
    body: "Brand-aware product design that makes complex software feel effortless.",
  },
];

const projects = [
  {
    title: "SilkRoad CRM",
    tag: "Enterprise SaaS",
    year: "2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "A secure, multi-tenant CRM featuring real-time collaborative pipelines, high-performance database design, and deep Salesforce API sync integrations.",
    stack: ["React", "TypeScript", "PostgreSQL", "Cloudflare"],
  },
  {
    title: "AetherFlow API",
    tag: "Developer Tools",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description: "An ultra-low latency, edge-rendered API gateway capable of processing millions of daily transactions with integrated security layers and audit logs.",
    stack: ["Vite", "Nitro", "Bun", "WebSockets"],
  },
  {
    title: "CryptNet Dashboard",
    tag: "FinTech Security",
    year: "2025",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    description: "A specialized compliance management vault built with end-to-end encryption, multi-tenant workspace separation, and activity monitoring logs.",
    stack: ["Next.js", "Zod", "WebCrypto", "Tailwind CSS"],
  },
];

const processSteps = [
  {
    number: "01",
    icon: Terminal,
    title: "Discover & Map",
    body: "We dissect your product goals, map the domain boundaries, design database schemas, and define security configurations before writing a single line of code.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Design & Spec",
    body: "Every interaction is modeled. We construct pixel-perfect wireframes and state charts so you know exactly how the application transitions and responds to events.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Weave & Code",
    body: "Our engineers build the platform using strict TypeScript, reusable modular components, and performance-optimized queries, avoiding technical debt.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Verify & Launch",
    body: "Through extensive automated testing, integration checks, and security audits, we verify structural resilience before deploying to global edge endpoints.",
  },
];

const techStack = [
  {
    name: "React 19 & TypeScript",
    icon: Code2,
    tagline: "Type-Safe Client Architecture",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    description: "Robust type declarations across backend and UI prevent entire classes of bugs before compile-time.",
  },
  {
    name: "TanStack Router & Query",
    icon: Activity,
    tagline: "State Management & Syncing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    description: "Declarative, type-safe nested layout routing coupled with server-state caching for zero latency navigation.",
  },
  {
    name: "Vite, Nitro & Bun",
    icon: Zap,
    tagline: "Modern Engineering Engine",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    description: "High-speed bundlers, fast package managers, and production runtime environments for optimized load speeds.",
  },
  {
    name: "Tailwind CSS v4",
    icon: Layers,
    tagline: "Premium Utility Styling",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
    description: "Custom design systems using modern HSL and OKLCH color spaces, rendering beautiful visual experiences.",
  },
];


type HeroSlide = {
  icon: typeof Sparkles;
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd: string;
  bodyLines: string[];
  image: string;
  primaryLabel: string;
  primaryHref: "/contact" | "/services" | "/products" | "/about";
  secondaryLabel: string;
  secondaryHref: "/contact" | "/services" | "/products" | "/about";
};

const heroSlides: HeroSlide[] = [
  {
    icon: Sparkles,
    eyebrow: "SaaS product studio",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
    titleStart: "Software,",
    titleAccent: "woven",
    titleEnd: "with precision.",
    bodyLines: [
      "WEBBLAB designs and ships resilient SaaS products and custom software.",
      "Every connection deliberate. Every strand load-bearing."
    ],
    primaryLabel: "Start a project",
    primaryHref: "/contact",
    secondaryLabel: "Our services",
    secondaryHref: "/services",
  },
  {
    icon: Cloud,
    eyebrow: "Built for scale",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80",
    titleStart: "Multi-tenant SaaS,",
    titleAccent: "engineered",
    titleEnd: "from day one.",
    bodyLines: [
      "Tenancy, billing, roles, audit trails.",
      "We ship the unglamorous foundations so your product can grow without rewrites."
    ],
    primaryLabel: "See our products",
    primaryHref: "/products",
    secondaryLabel: "What we build",
    secondaryHref: "/services",
  },
  {
    icon: Workflow,
    eyebrow: "Automation & APIs",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
    titleStart: "Connect every",
    titleAccent: "thread",
    titleEnd: "of your business.",
    bodyLines: [
      "Internal tools, integrations, and workflow automation",
      "that turn scattered systems into one connected operation."
    ],
    primaryLabel: "Talk to us",
    primaryHref: "/contact",
    secondaryLabel: "About WEBBLAB",
    secondaryHref: "/about",
  },
];
