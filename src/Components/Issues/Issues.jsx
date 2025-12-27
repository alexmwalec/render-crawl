import React, { useState } from 'react';

const Issues = ({ issues }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('severity');

  const filteredIssues = issues.filter(issue => {
    if (filter === 'all') return true;
    return issue.severity === filter;
  });

  const sortedIssues = [...filteredIssues].sort((a, b) => {
    if (sortBy === 'severity') {
      const severityOrder = { critical: 0, warning: 1, info: 2 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    }
    if (sortBy === 'difficulty') {
      const difficultyOrder = { easy: 0, medium: 1, hard: 2 };
      return difficultyOrder[a.fixDifficulty] - difficultyOrder[b.fixDifficulty];
    }
    return 0;
  });

  const severityCounts = {
    critical: issues.filter(i => i.severity === 'critical').length,
    warning: issues.filter(i => i.severity === 'warning').length,
    info: issues.filter(i => i.severity === 'info').length
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'info': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters and Stats */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Issues ({issues.length})
            </button>
            
            {Object.entries(severityCounts).map(([severity, count]) => (
              <button
                key={severity}
                onClick={() => setFilter(severity)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  filter === severity
                    ? getSeverityColor(severity)
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{getSeverityIcon(severity)}</span>
                <span>
                  {severity.charAt(0).toUpperCase() + severity.slice(1)} ({count})
                </span>
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="severity">Sort by Severity</option>
            <option value="difficulty">Sort by Fix Difficulty</option>
          </select>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-4">
        {sortedIssues.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Issues Found!
            </h3>
            <p className="text-gray-600">
              Great job! Your website is in excellent shape.
            </p>
          </div>
        ) : (
          sortedIssues.map((issue, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`p-4 border-l-4 ${getSeverityColor(issue.severity).split(' ')[2]}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-2xl flex-shrink-0">
                      {getSeverityIcon(issue.severity)}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {issue.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {issue.description}
                      </p>
                      
                      {issue.impact && (
                        <div className="mb-3">
                          <span className="font-medium text-gray-700">Impact: </span>
                          <span className="text-gray-600">{issue.impact}</span>
                        </div>
                      )}
                      
                      {issue.suggestion && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <span className="font-medium text-blue-700">💡 Suggestion: </span>
                          <span className="text-blue-600">{issue.suggestion}</span>
                        </div>
                      )}
                      
                      {issue.codeExample && (
                        <details className="mt-3">
                          <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                            View Code Example
                          </summary>
                          <pre className="mt-2 bg-gray-900 text-gray-100 rounded p-3 text-sm overflow-x-auto">
                            {issue.codeExample}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(issue.severity)}`}>
                      {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                    </span>
                    
                    {issue.fixDifficulty && (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(issue.fixDifficulty)}`}>
                        Fix: {issue.fixDifficulty.charAt(0).toUpperCase() + issue.fixDifficulty.slice(1)}
                      </span>
                    )}
                    
                    {issue.selector && (
                      <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono">
                        {issue.selector}
                      </code>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      {sortedIssues.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="text-2xl font-bold text-red-600 mb-1">
                {severityCounts.critical}
              </div>
              <div className="text-red-700 font-medium">Critical Issues</div>
              <div className="text-red-600 text-sm">Fix immediately</div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {severityCounts.warning}
              </div>
              <div className="text-yellow-700 font-medium">Warnings</div>
              <div className="text-yellow-600 text-sm">Address soon</div>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {severityCounts.info}
              </div>
              <div className="text-blue-700 font-medium">Suggestions</div>
              <div className="text-blue-600 text-sm">Consider improving</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Issues;