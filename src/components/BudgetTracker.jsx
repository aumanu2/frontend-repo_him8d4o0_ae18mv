import React from 'react';

function ProgressBar({ value }) {
  const clamped = Math.min(100, Math.max(0, value));
  const danger = clamped >= 100;
  return (
    <div className="w-full h-2 bg-white/10 rounded">
      <div
        className={`h-2 rounded ${danger ? 'bg-red-500' : 'bg-white'}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export default function BudgetTracker({ items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Budget Tracker</h3>
        <span className="text-xs text-white/60">Alerts when exceeded</span>
      </div>
      <div className="space-y-4">
        {items.map((b) => (
          <div key={b.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="text-sm">{b.name}</div>
              <div className={`text-sm ${b.percent >= 100 ? 'text-red-400' : 'text-white/70'}`}>
                {b.spent} / {b.limit}
              </div>
            </div>
            <ProgressBar value={b.percent} />
          </div>
        ))}
      </div>
    </div>
  );
}
