import React from 'react';
import HeroSection from './components/HeroSection';
import FinancialOverview from './components/FinancialOverview';
import BudgetTracker from './components/BudgetTracker';
import MonthlyAnalytics from './components/MonthlyAnalytics';

export default function App() {
  const budgets = [
    { name: 'Groceries', spent: '$420', limit: '$500', percent: 84 },
    { name: 'Dining Out', spent: '$210', limit: '$200', percent: 105 },
    { name: 'Transport', spent: '$180', limit: '$250', percent: 72 },
    { name: 'Entertainment', spent: '$95', limit: '$120', percent: 79 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-8">
        <HeroSection />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
            <FinancialOverview />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <MonthlyAnalytics />
          </div>
          <div className="lg:col-span-1">
            <BudgetTracker items={budgets} />
          </div>
        </section>

        <footer className="pt-6 text-center text-white/50 text-xs">
          Built for clarity • Minimal black & white interface
        </footer>
      </div>
    </div>
  );
}
