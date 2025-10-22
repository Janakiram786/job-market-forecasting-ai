import React, { useState, useEffect } from 'react';

// Import data and utilities
import { countryJobData, countries, roles } from './data/countryJobData';
import { generateJobDataForCountry } from './utils/dataGenerator';
import { generateBotResponse } from './components/Chatbot/chatbotLogic';

// Import components
import Header from './components/Common/Header';
import CountrySelector from './components/Common/CountrySelector';
import MetricsCards from './components/Dashboard/MetricsCards';
import FilterBar from './components/Dashboard/FilterBar';
import TrendChart from './components/Charts/TrendChart';
import RoleTrendChart from './components/Charts/RoleTrendChart';
import SkillsChart from './components/Charts/SkillsChart';
import IndustryPieChart from './components/Charts/IndustryPieChart';
import ForecastChart from './components/Charts/ForecastChart';
import Chatbot from './components/Chatbot/Chatbot';

/**
 * Main App Component
 * 
 * Root component managing global state and coordinating all sub-components
 * Handles tab switching, country selection, and chatbot interactions
 */
const App = () => {
  // Tab navigation state
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Country and data state
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [jobData, setJobData] = useState([]);
  
  // Filter state
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedTimeframe, setSelectedTimeframe] = useState('12 months');
  
  // Chatbot state
  const [chatMessages, setChatMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hello! I am your AI job market assistant. Ask me about job trends, salary forecasts, skill demands, or career advice!' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Generate job data when country changes
  useEffect(() => {
    const countryData = countryJobData[selectedCountry];
    setJobData(generateJobDataForCountry(countryData));
  }, [selectedCountry]);

  // Get current country data
  const currentCountryData = countryJobData[selectedCountry];

  // Filter data based on timeframe
  const filteredData = selectedTimeframe === '6 months' 
    ? jobData.slice(-6) 
    : jobData;

  /**
   * Handle chat message submission
   */
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMsg = { type: 'user', text: inputMessage };
    setChatMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Generate bot response after delay
    setTimeout(() => {
      const response = generateBotResponse(
        inputMessage.toLowerCase(),
        selectedCountry,
        currentCountryData
      );
      setChatMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header with Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Country Selector */}
            <CountrySelector
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              countries={countries}
            />

            {/* Metrics Cards */}
            <MetricsCards countryData={currentCountryData} />

            {/* Filter Bar */}
            <FilterBar
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              selectedTimeframe={selectedTimeframe}
              setSelectedTimeframe={setSelectedTimeframe}
              roles={roles}
            />

            {/* Trend Chart */}
            <TrendChart data={filteredData} country={selectedCountry} />

            {/* Role Trend Chart */}
            <RoleTrendChart data={filteredData} />

            {/* Skills and Industry Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SkillsChart 
                skills={currentCountryData.skills} 
                country={selectedCountry} 
              />
              <IndustryPieChart industries={currentCountryData.industries} />
            </div>

            {/* Forecast Comparison Chart */}
            <ForecastChart industries={currentCountryData.industries} />

            {/* Key Insights Panel */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3">
                Key Insights for {selectedCountry}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Hottest Skill</p>
                  <p className="text-sm">
                    {currentCountryData.skills[0].skill} is in explosive demand with{' '}
                    {currentCountryData.skills[0].demand.toLocaleString()} job openings and{' '}
                    {currentCountryData.skills[0].growth}% growth.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Top Growing Industry</p>
                  <p className="text-sm">
                    {currentCountryData.industries[0].industry} leads with{' '}
                    {currentCountryData.industries[0].jobs.toLocaleString()} current jobs, projected to reach{' '}
                    {currentCountryData.industries[0].forecast.toLocaleString()}.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Salary Outlook</p>
                  <p className="text-sm">
                    Average tech salary is {currentCountryData.currency}
                    {currentCountryData.avgSalary.toLocaleString()} with 12% YoY increase expected to continue through 2025.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Remote Work</p>
                  <p className="text-sm">
                    {Math.floor((currentCountryData.remoteJobs / currentCountryData.totalJobs) * 100)}% of positions offer remote work, 
                    totaling {currentCountryData.remoteJobs.toLocaleString()} opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chatbot Tab */}
        {activeTab === 'chatbot' && (
          <Chatbot
            chatMessages={chatMessages}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleChatSubmit={handleChatSubmit}
            isTyping={isTyping}
            selectedCountry={selectedCountry}
          />
        )}
      </div>
    </div>
  );
};

export default App;