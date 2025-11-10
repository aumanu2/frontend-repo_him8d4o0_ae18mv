import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] bg-black text-white overflow-hidden rounded-2xl border border-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 flex flex-col items-start justify-end h-full p-8 md:p-12 gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase">
          Minimal • Fintech • Glassmorphic
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Take control of your money
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-xl">
          Track accounts, categorize spending, monitor budgets, and hit your financial goals — all in a clean, distraction‑free workspace.
        </p>
      </div>
    </section>
  );
}
