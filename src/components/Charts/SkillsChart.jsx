import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

/**
 * SkillsChart Component
 * 
 * Horizontal bar chart showing top in-demand skills
 * Helps users identify which skills to learn for career growth
 * 
 * @param {Array} skills - Array of skill objects with demand data
 * @param {string} country - Selected country name
 */
const SkillsChart = ({ skills, country }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      {/* Chart Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Top Trending Skills
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Skills with highest job demand in {country}
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
        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-gray-900 mb-2">Skills Demand Analysis:</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <strong>Bar length:</strong> Represents total number of job postings requiring that skill. 
              Longer bars mean more opportunities.
            </li>
            <li>
              <strong>Growth percentage:</strong> Not shown in chart but crucial - indicates year-over-year increase. 
              Skills with 200%+ growth are emerging hot skills.
            </li>
            <li>
              <strong>Strategic learning:</strong> Focus on skills in top 3 positions for maximum job opportunities. 
              Combine multiple high-demand skills to stand out.
            </li>
            <li>
              <strong>Technology stack:</strong> Notice how complementary skills cluster together (Python + ML, Cloud + DevOps). 
              Learning skill combinations is more valuable than individual skills.
            </li>
          </ul>
        </div>
      )}

      {/* Horizontal Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={skills} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis dataKey="skill" type="category" width={130} tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            formatter={(value, name) => [value.toLocaleString() + ' jobs', 'Demand']}
          />
          <Bar dataKey="demand" fill="#3b82f6" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;