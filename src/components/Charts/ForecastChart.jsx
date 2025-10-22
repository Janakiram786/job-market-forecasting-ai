import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

/**
 * ForecastChart Component
 * 
 * Grouped bar chart comparing current vs forecasted jobs by industry
 * Shows expected growth over 6-month period
 * 
 * @param {Array} industries - Array of industry objects with current and forecast data
 */
const ForecastChart = ({ industries }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      {/* Chart Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Industry Growth Forecast Comparison
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Current vs forecasted job numbers by industry
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
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-gray-900 mb-2">Forecast Comparison Analysis:</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <strong>Grouped bars:</strong> Each industry has two bars - blue shows current job numbers, 
              orange shows 6-month forecast. Compare the gap to see expected growth.
            </li>
            <li>
              <strong>Growth magnitude:</strong> Larger gaps between bars indicate industries with higher expected job growth. 
              These are expanding sectors with more hiring planned.
            </li>
            <li>
              <strong>Absolute vs relative growth:</strong> Technology may add the most jobs (absolute), 
              but smaller sectors like E-commerce may have higher growth rates (relative).
            </li>
            <li>
              <strong>Job seeker strategy:</strong> Target industries with large forecast bars if you want maximum opportunities. 
              Target industries with big gaps if you want to ride growth waves.
            </li>
            <li>
              <strong>Economic indicators:</strong> This forecast incorporates hiring trends, company funding data, 
              and economic projections to provide realistic estimates.
            </li>
          </ul>
        </div>
      )}

      {/* Grouped Bar Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={industries}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="industry" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            formatter={(value) => value.toLocaleString() + ' jobs'}
          />
          <Legend />
          <Bar dataKey="jobs" fill="#3b82f6" name="Current Jobs" radius={[4, 4, 0, 0]} />
          <Bar dataKey="forecast" fill="#f59e0b" name="Forecasted (6 months)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {/* Growth Rate Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        {industries.slice(0, 3).map((ind, idx) => (
          <div key={idx} className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border">
            <p className="text-xs text-gray-600 font-medium">{ind.industry}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">+{ind.growth}%</p>
            <p className="text-xs text-gray-600 mt-1">Expected growth rate</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastChart;