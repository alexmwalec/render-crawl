import { useState, useCallback } from 'react';
import { crawlsAPI } from '../Services/api';

export const useCrawler = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);

  const analyzeURL = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);
    setProgress(0);
    
    try {
      setProgress(10); // Starting
      
      const response = await crawlsAPI.analyzeURL(url, options);
      
      setProgress(100); // Complete
      
      if (response.data.success) {
        setResults(response.data.data);
        return response.data.data;
      } else {
        throw new Error(response.data.error || 'Analysis failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || 'Unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setResults(null);
    setProgress(0);
  }, []);

  return {
    loading,
    error,
    results,
    progress,
    analyzeURL,
    reset
  };
};