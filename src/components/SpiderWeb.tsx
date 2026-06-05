import { useId } from "react";

interface SpiderWebProps {
  id?: string;
  className?: string;
  variant?: "corner" | "center" | "full";
  animated?: boolean | "draw";
  drawDelay?: number;
  style?: React.CSSProperties;
  spokes?: number;
  rings?: number;
}

/**
 * Decorative spider-web SVG. Classic spider web with radial spokes
 * and curved, sagging strands between them — matches the WBL logo style.
 */
export function SpiderWeb({
  id: propId,
  className = "",
  variant = "corner",
  animated = true,
  drawDelay = 0,
  style,
  spokes = 14,
  rings = 7,
}: SpiderWebProps) {
  const reactId = useId();
  const safeReactId = reactId.replace(/:/g, "-");
  const id = propId || safeReactId;
  const radius = 200;
  const cx = 200;
  const cy = 200;
  const sag = 0.82; // how much each strand curves inward (0=straight, <1=sag)

  const spokePoint = (i: number, r: number) => {
    const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    return {
      x: Math.round(x * 100) / 100,
      y: Math.round(y * 100) / 100,
    };
  };

  // Build curved strand from spoke i to spoke i+1 at ring radius r,
  // with control point pulled toward the center (creates the spider-web sag).
  const curvedStrand = (i: number, r: number) => {
    const p1 = spokePoint(i, r);
    const p2 = spokePoint(i + 1, r);
    const midA = ((i + 0.5) / spokes) * Math.PI * 2 - Math.PI / 2;
    const cr = r * sag;
    const cpx = Math.round((cx + Math.cos(midA) * cr) * 100) / 100;
    const cpy = Math.round((cy + Math.sin(midA) * cr) * 100) / 100;
    return `M ${p1.x} ${p1.y} Q ${cpx} ${cpy} ${p2.x} ${p2.y}`;
  };

  const isDrawing = animated === "draw";

  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      preserveAspectRatio={variant === "full" ? "xMidYMid slice" : "xMidYMid meet"}
      style={style}
    >
      <defs>
        <radialGradient id={`web-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="oklch(0.75 0.01 25)" stopOpacity="0.75" />
          <stop offset="85%" stopColor="oklch(0.65 0.01 25)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.5 0.01 25)" stopOpacity="0.15" />
        </radialGradient>
        <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        stroke={`url(#web-${id})`}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
        filter={`url(#glow-${id})`}
        className={animated === true ? "animate-web-pulse" : ""}
      >
        {/* radial spokes */}
        {Array.from({ length: spokes }).map((_, i) => {
          const p = spokePoint(i, radius);
          const delay = drawDelay + i * (0.3 / spokes);
          return (
            <line
              key={`s-${i}`}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              className={isDrawing ? "animate-web-draw" : ""}
              style={
                isDrawing
                  ? {
                      animationDelay: `${delay}s`,
                    }
                  : undefined
              }
            />
          );
        })}
        {/* curved strands between spokes, ring by ring */}
        {Array.from({ length: rings }).map((_, ri) => {
          const r = ((ri + 1) / rings) * radius;
          return Array.from({ length: spokes }).map((_, i) => {
            const delay = drawDelay + 0.35 + ri * (0.7 / rings) + i * (0.1 / spokes);
            return (
              <path
                key={`c-${ri}-${i}`}
                d={curvedStrand(i, r)}
                className={isDrawing ? "animate-web-draw" : ""}
                style={
                  isDrawing
                    ? {
                        animationDelay: `${delay}s`,
                      }
                    : undefined
                }
              />
            );
          });
        })}
        <circle cx={cx} cy={cy} r="1.5" fill="#ffffff" />
      </g>
    </svg>
  );
}
