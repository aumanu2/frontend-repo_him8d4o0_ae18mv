import React, { useMemo, useState } from 'react';

const demoData = [
  { category: 'Housing', amount: 1200 },
  { category: 'Groceries', amount: 420 },
  { category: 'Transport', amount: 180 },
  { category: 'Dining Out', amount: 210 },
  { category: 'Entertainment', amount: 95 },
  { category: 'Income', amount: -3500 },
];

function Bar({ label, value, max }) {
  const width = `${Math.abs(value) / max * 100}%`;
  const isIncome = value < 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-white">{label}</span>
        <span className={`text-xs ${isIncome ? 'text-emerald-300' : 'text-white/70'}`}>{value < 0 ? `-${Math.abs(value)}` : value}</span>
      </div>
      <div className="h-2 bg-white/10 rounded">
        <div
          className={`h-2 rounded ${isIncome ? 'bg-emerald-400' : 'bg-white'}`}
          style={{ width }}
        />
      </div>
    </div>
  );
}

export default function MonthlyAnalytics() {
  const [query, setQuery] = useState('Show top spending categories');

  const maxValue = useMemo(() => {
    return Math.max(...demoData.map((d) => Math.abs(d.amount)), 1);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (q.includes('income')) return demoData.filter((d) => d.amount < 0);
    if (q.includes('spending') || q.includes('expense')) return demoData.filter((d) => d.amount > 0);
    return demoData;
  }, [query]);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Monthly Analytics</h3>
      </div>

      <div className="mb-4">
        <label className="text-xs text-white/60">Ask in natural language</label>
        <input
          className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-2 text-sm outline-none focus:ring-2 focus:ring-white/30"
          placeholder="e.g., What did I spend most on?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filtered.map((d) => (
          <Bar key={d.category} label={d.category} value={d.amount} max={maxValue} />)
        )}
      </div>
    </div>
  );
}
