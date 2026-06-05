import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "@tanstack/react-router";
import { SpiderWeb } from "./SpiderWeb";

interface WebSpot {
  id: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: number;
  delay: number;
  rotation: number;
  opacity: number;
  spokes?: number;
  rings?: number;
}

interface ClickWeb {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

const PAGE_SPOTS: Record<string, WebSpot[]> = {
  "/": [
    // Top-Left corner web
    {
      id: "home-tl",
      left: "-300px",
      top: "-300px",
      size: 700,
      delay: 0.1,
      rotation: 0,
      opacity: 0.22,
    },
    // Top-Middle (near top of What We Do section, center pushed off-screen)
    {
      id: "home-ml1",
      left: "calc(50% - 675px)",
      top: "-200px",
      size: 1350,
      delay: 1.2,
      rotation: 0,
      opacity: 0.10,
      spokes: 30,
      rings: 14,
    },
    // Left edge (inbetween What We Do and Selected Work)
    {
      id: "home-inbetween-left",
      left: "-220px",
      top: "1100px",
      size: 580,
      delay: 0.6,
      rotation: -30,
      opacity: 0.16,
    },
    // Process section background web (extends between sections)
    {
      id: "home-process",
      right: "-250px",
      top: "1600px",
      size: 600,
      delay: 0.8,
      rotation: 45,
      opacity: 0.18,
    },
    // Mid-Right 1 (near bottom of Selected Projects section)
    {
      id: "home-mr1",
      right: "-200px",
      top: "2500px",
      size: 620,
      delay: 1.9,
      rotation: 60,
      opacity: 0.16,
    },
    // Mid-Left 2 (near top of The Stack section)
    {
      id: "home-ml2",
      left: "-220px",
      top: "3300px",
      size: 580,
      delay: 2.5,
      rotation: -15,
      opacity: 0.16,
    },
    // CTA section background web (at bottom)
    {
      id: "home-cta",
      left: "calc(50% - 350px)",
      bottom: "100px",
      size: 700,
      delay: 3.1,
      rotation: 120,
      opacity: 0.18,
    },
    // Bottom-Right corner web
    {
      id: "home-br",
      right: "-300px",
      bottom: "-300px",
      size: 750,
      delay: 1.5,
      rotation: 90,
      opacity: 0.22,
    },
  ],
  "/about": [
    // Hero Top-Right
    {
      id: "about-tr",
      right: "-220px",
      top: "-100px",
      size: 650,
      delay: 0.1,
      rotation: 15,
      opacity: 0.22,
    },
    // Upper-Mid Left
    {
      id: "about-tl",
      left: "-200px",
      top: "300px",
      size: 500,
      delay: 0.6,
      rotation: -30,
      opacity: 0.18,
    },
    // Mid-Left edge (between core beliefs and team)
    {
      id: "about-ml",
      left: "-220px",
      top: "1300px",
      size: 550,
      delay: 1.2,
      rotation: -40,
      opacity: 0.16,
    },
    // Lower-Mid Right
    {
      id: "about-mr",
      right: "-180px",
      top: "1350px",
      size: 580,
      delay: 1.8,
      rotation: 45,
      opacity: 0.16,
    },
    // Bottom-Right corner
    {
      id: "about-br",
      right: "-250px",
      bottom: "-150px",
      size: 700,
      delay: 2.4,
      rotation: 80,
      opacity: 0.18,
    },
  ],
  "/services": [
    // Hero Top-Right
    {
      id: "services-tr",
      right: "-250px",
      top: "-120px",
      size: 700,
      delay: 0.1,
      rotation: 45,
      opacity: 0.22,
    },
    // Upper-Mid Left
    {
      id: "services-tl",
      left: "-200px",
      top: "400px",
      size: 550,
      delay: 0.6,
      rotation: -15,
      opacity: 0.18,
    },
    // Mid-Left (between Collaboration and FAQ)
    {
      id: "services-ml",
      left: "-220px",
      top: "2050px",
      size: 600,
      delay: 1.2,
      rotation: -45,
      opacity: 0.16,
    },
    // Lower-Mid Right
    {
      id: "services-mr",
      right: "-180px",
      top: "1500px",
      size: 580,
      delay: 1.8,
      rotation: 60,
      opacity: 0.16,
    },
    // Bottom-Left
    {
      id: "services-bl",
      left: "-180px",
      bottom: "120px",
      size: 520,
      delay: 2.4,
      rotation: -30,
      opacity: 0.16,
    },
    // Bottom-Right
    {
      id: "services-br",
      right: "-200px",
      bottom: "220px",
      size: 650,
      delay: 3.0,
      rotation: 15,
      opacity: 0.18,
    },
  ],
  "/products": [
    // Hero Top-Left
    {
      id: "products-tl",
      left: "-220px",
      top: "-100px",
      size: 650,
      delay: 0.1,
      rotation: -30,
      opacity: 0.22,
    },
    // Upper-Mid Right
    {
      id: "products-tr",
      right: "-200px",
      top: "350px",
      size: 550,
      delay: 0.6,
      rotation: 30,
      opacity: 0.18,
    },
    // Mid-Right
    {
      id: "products-mr",
      right: "-250px",
      top: "900px",
      size: 600,
      delay: 1.2,
      rotation: 60,
      opacity: 0.16,
    },
    // Mid-Left
    {
      id: "products-ml",
      left: "-180px",
      top: "1400px",
      size: 580,
      delay: 1.8,
      rotation: -30,
      opacity: 0.16,
    },
    // Bottom-Left
    {
      id: "products-bl",
      left: "-200px",
      bottom: "120px",
      size: 650,
      delay: 2.4,
      rotation: -60,
      opacity: 0.18,
    },
    // Bottom-Right
    {
      id: "products-br",
      right: "-150px",
      bottom: "100px",
      size: 540,
      delay: 3.0,
      rotation: 45,
      opacity: 0.16,
    },
  ],
  "/contact": [
    // Hero Top-Left
    {
      id: "contact-tl",
      left: "-220px",
      top: "-100px",
      size: 650,
      delay: 0.1,
      rotation: -15,
      opacity: 0.22,
    },
    // Upper-Mid Right
    {
      id: "contact-mr",
      right: "-200px",
      top: "400px",
      size: 500,
      delay: 0.6,
      rotation: 45,
      opacity: 0.18,
    },
    // Bottom-Left
    {
      id: "contact-bl",
      left: "-180px",
      bottom: "150px",
      size: 480,
      delay: 1.2,
      rotation: -45,
      opacity: 0.18,
    },
    // Bottom-Right
    {
      id: "contact-br",
      right: "-180px",
      bottom: "-80px",
      size: 600,
      delay: 1.8,
      rotation: 30,
      opacity: 0.2,
    },
  ],
  "/case-studies": [
    // Top-Left corner
    {
      id: "case-studies-tl",
      left: "-220px",
      top: "-100px",
      size: 650,
      delay: 0.1,
      rotation: -15,
      opacity: 0.18,
    },
    // Mid-Right
    {
      id: "case-studies-mr",
      right: "-200px",
      top: "800px",
      size: 580,
      delay: 0.8,
      rotation: 45,
      opacity: 0.16,
    },
    // Bottom-Left
    {
      id: "case-studies-bl",
      left: "-200px",
      bottom: "100px",
      size: 600,
      delay: 1.5,
      rotation: -60,
      opacity: 0.16,
    },
  ],
  "/privacy": [
    {
      id: "privacy-tr",
      right: "-250px",
      top: "-150px",
      size: 600,
      delay: 0.1,
      rotation: 30,
      opacity: 0.10,
    },
    {
      id: "privacy-bl",
      left: "-200px",
      bottom: "-100px",
      size: 550,
      delay: 0.8,
      rotation: -30,
      opacity: 0.10,
    },
  ],
  "/terms": [
    {
      id: "terms-tr",
      right: "-250px",
      top: "-150px",
      size: 600,
      delay: 0.1,
      rotation: 30,
      opacity: 0.10,
    },
    {
      id: "terms-bl",
      left: "-200px",
      bottom: "-100px",
      size: 550,
      delay: 0.8,
      rotation: -30,
      opacity: 0.10,
    },
  ],
  "/security": [
    {
      id: "security-tr",
      right: "-250px",
      top: "-150px",
      size: 600,
      delay: 0.1,
      rotation: 30,
      opacity: 0.10,
    },
    {
      id: "security-bl",
      left: "-200px",
      bottom: "-100px",
      size: 550,
      delay: 0.8,
      rotation: -30,
      opacity: 0.10,
    },
  ],
  "/sla": [
    {
      id: "sla-tr",
      right: "-250px",
      top: "-150px",
      size: 600,
      delay: 0.1,
      rotation: 30,
      opacity: 0.10,
    },
    {
      id: "sla-bl",
      left: "-200px",
      bottom: "-100px",
      size: 550,
      delay: 0.8,
      rotation: -30,
      opacity: 0.10,
    },
  ],
};

function ScrollWebSpot({ spot }: { spot: WebSpot }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once and stay visible
        }
      },
      {
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes fully into view
        threshold: 0.05,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const style: React.CSSProperties = {
    position: "absolute",
    width: `${spot.size}px`,
    height: `${spot.size}px`,
    opacity: spot.opacity,
    zIndex: -10,
    pointerEvents: "none",
    left: spot.left,
    right: spot.right,
    top: spot.top,
    bottom: spot.bottom,
  };

  return (
    <div ref={elementRef} style={style}>
      {/* Vignette behind each web */}
      <div
        className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0)_70%)]"
        style={{ transform: "scale(1.3)" }}
      />
      {/* Play drawing animation when visible */}
      {isVisible && (
        <SpiderWeb
          id={spot.id}
          className="w-full h-full mix-blend-screen"
          style={{ transform: `rotate(${spot.rotation}deg)` }}
          animated="draw"
          drawDelay={0.1}
          spokes={spot.spokes}
          rings={spot.rings}
        />
      )}
    </div>
  );
}

export function InteractiveWebBackground() {
  const [clickWebs, setClickWebs] = useState<ClickWeb[]>([]);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useLocation();

  const websRef = useRef<ClickWeb[]>([]);
  useEffect(() => {
    websRef.current = clickWebs;
  }, [clickWebs]);

  useEffect(() => {
    setMounted(true);

    const isInteractiveElement = (target: HTMLElement | null): boolean => {
      let el = target;
      while (el && el !== document.body) {
        const tagName = el.tagName.toLowerCase();
        if (
          tagName === "button" ||
          tagName === "a" ||
          tagName === "input" ||
          tagName === "textarea" ||
          tagName === "select"
        ) {
          return true;
        }
        if (el.getAttribute("role") === "button" || el.getAttribute("role") === "link") {
          return true;
        }

        // Check CSS class names
        const className = el.className;
        if (typeof className === "string") {
          const lowerClass = className.toLowerCase();
          if (
            lowerClass.includes("card") ||
            lowerClass.includes("btn") ||
            lowerClass.includes("button") ||
            lowerClass.includes("nav") ||
            lowerClass.includes("menu") ||
            lowerClass.includes("interactive") ||
            lowerClass.includes("carousel") ||
            lowerClass.includes("header") ||
            lowerClass.includes("footer") ||
            lowerClass.includes("logo")
          ) {
            return true;
          }
        }

        // Check cursor: pointer
        const style = window.getComputedStyle(el);
        if (style.cursor === "pointer") {
          return true;
        }

        el = el.parentElement;
      }
      return false;
    };

    const handleWindowClick = (e: MouseEvent) => {
      // Don't spawn webs if clicking interactive components
      if (isInteractiveElement(e.target as HTMLElement)) {
        return;
      }

      // Add scroll offsets to capture absolute page coordinates
      const absoluteX = e.clientX + window.scrollX;
      const absoluteY = e.clientY + window.scrollY;

      // PROXIMITY CHECK: Don't spawn webs too close to existing click-spawned webs (min 180px apart)
      const isTooClose = websRef.current.some(
        (web) => Math.hypot(web.x - absoluteX, web.y - absoluteY) < 180
      );
      if (isTooClose) {
        return;
      }

      const webSize = Math.floor(Math.random() * 80) + 240; // 240px to 320px
      const newWeb: ClickWeb = {
        id: Date.now(),
        x: absoluteX,
        y: absoluteY,
        size: webSize,
        rotation: Math.floor(Math.random() * 360),
      };

      setClickWebs((prev) => [...prev, newWeb]);

      // Remove click-spawned webs after the fade out completes (12 seconds in styles.css)
      setTimeout(() => {
        setClickWebs((prev) => prev.filter((w) => w.id !== newWeb.id));
      }, 12000);
    };

    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  if (!mounted) return null;

  // Normalize pathname to remove trailing slashes (e.g. "/about/" -> "/about")
  const normalizedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const spots = PAGE_SPOTS[normalizedPath] || PAGE_SPOTS["/"] || [];

  return createPortal(
    <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
      {/* 1. Initial Page Load Webs (Spot by Spot on scroll reveal) */}
      {spots.map((spot) => (
        <ScrollWebSpot key={spot.id} spot={spot} />
      ))}

      {/* 2. Click-Spawned Webs */}
      {clickWebs.map((web) => {
        // Position wrapper around absolute click center
        const wrapperStyle: React.CSSProperties = {
          position: "absolute",
          left: `${web.x - web.size / 2}px`,
          top: `${web.y - web.size / 2}px`,
          width: `${web.size}px`,
          height: `${web.size}px`,
          zIndex: -10,
          pointerEvents: "none",
        };

        return (
          <div key={web.id} className="animate-web-fade-in-out" style={wrapperStyle}>
            {/* Glow/Vignette to dark-vibe background under click-web */}
            <div
              className="absolute inset-0 blur-2xl bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0)_70%)]"
              style={{ transform: "scale(1.4)" }}
            />
            <SpiderWeb
              id={`click-${web.id}`}
              className="w-full h-full mix-blend-screen"
              style={{ transform: `rotate(${web.rotation}deg)` }}
              animated="draw"
              drawDelay={0}
            />
          </div>
        );
      })}
    </div>,
    document.body
  );
}
