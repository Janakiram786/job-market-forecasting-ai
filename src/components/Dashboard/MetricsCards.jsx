import React from 'react';
import { Briefcase, TrendingUp, Sparkles, Search } from 'lucide-react';

/**
 * MetricsCards Component
 * 
 * Displays key performance indicators in card format
 * Shows total jobs, average salary, fastest growing role, and remote jobs
 * 
 * @param {Object} countryData - Country-specific job market data
 */
const MetricsCards = ({ countryData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Total Jobs Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Job Posts</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              {(countryData.totalJobs / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-green-600 mt-1">+18% vs last year</p>
          </div>
          <Briefcase className="w-12 h-12 text-blue-500 opacity-20" />
        </div>
      </div>

      {/* Average Salary Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Avg Salary (Tech)</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              {countryData.currency}
              {(countryData.avgSalary / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-green-600 mt-1">+12% increase</p>
          </div>
          <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
        </div>
      </div>

      {/* Fastest Growth Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Fastest Growth</p>
            <p className="text-xl font-bold text-gray-900 mt-1">
              {countryData.topGrowth}
            </p>
            <p className="text-sm text-purple-600 mt-1">
              +{countryData.growthRate}% YoY
            </p>
          </div>
          <Sparkles className="w-12 h-12 text-purple-500 opacity-20" />
        </div>
      </div>

      {/* Remote Jobs Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Remote Jobs</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              {(countryData.remoteJobs / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-blue-600 mt-1">
              {Math.floor((countryData.remoteJobs / countryData.totalJobs) * 100)}% of total
            </p>
          </div>
          <Search className="w-12 h-12 text-cyan-500 opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default MetricsCards;