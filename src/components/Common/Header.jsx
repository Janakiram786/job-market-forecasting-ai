import React from 'react';
import { TrendingUp, MessageSquare, BarChart3 } from 'lucide-react';

/**
 * Header Component
 * 
 * Main navigation header with app branding and tab switching
 * 
 * @param {string} activeTab - Currently active tab ('dashboard' or 'chatbot')
 * @param {function} setActiveTab - Function to change active tab
 */
const Header = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Global Job Market Forecasting AI
              </h1>
              <p className="text-sm text-gray-500">
                AI-powered insights across multiple countries
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('chatbot')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === 'chatbot'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;