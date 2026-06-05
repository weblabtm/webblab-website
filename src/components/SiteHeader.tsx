import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-label="WEBBLAB home"
            className="absolute top-1/2 left-6 -translate-y-1/2 z-50"
          >
            <Logo
              variant="icon"
              className="h-16 md:h-24 transition-transform duration-200 hover:scale-105"
            />
          </Link>
          {/* Spacer to preserve horizontal space so nav links don't slide under the logo */}
          <div className="w-24 md:w-36" />
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-white font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Start a project
          </Link>
        </nav>
        <button onClick={() => setOpen((o) => !o)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "text-white font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
