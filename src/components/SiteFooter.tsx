import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Github, Twitter, Linkedin, Send, Check } from "lucide-react";
import { useState } from "react";

// Custom SVG icon for Discord for a modern, type-safe developer social option
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.87-.64,1.71-1.32,2.51-2a75.43,75.43,0,0,0,72.63,0c.8,0.71,1.64,1.39,2.51,2a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.87,50.75,124.23,27.91,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
  </svg>
);

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t border-border/60 bg-card/10 relative overflow-hidden z-20">
      {/* Decorative cybernetic glow filament line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 items-end">
          
          {/* Column 1: Studio Identity & Social Links */}
          <div className="space-y-6">
            <Logo className="h-10 w-auto md:h-12" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              WEBBLAB is a boutique digital product studio. We design, engineer, and deploy high-performance, type-safe SaaS products and cloud architectures.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Discord">
                <DiscordIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Sub-directories */}
          <div className="grid grid-cols-2 gap-6">
            {/* Platforms & Products sub-column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Platforms</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span>Loom OS</span>
                    <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.2 rounded font-mono scale-90 opacity-0 group-hover:opacity-100 transition-opacity">v2.1</span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span>Strand Analytics</span>
                    <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.2 rounded font-mono scale-90 opacity-0 group-hover:opacity-100 transition-opacity">Beta</span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors">Webbnet Sync</Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors">Silk Auth</Link>
                </li>
              </ul>
            </div>

            {/* Studio Navigation sub-column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Studio</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">About Team</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">Capabilities</Link>
                </li>
                <li>
                  <Link to="/case-studies" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span>Case Studies</span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                    </span>
                    <span className="text-[10px] text-primary font-medium">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">Initiate Project</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Communication & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Stay Connected</h4>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Subscribe to our developer circular for performance engineering insights, product releases, and open-source updates.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-input bg-background/40 px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-foreground"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/95 text-primary-foreground p-2 rounded-md transition-transform active:scale-95 shrink-0 flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-[10px] text-primary font-medium animate-fade-up">Thank you for subscribing!</p>
              )}
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="mt-16 border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} WEBBLAB Studio. All rights reserved.</span>
            <span className="text-muted-foreground/35">•</span>
            <span className="text-[10px] text-primary font-mono tracking-wide">TYPE-SAFE FOUNDATION</span>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-primary transition-colors">Security Disclosure</Link>
            <Link to="/sla" className="hover:text-primary transition-colors">SLA Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
