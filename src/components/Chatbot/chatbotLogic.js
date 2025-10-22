/**
 * Chatbot Logic
 * 
 * Handles natural language query processing and generates
 * context-aware responses based on selected country data
 */

/**
 * Generate bot response based on user query and country context
 * 
 * @param {string} query - User's question (lowercase)
 * @param {string} country - Currently selected country
 * @param {Object} data - Country-specific job market data
 * @returns {string} Formatted bot response
 */
export const generateBotResponse = (query, country, data) => {
  
  // Country-specific or general market overview
  if (query.includes('country') || query.includes(country.toLowerCase())) {
    return `📍 ${country} Job Market Overview:\n\n• Total Jobs: ${data.totalJobs.toLocaleString()}\n• Avg Tech Salary: ${data.currency}${data.avgSalary.toLocaleString()}\n• Remote Positions: ${data.remoteJobs.toLocaleString()}\n• Fastest Growing: ${data.topGrowth} (+${data.growthRate}%)\n\nThe ${country} market shows strong growth in tech sectors with emphasis on ${data.skills[0].skill}.`;
  }
  
  // AI/ML specific queries
  if (query.includes('ai') || query.includes('ml') || query.includes('machine learning')) {
    return `🚀 AI/ML Engineering in ${country}:\n\n• Growth rate: +${data.growthRate}% year-over-year\n• Average salary: ${data.currency}${Math.floor(data.avgSalary * 1.15).toLocaleString()}\n• Key skills: Python, TensorFlow, PyTorch, NLP\n• Top industries hiring: ${data.industries[0].industry}, ${data.industries[1].industry}\n\nAI roles are among the fastest growing in the tech sector.`;
  }
  
  // Salary and compensation queries
  if (query.includes('salary') || query.includes('pay') || query.includes('compensation')) {
    return `💰 Salary insights for ${country}:\n\n• Software Engineer: ${data.currency}${Math.floor(data.avgSalary * 0.78).toLocaleString()} - ${data.currency}${Math.floor(data.avgSalary * 1.16).toLocaleString()}\n• Data Scientist: ${data.currency}${Math.floor(data.avgSalary * 0.85).toLocaleString()} - ${data.currency}${Math.floor(data.avgSalary * 1.23).toLocaleString()}\n• AI/ML Engineer: ${data.currency}${Math.floor(data.avgSalary * 1.02).toLocaleString()} - ${data.currency}${Math.floor(data.avgSalary * 1.41).toLocaleString()}\n\nSalaries vary by experience and location.`;
  }
  
  // Skills and learning recommendations
  if (query.includes('skill') || query.includes('learn')) {
    return `📚 Most in-demand skills in ${country}:\n\n${data.skills.slice(0, 5).map((s, i) => `${i + 1}. ${s.skill} (${s.demand.toLocaleString()} jobs, +${s.growth}%)`).join('\n')}\n\nFocus on combining ${data.skills[0].skill} with cloud technologies for maximum career growth.`;
  }
  
  // Industry and sector queries
  if (query.includes('industry') || query.includes('sector')) {
    return `🏢 Top hiring industries in ${country}:\n\n${data.industries.map((ind, i) => `${i + 1}. ${ind.industry}: ${ind.jobs.toLocaleString()} jobs (forecasted +${ind.growth}%)`).join('\n')}\n\n${data.industries[0].industry} leads with the highest number of openings.`;
  }
  
  // Remote work queries
  if (query.includes('remote') || query.includes('work from home')) {
    return `🏠 Remote work in ${country}:\n\n• ${data.remoteJobs.toLocaleString()} remote positions available\n• ${Math.floor((data.remoteJobs / data.totalJobs) * 100)}% of tech jobs offer remote options\n• Top remote roles: Software Engineer, Data Scientist, Product Manager\n\nRemote work adoption continues to grow.`;
  }
  
  // Default response with helpful suggestions
  return `🤖 I can help you with info about ${country}:\n\n• Job trends and forecasts\n• Salary ranges\n• In-demand skills\n• Industry insights\n• Remote opportunities\n\nTry asking: "What are trending skills?" or "What is the average salary?"`;
};

/**
 * Generate suggested questions for the chat interface
 * 
 * @param {string} country - Currently selected country
 * @returns {Array} Array of suggested question strings
 */
export const getSuggestedQuestions = (country) => {
  return [
    'What are trending AI jobs?',
    'Average salary?',
    'Best skills to learn?',
    'Remote opportunities?'
  ];
};

/**
 * Detect if query requires country-specific data
 * 
 * @param {string} query - User's question
 * @returns {boolean} True if query needs country context
 */
export const requiresCountryContext = (query) => {
  const contextKeywords = [
    'salary', 'pay', 'jobs', 'industry', 'skill',
    'remote', 'demand', 'growth', 'forecast', 'trend'
  ];
  
  return contextKeywords.some(keyword => query.toLowerCase().includes(keyword));
};