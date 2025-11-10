import React from 'react';
import OverviewCards from './OverviewCards';

export default function FinancialOverview() {
  const summary = {
    netWorth: '$24,300',
    monthlySpend: '$2,105',
    month: 'Nov 2025',
    goalsProgress: '42%'
  };

  const budgets = [
    { name: 'Groceries', spent: '$420', limit: '$500', percent: 84 },
    { name: 'Dining Out', spent: '$210', limit: '$200', percent: 105 },
    { name: 'Transport', spent: '$180', limit: '$250', percent: 72 },
    { name: 'Entertainment', spent: '$95', limit: '$120', percent: 79 },
  ];

  return (
    <section className="space-y-5">
      <OverviewCards summary={summary} />
    </section>
  );
}
