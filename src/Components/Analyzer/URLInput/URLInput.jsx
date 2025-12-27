import React, { useState } from 'react';

const URLInput = ({ onAnalyze, loading }) => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState({
    waitTime: 5000,
    timeout: 30000,
    fullPageScreenshot: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && !loading && isValidURL(url)) {
      onAnalyze(url, options);
    }
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="input-primary flex-1"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="btn-primary whitespace-nowrap px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || !isValidURL(url)}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              'Analyze SEO'
            )}
          </button>
        </div>

        {!isValidURL(url) && url && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-red-700">
              <span></span>
              <span>Please enter a valid URL (include http:// or https://)</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default URLInput;