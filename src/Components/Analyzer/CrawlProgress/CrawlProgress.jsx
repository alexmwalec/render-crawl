import React, { useEffect } from 'react';

const CrawlProgress = ({ progress, status, currentStep, estimatedTime }) => {
  const steps = [
    { id: 'init', label: 'Initializing crawler', description: 'Setting up analysis environment' },
    { id: 'fetch', label: 'Fetching page', description: 'Downloading HTML content' },
    { id: 'render', label: 'Rendering JavaScript', description: 'Executing client-side scripts' },
    { id: 'analyze', label: 'Analyzing content', description: 'Extracting SEO elements' },
    { id: 'audit', label: 'Running audits', description: 'Checking best practices' },
    { id: 'report', label: 'Generating report', description: 'Compiling results' }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            {progress === 100 ? (
              <span className="text-2xl"></span>
            ) : (
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {progress === 100 ? 'Analysis Complete!' : 'Analyzing Your Website'}
        </h3>
        <p className="text-gray-600">
          {progress === 100 
            ? 'Your SEO report is ready!'
            : 'We\'re examining your site for JavaScript SEO issues...'
          }
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{status || 'Processing...'}</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              index < currentStepIndex 
                ? 'bg-green-500 text-white' 
                : index === currentStepIndex
                ? 'bg-blue-600 text-white animate-pulse'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {index < currentStepIndex ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            
            <div className="flex-1">
              <div className={`font-medium ${
                index <= currentStepIndex ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {step.label}
              </div>
              <div className="text-sm text-gray-500">
                {step.description}
              </div>
            </div>

            {index === currentStepIndex && progress < 100 && (
              <div className="animate-spin">
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {estimatedTime && progress < 100 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-blue-700 text-sm">
            Estimated time remaining: <strong>{estimatedTime}</strong>
          </p>
        </div>
      )}

      {progress === 100 && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
          <p className="text-green-700 font-medium">
            Analysis completed successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default CrawlProgress;