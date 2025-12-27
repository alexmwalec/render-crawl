import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">RenderCrawl</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/analyze" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Analyzer
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Pricing
            </Link>
          </div>

          <Link to="/analyze" className="btn-primary text-sm">
            Analyze Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;