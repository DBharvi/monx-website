import { CSSProperties, useId } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

const MONX_LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2Fd2fe1b8d5c3a4ec5a3cf9529b7d65a9a%2F03d0bb423fff4d728a7c0c57f11915b1";

type InsightVisualType = "spark" | "gauge" | "curve";

const insightTiles: {
  label: string;
  value: string;
  visual: InsightVisualType;
}[] = [
  { label: "Throughput", value: "+18%", visual: "spark" },
  { label: "Yield", value: "99.2%", visual: "spark" },
  { label: "Downtime", value: "-12%", visual: "spark" },
  { label: "Quality", value: "+21%", visual: "spark" },
  {
    label: "OEE (Overall Equipment Effectiveness)",
    value: "75%",
    visual: "gauge",
  },
  { label: "Process Capability Index (Cpk)", value: "1.67", visual: "curve" },
];

const gridOverlayStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

export default function Index() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[hsl(var(--background))] text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-monx-hero" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-monx-grid opacity-70 mix-blend-screen" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-cyan/20 blur-[140px]" />
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-9">
              <div className="flex items-center gap-4">
                <img
                  src={MONX_LOGO}
                  alt="MONX logo"
                  className="h-12 w-auto drop-shadow-[0_18px_55px_rgba(32,174,255,0.35)]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6 pt-6">
                <h1
                  className="text-balance text-4xl font-semibold leading-[1.18] text-transparent sm:text-5xl lg:text-[3.4375rem]"
                  style={{
                    letterSpacing: "-0.022em",
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2Fd2fe1b8d5c3a4ec5a3cf9529b7d65a9a%2F387cb8b1f35344c194ff81771d9c9c13)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Intelligence that works as hard as you do.
                </h1>
                <p className="max-w-xl text-lg text-white/75 sm:text-xl">
                  Where data transforms into operational intelligence. Moηx is
                  building AI-powered manufacturing performance tools.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:monxtechnology@outlook.com"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black/50 px-8 py-3 text-base font-semibold text-[#0b1532] shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(32,174,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  style={{
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2Fd2fe1b8d5c3a4ec5a3cf9529b7d65a9a%2F482039496bb542369f04c9cb1362ac1b)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderWidth: "0.8px",
                  }}
                >
                  Stay Connected
                  <ArrowRight className="ml-3 h-5 w-5 text-[#0b1532] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-3 text-sm text-white/55">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-white/40 to-transparent" />
                  <span>Discover the future of connected factories.</span>
                </div>
              </div>
            </div>
            <FuturisticTelemetryPanel />
          </div>
        </section>
        <section className="w-full py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cyan/80">
              About MONX
            </h2>
            <p className="text-balance text-lg text-white/70 sm:text-xl">
              Moηx empowers manufacturers with intelligent, data-driven
              solutions that optimize operations, enhance efficiency, and drive
              sustainable growth.
            </p>
          </div>
          <div className="mx-auto mt-14 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>
        <section id="contact" className="w-full py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_70px_rgba(32,174,255,0.18)] sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,174,255,0.25),transparent_65%)] opacity-80" />
            <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-brand-cyan/30" />
            <div className="relative space-y-10">
              <div className="space-y-4 text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  We’re launching soon. Be the first to know when Moηx goes
                  live.
                </h3>
                <p className="text-base text-white/65">
                  We’re curating a community of forward-thinking manufacturers
                  ready to transform their production lines.
                </p>
              </div>
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-5 text-base text-white/70">
                  <a
                    className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-brand-cyan"
                    href="mailto:monxtechnology@outlook.com"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan">
                      <Mail className="h-5 w-5" />
                    </span>
                    monxtechnology@outlook.com
                  </a>
                  <a
                    className="inline-flex items-center gap-3 text-white/60 transition-colors duration-200 hover:text-brand-cyan/90"
                    href="tel:+917016528271"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60">
                      <Phone className="h-5 w-5" />
                    </span>
                    +91 7016528271
                  </a>
                </div>
                <button
                  type="button"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 px-10 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(32,174,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(32,174,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-cyan/40 via-transparent to-brand-cyan/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FuturisticTelemetryPanel() {
  return (
    <div className="relative hidden w-full max-w-lg justify-center lg:flex">
      <div className="absolute inset-0 -z-20 blur-3xl">
        <div className="mx-auto h-full w-full rounded-full bg-brand-cyan/20" />
      </div>
      <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-navy-soft/70 via-brand-graphite/40 to-brand-cyan/10 p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(32,174,255,0.22)]">
        <div className="absolute inset-0 opacity-40" style={gridOverlayStyle} />
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-brand-cyan/15 blur-2xl" />
        </div>
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/55">
            <span>Connected Machines</span>
            <span className="inline-flex items-center gap-2 text-brand-cyan">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(32,174,255,0.8)]" />
              Live
            </span>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 py-6 sm:grid-cols-3">
            {insightTiles.map((tile) => (
              <div
                key={tile.label}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-[0_18px_40px_rgba(32,174,255,0.25)]"
              >
                <span className="relative text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/50">
                  {tile.label}
                </span>
                <span className="relative mt-3 block text-2xl font-semibold text-white">
                  {tile.value}
                </span>
                <InsightVisual type={tile.visual} />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-cyan/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-white/55">
              <span>Signal Integrity</span>
              <span>AI Confidence</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-cyan via-white to-brand-cyan" />
            </div>
            <div className="flex justify-between text-[0.65rem] text-white/45">
              <span>Node Capacity</span>
              <span>93% Utilized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightVisual({ type }: { type: InsightVisualType }) {
  switch (type) {
    case "gauge":
      return <GaugeVisual />;
    case "curve":
      return <CurveVisual />;
    default:
      return <SparklineVisual />;
  }
}

function SparklineVisual() {
  const gradientId = `spark-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 120 40" className="mt-5 h-12 w-full">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(32, 174, 255, 0.05)" />
          <stop offset="50%" stopColor="rgba(32, 174, 255, 0.45)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.35)" />
        </linearGradient>
      </defs>
      <polyline
        points="5,30 20,18 35,24 50,12 65,18 80,8 95,14 110,6"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="5"
        y1="32"
        x2="110"
        y2="32"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
    </svg>
  );
}

function GaugeVisual() {
  const gradientId = `gauge-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 120 70" className="mt-6 h-16 w-full">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(32, 174, 255, 0.2)" />
          <stop offset="55%" stopColor="rgba(32, 174, 255, 0.7)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.85)" />
        </linearGradient>
      </defs>
      <path
        d="M12 58 A48 48 0 0 1 108 58"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 58 A48 48 0 0 1 108 58"
        stroke={`url(#${gradientId})`}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="150"
        strokeDashoffset="45"
      />
      <line
        x1="60"
        y1="58"
        x2="100"
        y2="40"
        stroke="rgba(32,174,255,0.85)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="58" r="5" fill="rgba(32,174,255,0.85)" />
    </svg>
  );
}

function CurveVisual() {
  const gradientId = `curve-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 120 70" className="mt-6 h-16 w-full">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(32, 174, 255, 0.08)" />
          <stop offset="50%" stopColor="rgba(32, 174, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.35)" />
        </linearGradient>
      </defs>
      <path
        d="M5 60 C 25 25, 45 10, 60 18 C 75 26, 95 60, 115 60"
        fill={`url(#${gradientId})`}
        opacity="0.6"
      />
      <path
        d="M5 60 C 25 25, 45 10, 60 18 C 75 26, 95 60, 115 60"
        fill="none"
        stroke="rgba(32,174,255,0.85)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="60"
        x2="115"
        y2="60"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-graphite-dim/40">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-white/55 sm:px-8">
        © 2025 MONX — Built with purpose for manufacturing excellence.
      </div>
    </footer>
  );
}
