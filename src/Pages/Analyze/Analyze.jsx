import React from 'react';
import { useCrawler } from '../../Hooks/useCrawler';
import URLInput from '../../Components/Analyzer/URLInput/URLInput';
import CrawlProgress from '../../Components/Analyzer/CrawlProgress/CrawlProgress';



const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const BulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Analyze = () => {
  const { loading, error, results, progress, analyzeURL, reset } = useCrawler();

  const handleAnalyze = async (url) => {
    
    await analyzeURL(url); 
  };

  const handleNewAnalysis = () => {
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
            SEO Intelligence Tool
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            JavaScript SEO <span className="text-blue-600">Analyzer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Uncover how search engines render your modern web app. 
            Get detailed insights and actionable recommendations in 
            <span className="font-semibold text-blue-600"> under 30 seconds</span>.
          </p>
        </div>

        {/* Main Analyzer Card */}
        <div className="relative">
          {/* Decorative blur element behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-20"></div>
          
          <div className="relative bg-white shadow-2xl shadow-blue-900/10 rounded-2xl p-8 md:p-12 mb-16 border border-slate-100">
            
            {!results && !error && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-slate-800">Enter your website URL to begin</h3>
                </div>
                
                <URLInput onAnalyze={handleAnalyze} loading={loading} />
                
                {loading && (
                  <div className="mt-8 pt-8 border-t border-slate-100">
                     <CrawlProgress progress={progress} currentStep={getCurrentStep(progress)} />
                  </div>
                )}
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center animate-fade-in max-w-3xl mx-auto">
                <div className="text-red-600 text-5xl mb-4">
                  <span role="img" aria-label="alert"></span>
                </div>
                <h3 className="text-red-900 text-2xl font-bold mb-2">Analysis Failed</h3>
                <p className="text-red-700 mb-8">{error}</p>
                <button
                  onClick={handleNewAnalysis}
                  className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg shadow-red-600/30
                           hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                           transition-all duration-200"
                >
                  Try Another URL
                </button>
              </div>
            )}

            {results && (
              <div className="animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-slate-200">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Analysis Complete</h2>
                    <p className="text-slate-500 mt-1">Here is your comprehensive report.</p>
                  </div>
                  <button
                    onClick={handleNewAnalysis}
                    className="mt-4 md:mt-0 px-6 py-2.5 bg-blue-50 text-blue-700 font-medium rounded-lg border border-blue-200
                             hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 flex items-center"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                   New Analysis
                  </button>
                </div>
                
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators - Redesigned with Blue Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <LockIcon />
            <h3 className="font-bold text-slate-900 text-lg mb-2 text-center">Secure & Private</h3>
            <p className="text-slate-600 text-center leading-relaxed">Your data is processed securely and is never stored or shared with third parties.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <BoltIcon />
            <h3 className="font-bold text-slate-900 text-lg mb-2 text-center">Blazing Fast</h3>
            <p className="text-slate-600 text-center leading-relaxed">Our optimized crawler engine completes full rendering analysis in under 30 seconds.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <BulbIcon />
            <h3 className="font-bold text-slate-900 text-lg mb-2 text-center">Actionable Insights</h3>
            <p className="text-slate-600 text-center leading-relaxed">We don't just dump data. We provide clear, prioritized recommendations.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

function getCurrentStep(progress) {
  if (progress < 25) return 'Initializing secure browser environment...';
  if (progress < 50) return 'Loading and rendering page content...';
  if (progress < 75) return 'Executing all dynamic JavaScript...';
  return 'Analyzing SEO factors and generating report...';
}

export default Analyze;