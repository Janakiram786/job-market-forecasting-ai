/**
 * Data Generation Utilities
 * 
 * Generates realistic job market data with trends and randomization
 * for visualization purposes. In production, this would be replaced
 * with API calls to real job market data sources.
 */

/**
 * Generate job posting data for a specific country
 * 
 * @param {Object} countryData - Country-specific configuration
 * @returns {Array} Array of monthly job data objects
 */
export const generateJobDataForCountry = (countryData) => {
  // Define all job roles to track
  const roles = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'UX Designer',
    'DevOps Engineer',
    'AI/ML Engineer',
    'Cloud Architect',
    'Cybersecurity Analyst'
  ];
  
  // Generate data for each month
  return countryData.months.map((month, idx) => {
    // Determine if this is forecast data (after month 12)
    const isForecast = idx >= 12;
    
    // Initialize base object for this month
    const base = {
      month,
      isForecast,
      total: 0
    };
    
    // Generate job counts for each role
    roles.forEach(role => {
      let value;
      const mult = countryData.multiplier;
      
      // Role-specific growth patterns with realistic trends
      if (role === 'AI/ML Engineer') {
        // High growth, exponential-ish curve
        value = Math.floor((5000 + idx * 450 + Math.random() * 800) * mult);
      } else if (role === 'Data Scientist') {
        // Steady high demand
        value = Math.floor((8000 + idx * 300 + Math.random() * 600) * mult);
      } else if (role === 'Software Engineer') {
        // Highest absolute numbers, moderate growth
        value = Math.floor((15000 + idx * 200 + Math.random() * 1000) * mult);
      } else if (role === 'Cloud Architect') {
        // Strong growth, emerging role
        value = Math.floor((4000 + idx * 380 + Math.random() * 500) * mult);
      } else if (role === 'Cybersecurity Analyst') {
        // Consistent demand with steady growth
        value = Math.floor((6000 + idx * 320 + Math.random() * 600) * mult);
      } else {
        // Other roles: moderate baseline with slow growth
        value = Math.floor((3000 + idx * 150 + Math.random() * 400) * mult);
      }
      
      // Assign value to this role
      base[role] = value;
      // Add to monthly total
      base.total += value;
    });
    
    return base;
  });
};

/**
 * Calculate growth percentage between two values
 * 
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Growth percentage
 */
export const calculateGrowth = (current, previous) => {
  if (previous === 0) return 0;
  return Math.round(((current - previous) / previous) * 100);
};

/**
 * Format large numbers with K, M suffixes
 * 
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
};

/**
 * Get color based on growth rate
 * 
 * @param {number} growth - Growth percentage
 * @returns {string} Tailwind color class
 */
export const getGrowthColor = (growth) => {
  if (growth >= 20) return 'text-green-600';
  if (growth >= 10) return 'text-blue-600';
  if (growth >= 0) return 'text-gray-600';
  return 'text-red-600';
};