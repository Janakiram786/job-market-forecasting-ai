import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

/**
 * RoleTrendChart Component
 * 
 * Multi-line chart comparing job demand trends across different roles
 * Allows comparison of growth trajectories
 * 
 * @param {Array} data - Monthly job data with role breakdowns
 */
const RoleTrendChart = ({ data }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      {/* Chart Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Role-Specific Demand Trends
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Compare demand trajectories across different job roles
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
        <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-gray-900 mb-2">Understanding Role Trends:</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <strong>Multiple trend lines:</strong> Each colored line represents a specific job role, 
              allowing you to compare growth trajectories side by side.
            </li>
            <li>
              <strong>Slope analysis:</strong> Steeper lines indicate faster job growth. 
              AI/ML Engineer (purple) typically shows the steepest slope, reflecting explosive demand.
            </li>
            <li>
              <strong>Software Engineer (green):</strong> Usually has the highest absolute numbers but moderate growth rate - 
              it is an established, stable role.
            </li>
            <li>
              <strong>Convergence points:</strong> When lines cross, it indicates one role is overtaking another in demand. 
              Watch for emerging roles catching up to traditional ones.
            </li>
            <li>
              <strong>Forecast accuracy:</strong> Historical patterns help predict which roles will continue growing vs stabilizing. 
              Use this to plan career pivots or skill development.
            </li>
          </ul>
        </div>
      )}

      {/* Multi-Line Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Legend />
          <Line type="monotone" dataKey="AI/ML Engineer" stroke="#8b5cf6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Data Scientist" stroke="#3b82f6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Software Engineer" stroke="#10b981" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Cloud Architect" stroke="#f59e0b" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoleTrendChart;