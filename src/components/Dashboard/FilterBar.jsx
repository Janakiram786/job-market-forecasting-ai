import React from 'react';
import { Filter } from 'lucide-react';

/**
 * FilterBar Component
 * 
 * Provides filtering controls for dashboard visualizations
 * Includes role filter, timeframe selector, and data legend
 * 
 * @param {string} selectedRole - Currently selected job role filter
 * @param {function} setSelectedRole - Function to update role filter
 * @param {string} selectedTimeframe - Selected time period (6 or 12 months)
 * @param {function} setSelectedTimeframe - Function to update timeframe
 * @param {Array} roles - List of available job roles
 */
const FilterBar = ({ 
  selectedRole, 
  setSelectedRole, 
  selectedTimeframe, 
  setSelectedTimeframe,
  roles 
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border flex gap-4 items-center flex-wrap">
      {/* Filter Icon */}
      <Filter className="w-5 h-5 text-gray-400" />
      
      {/* Role Selector */}
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {roles.map(role => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      
      {/* Timeframe Selector */}
      <select
        value={selectedTimeframe}
        onChange={(e) => setSelectedTimeframe(e.target.value)}
        className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="6 months">Last 6 Months</option>
        <option value="12 months">Last 12 Months</option>
      </select>
      
      {/* Legend */}
      <div className="flex items-center gap-2 ml-auto">
        <div className="w-3 h-3 bg-blue-600 rounded"></div>
        <span className="text-sm text-gray-600">Historical</span>
        <div className="w-3 h-3 bg-purple-600 rounded ml-4"></div>
        <span className="text-sm text-gray-600">Forecast</span>
      </div>
    </div>
  );
};

export default FilterBar;