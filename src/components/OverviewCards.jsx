import React from 'react';
import { Wallet, TrendingUp, CalendarRange, Target } from 'lucide-react';

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="flex-1 min-w-[220px] rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-white">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
        <Icon className="h-4 w-4 text-white/70" />
      </div>
      <div className="mt-3 text-2xl font-semibold">{value}</div>
      {sub && <div className="mt-1 text-xs text-white/60">{sub}</div>}
    </div>
  );
}

export default function OverviewCards({ summary }) {
  const { netWorth, monthlySpend, month, goalsProgress } = summary;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Wallet} label="Net Worth" value={netWorth} sub="All accounts" />
      <StatCard icon={TrendingUp} label="This Month" value={monthlySpend} sub="Expenses" />
      <StatCard icon={CalendarRange} label="Period" value={month} sub="Current cycle" />
      <StatCard icon={Target} label="Goals" value={goalsProgress} sub="Completion" />
    </div>
  );
}
