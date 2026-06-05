import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WEBBLAB" },
      {
        name: "description",
        content: "Get in touch with WEBBLAB to start your next software project.",
      },
      { property: "og:title", content: "Contact — WEBBLAB" },
      { property: "og:description", content: "Start a conversation with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        {/* Background Image Overlay */}
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
          loading="eager"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <ScrollReveal variant="fade-up" duration={600}>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Contact</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
              Pull a <span className="text-gradient">thread</span>. We'll respond.
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Tell us what you'd like to build. We typically reply within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ScrollReveal variant="slide-left" className="h-full">
            <div className="space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value="hello@webblab.com"
                  href="mailto:hello@webblab.com"
                />
                <InfoRow icon={Phone} label="Phone" value="+1 (555) 010-2024" href="tel:+15550102024" />
                <InfoRow icon={MapPin} label="Studio" value="Remote-first · Worldwide" />
              </div>

              {/* Sidebar visual asset */}
              <div className="relative h-[240px] overflow-hidden rounded-xl border border-border/40 shadow-elegant group hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=70&auto=format&fit=crop"
                  alt="Workspace connection"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" className="h-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-xl border border-border bg-card/60 p-8 shadow-elegant h-full"
            >
              {sent ? (
                <div className="py-10 text-center h-full flex flex-col justify-center">
                  <h2 className="text-2xl font-bold">Thank you.</h2>
                  <p className="mt-2 text-muted-foreground">
                    We've received your message and will reply soon.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <Field label="Name">
                    <input
                      required
                      name="name"
                      className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none ring-ring focus:ring-2"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none ring-ring focus:ring-2"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      name="company"
                      className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none ring-ring focus:ring-2"
                      placeholder="Company (optional)"
                    />
                  </Field>
                  <Field label="Project details">
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="w-full resize-none rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none ring-ring focus:ring-2"
                      placeholder="Tell us about your project..."
                    />
                  </Field>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                  >
                    Send message
                  </button>
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-primary/60">
      <Icon className="mt-0.5 h-5 w-5 text-primary" />
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
