import { createFileRoute } from "@tanstack/react-router";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WEBBLAB" },
      {
        name: "description",
        content:
          "WEBBLAB is a SaaS-focused software studio building resilient, well-designed products.",
      },
      { property: "og:title", content: "About — WEBBLAB" },
      { property: "og:description", content: "Who we are and how we work." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Craft", body: "Software is structural. We treat every line like load-bearing thread." },
  {
    title: "Clarity",
    body: "We write, design, and communicate in plain language. No noise, no jargon.",
  },
  {
    title: "Partnership",
    body: "We work with clients, not for them. Your goals become our goals.",
  },
  { title: "Resilience", body: "We build for the long run — secure, observable, easy to evolve." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        {/* Background Image Overlay */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <ScrollReveal variant="fade-up" duration={600}>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">About</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
              A small lab. <span className="text-gradient">A wide web.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              WEBBLAB is a focused software studio. We design, engineer, and ship SaaS products and
              custom software for teams that care about how things are made.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story section with workspace image */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <ScrollReveal variant="fade-up" className="h-full">
            <div className="relative h-[380px] overflow-hidden rounded-xl border border-border/40 shadow-elegant group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="WEBBLAB workshop"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-medium">Our story</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Software built differently.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                WEBBLAB began with a simple observation: most software is over-built and
                under-thought. We started the studio to make products that are the opposite — small,
                sharp, and deeply considered.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The name is our metaphor. A spider's web is light, but it holds everything it needs
                to. That's the software we want to make — lightweight digital structures woven with absolute precision.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we believe section in a 4-card grid */}
      <section className="border-t border-border/60 bg-card/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Core principles</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">What we believe</h2>
              <p className="mt-4 text-muted-foreground">
                These simple rules guide our engineering work, product design, and client relations daily.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <ScrollReveal key={v.title} variant="fade-up" delay={idx * 100} className="h-full flex">
                <div
                  className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-300 hover:border-primary/60 hover:shadow-glow w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <h3 className="text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Section 4) */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border/60">
        <ScrollReveal variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Our crew</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Meet the team</h2>
            <p className="mt-4 text-muted-foreground">
              A tight-knit group of engineers and designers who value craft over code volume.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.name} variant="fade-up" delay={idx * 100} className="h-full flex">
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/30 backdrop-blur w-full h-full flex flex-col items-center text-center p-6 hover:border-primary/55 hover:shadow-glow transition-all duration-300">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-muted/20 shadow-inner group-hover:border-primary/60 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-xs text-primary/80 font-medium font-display mt-1">{member.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>


    </>
  );
}

const teamMembers = [
  {
    name: "Kenji Sato",
    role: "Founder & Lead Architect",
    bio: "Formerly led core infrastructure at Stripe. Weaves systems with pure TypeScript, Bun, and Nitro.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "Design Director",
    bio: "Obsessed with micro-interactions and grid systems. Designs functional products that tell a story.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Elena Rostova",
    role: "Senior Frontend Engineer",
    bio: "Specializes in modern design systems, fluid micro-animations, and client-side performance tuning.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Marcus Vance",
    role: "Principal Engineer",
    bio: "Performance specialist. Expert in database tuning, edge networking, and security auditing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Studio Founded",
    desc: "WEBBLAB is established in Tokyo with a mission to build lightweight SaaS systems.",
  },
  {
    year: "2024",
    title: "Loom OS Released",
    desc: "Our operations hub is launched, scaling to 50+ business clients in its first quarter.",
  },
  {
    year: "2025",
    title: "Global Edge Expansion",
    desc: "Opened our London hub and deployed global clusters for under-10ms API responses.",
  },
  {
    year: "2026",
    title: "Studio Growth",
    desc: "Partnered with 20+ ambitious startups to design, build, and deploy production SaaS platforms.",
  },
];
