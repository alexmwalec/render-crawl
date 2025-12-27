import React, { useState } from 'react';
import Issues from '../Issues/Issues';

const Results = ({ results, onNewAnalysis }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!results) return null;

  const {
    url,
    analyzedAt,
    renderedHTML,
    screenshot,
    issues,
    seoData,
    performanceMetrics,
    technicalSeo
  } = results;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'issues', label: 'Issues', icon: '🚨', count: issues.length },
    { id: 'seo', label: 'SEO Data', icon: '🔍' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'technical', label: 'Technical', icon: '🔧' },
    { id: 'rendered', label: 'Rendered HTML', icon: '📄' }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              SEO Analysis Results
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="font-mono bg-gray-100 px-3 py-1 rounded-lg text-sm">
                {url}
              </span>
              <span>Analyzed: {new Date(analyzedAt).toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onNewAnalysis}
              className="btn-secondary"
            >
              New Analysis
            </button>
            <button className="btn-primary">
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {seoData?.score || 0}/100
          </div>
          <div className="text-gray-600">SEO Score</div>
          <div className={`mt-2 text-xs font-medium px-2 py-1 rounded-full ${getScoreColor(seoData?.score || 0)}`}>
            {seoData?.score >= 90 ? 'Excellent' : seoData?.score >= 70 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
          <div className="text-3xl mb-2">🚨</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {issues.filter(issue => issue.severity === 'critical').length}
          </div>
          <div className="text-gray-600">Critical Issues</div>
          <div className="mt-2 text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-700">
            Needs Attention
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {performanceMetrics?.performanceScore || 0}/100
          </div>
          <div className="text-gray-600">Performance</div>
          <div className={`mt-2 text-xs font-medium px-2 py-1 rounded-full ${getScoreColor(performanceMetrics?.performanceScore || 0)}`}>
            {performanceMetrics?.performanceScore >= 90 ? 'Fast' : performanceMetrics?.performanceScore >= 70 ? 'Moderate' : 'Slow'}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
          <div className="text-3xl mb-2">🔧</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {technicalSeo?.score || 0}/100
          </div>
          <div className="text-gray-600">Technical SEO</div>
          <div className={`mt-2 text-xs font-medium px-2 py-1 rounded-full ${getScoreColor(technicalSeo?.score || 0)}`}>
            {technicalSeo?.score >= 90 ? 'Optimal' : technicalSeo?.score >= 70 ? 'Good' : 'Needs Work'}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && <OverviewTab results={results} />}
          {activeTab === 'issues' && <Issues issues={issues} />}
          {activeTab === 'seo' && <SEOTab seoData={seoData} />}
          {activeTab === 'performance' && <PerformanceTab metrics={performanceMetrics} />}
          {activeTab === 'technical' && <TechnicalTab technicalSeo={technicalSeo} />}
          {activeTab === 'rendered' && <RenderedTab renderedHTML={renderedHTML} screenshot={screenshot} />}
        </div>
      </div>
    </div>
  );
};

// Tab Components
const OverviewTab = ({ results }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Findings</h3>
        <div className="space-y-3">
          {results.issues.slice(0, 5).map((issue, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className={`text-lg ${issue.severity === 'critical' ? 'text-red-500' : 'text-yellow-500'}`}>
                {issue.severity === 'critical' ? '🚨' : '⚠️'}
              </span>
              <div>
                <div className="font-medium text-gray-900">{issue.title}</div>
                <div className="text-sm text-gray-600">{issue.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Wins</h3>
        <div className="space-y-3">
          {results.issues
            .filter(issue => issue.fixDifficulty === 'easy')
            .slice(0, 3)
            .map((issue, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-green-500">✅</span>
                <div>
                  <div className="font-medium text-gray-900">{issue.title}</div>
                  <div className="text-sm text-gray-600">{issue.suggestion}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);

const SEOTab = ({ seoData }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Meta Information</h4>
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-gray-600">Title Length</dt>
            <dd className="font-medium">{seoData?.titleLength || 0} characters</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Description Length</dt>
            <dd className="font-medium">{seoData?.descriptionLength || 0} characters</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">H1 Tags</dt>
            <dd className="font-medium">{seoData?.h1Count || 0}</dd>
          </div>
        </dl>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Content Analysis</h4>
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-gray-600">Word Count</dt>
            <dd className="font-medium">{seoData?.wordCount || 0}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Text/HTML Ratio</dt>
            <dd className="font-medium">{seoData?.textRatio || '0%'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Images Count</dt>
            <dd className="font-medium">{seoData?.imagesCount || 0}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
);

const PerformanceTab = ({ metrics }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: 'Largest Contentful Paint', value: metrics?.lcp, threshold: 2500, unit: 'ms' },
        { label: 'First Input Delay', value: metrics?.fid, threshold: 100, unit: 'ms' },
        { label: 'Cumulative Layout Shift', value: metrics?.cls, threshold: 0.1, unit: '' }
      ].map((metric, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {metric.value || 'N/A'}
            <span className="text-sm text-gray-600">{metric.unit}</span>
          </div>
          <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
            (metric.value || 0) <= metric.threshold 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {(metric.value || 0) <= metric.threshold ? 'Good' : 'Needs Improvement'}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TechnicalTab = ({ technicalSeo }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {technicalSeo?.checks?.map((check, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-700">{check.name}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            check.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {check.passed ? 'PASS' : 'FAIL'}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const RenderedTab = ({ renderedHTML, screenshot }) => (
  <div className="space-y-6">
    {screenshot && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Rendered Screenshot</h4>
        <img 
          src={screenshot} 
          alt="Rendered page" 
          className="rounded-lg border border-gray-200 max-w-full h-auto"
        />
      </div>
    )}
    
    <div>
      <h4 className="font-semibold text-gray-900 mb-3">Rendered HTML</h4>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm max-h-96 overflow-y-auto">
        {renderedHTML}
      </pre>
    </div>
  </div>
);

export default Results;