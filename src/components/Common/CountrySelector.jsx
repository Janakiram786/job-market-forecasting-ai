import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

/**
 * CountrySelector Component
 * 
 * Dropdown selector for choosing which country's job market data to view
 * 
 * @param {string} selectedCountry - Currently selected country
 * @param {function} setSelectedCountry - Function to update selected country
 * @param {Array} countries - List of available countries
 */
const CountrySelector = ({ selectedCountry, setSelectedCountry, countries }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">Select Country</h2>
          <p className="text-blue-100 text-sm">
            View job market trends and forecasts by region
          </p>
        </div>
        <Globe className="w-12 h-12 opacity-30" />
      </div>
      
      <div className="mt-4">
        <div className="relative inline-block w-64">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
          >
            {countries.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <ChevronDown className="w-5 h-5 absolute right-3 top-3.5 text-gray-600 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;