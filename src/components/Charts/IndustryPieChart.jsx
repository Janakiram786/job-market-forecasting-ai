import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

// Color palette for pie chart slices
const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];

/**
 * IndustryPieChart Component
 * 
 * Displays distribution of jobs across different industry sectors
 * Uses pie chart for easy visual comparison of proportions
 * 
 * @param {Array} industries - Array of industry objects with job counts
 */
const IndustryPieChart = ({ industries }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      {/* Chart Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Industry Distribution
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Job postings breakdown by industry sector
          </p>
        </div>
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
        >
          <Info className="w-4 h-4" />
          {showExplanation ? 'Hide' : 'Explain'}
        </button>
      </div>

      {/* Explanation Panel */}
      {showExplanation && (
        <div className="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-gray-900 mb-2">Industry Insights:</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <strong>Pie chart visualization:</strong> Shows proportional distribution of jobs across industries. 
              Larger slices mean more opportunities in that sector.
            </li>
            <li>
              <strong>Percentages:</strong> Each slice displays the percentage of total tech jobs in that industry, 
              helping you understand market concentration.
            </li>
            <li>
              <strong>Diversification strategy:</strong> Don't limit your job search to just the largest sector. 
              Smaller sectors often have less competition and faster hiring.
            </li>
            <li>
              <strong>Growth rates:</strong> Some smaller sectors may have higher growth rates than larger ones. 
              Technology and E-commerce typically lead in growth.
            </li>
            <li>
              <strong>Career stability:</strong> Larger, established sectors (Healthcare, Finance) offer more stability, 
              while newer sectors (FinTech, E-commerce) offer higher growth potential.
            </li>
          </ul>
        </div>
      )}

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={industries}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ industry, percent }) => `${industry} ${(percent * 100).toFixed(0)}%`}
            outerRadius={90}
            fill="#8884d8"
            dataKey="jobs"
          >
            {industries.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => value.toLocaleString() + ' jobs'} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryPieChart;