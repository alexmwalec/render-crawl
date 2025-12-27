import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../Components/Common/CodeBlock';

// --- Data Definitions (Updated with Diagram Tags) ---

const categories = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Learn the basics of RenderCrawl and start analyzing your JavaScript SEO.',
    articles: [
      { id: 'what-is-rendercrawl', title: 'What is RenderCrawl?', subtitle: 'Understanding JS SEO' },
      { id: 'quick-start', title: 'Quick Start Guide', subtitle: 'Analyze in 5 minutes' },
    ]
  },
  {
    id: 'features',
    name: 'Features',
    description: 'Explore the powerful rendering engine.',
    articles: [
      { id: 'javascript-rendering', title: 'Rendering Analysis', subtitle: ' CSR vs SSR detection' },
      { id: 'seo-metrics', title: 'SEO Metrics', subtitle: 'Core Web Vitals' },
    ]
  },
  {
    id: 'integrations',
    name: 'Integrations',
    description: 'Connect with your existing workflow.',
    articles: [
      { id: 'api-overview', title: 'API Overview', subtitle: 'Programmatic access' },
    ]
  }
];

const allArticles = [
  {
    id: 'what-is-rendercrawl',
    title: 'What is RenderCrawl?',
    updated: '2025-12-01',
    content: (
      <>
        <p className="mb-4">
          RenderCrawl is a specialized SEO analysis tool that focuses on JavaScript-heavy websites. Unlike traditional SEO tools that only analyze raw HTML, RenderCrawl uses real browser rendering to execute JavaScript and show you exactly what Google sees.
        </p>
        <div className="my-8">
           {/* Diagram: Visualizing the difference between text-based crawlers and render-based crawlers */}
           
        </div>
        <p>
          This ensures that Single Page Applications (SPAs) built with React, Vue, or Angular are properly indexed.
        </p>
      </>
    ),
    category: 'Getting Started'
  },
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    updated: '2025-11-28',
    content: (
      <p>Get started with RenderCrawl in just 5 minutes. Learn how to analyze your first website and interpret the results to improve your JavaScript SEO.</p>
    ),
    category: 'Getting Started',
    steps: [
      { title: 'Sign Up', description: 'Create your free account.' },
      { title: 'Enter URL', description: 'Paste your website URL into the analyzer.' },
      { title: 'Review Results', description: 'Get actionable insights.' }
    ]
  },
  {
    id: 'javascript-rendering',
    title: 'JavaScript Rendering Analysis',
    updated: '2025-11-15',
    content: (
      <>
        <p className="mb-4">
          RenderCrawl uses headless Chrome browsers to render your web pages exactly as users see them. We wait for all JavaScript to execute, including React, Vue, Angular, and other frameworks.
        </p>
        <div className="my-8">
           {/* Diagram: The timeline of Client Side Rendering (HTML load -> JS Fetch -> DOM Update) */}
           
        </div>
        <p>
          We then compare the raw HTML (source) with the rendered DOM to identify content that search engines might miss if they don't execute JavaScript.
        </p>
      </>
    ),
    category: 'Features',
    codeExample: `// Example: React component causing SEO issues
const ProductPage = () => {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    // Data loads after JS execution
    fetchProduct().then(setProduct);
  }, []);
  
  // Search engines might only see "Loading..."
  return <h1>{product ? product.name : 'Loading...'}</h1>;
};`,
    tips: [
      'Use server-side rendering (SSR) for critical content',
      'Implement structured data in the initial HTML'
    ]
  },
  {
    id: 'api-overview',
    title: 'API Overview',
    updated: '2025-10-11',
    content: (
      <>
        <p className="mb-4">
          The RenderCrawl API allows you to programmatically analyze websites and integrate SEO testing into your CI/CD pipeline.
        </p>
        <div className="my-8">
           {/* Diagram: API Request/Response Cycle for an analysis job */}
           
        </div>
      </>
    ),
    category: 'Integrations',
    codeExample: `curl -X POST https://api.rendercrawl.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{ "url": "https://example.com" }'`,
    tips: ['Keep API keys secure', 'Use webhooks for async results']
  }
];

// --- Components ---

const ArticleSection = ({ article }) => {
  return (
    <section id={article.id} className="scroll-mt-24 mb-12">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Article Header */}
        <div className="bg-gray-50/50 border-b border-gray-100 p-8 pb-6">
          <div className="flex items-center gap-4 mb-4">
             <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
               {article.category}
             </span>
             <span className="text-sm text-gray-500">5 min read</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{article.title}</h3>
          {article.updated && (
            <div className="text-sm text-gray-400 mt-1">Updated {article.updated}</div>
          )}
        </div>

        {/* Article Content */}
        <div className="p-8">
          <div className="prose prose-lg prose-slate max-w-none text-gray-600">
            {article.content}
          </div>

          {article.steps && (
            <div className="mt-8 grid gap-4">
              {article.steps.map((step, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {article.codeExample && (
            <CodeBlock code={article.codeExample} filename="example.js" />
          )}

          {article.tips && (
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3">Pro Tips</h4>
              <ul className="space-y-2">
                {article.tips.map((tip, index) => (
                  <li key={index} className="text-blue-800 text-sm">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Documentation = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleId, setActiveArticleId] = useState(null);
  const searchRef = useRef(null);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  const q = searchQuery.trim().toLowerCase();

  const matchesSearch = (article) => {
    if (!q) return true;
    const hay = [
      article.title,
      article.id,
      article.category,
      article.codeExample || '',
      (article.steps || []).map(s => s.title + ' ' + s.description).join(' '),
      (article.tips || []).join(' ')
    ].join(' ').toLowerCase();
    return hay.includes(q);
  };

  // If searching, show global matches; otherwise show articles for active category
  const displayArticles = q
    ? allArticles.filter(matchesSearch)
    : allArticles.filter(a => activeCategoryData?.articles.some(catArt => catArt.id === a.id));

  // Keyboard shortcut for focusing search (Cmd/Ctrl+K) and escape to clear
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
      if (e.key === 'Escape') {
        if (document.activeElement === searchRef.current) {
          searchRef.current.blur();
          setSearchQuery('');
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Track headings in view and highlight TOC using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveArticleId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    const nodes = document.querySelectorAll('section[id]');
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [displayArticles]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Hero Header */}
      <div className="bg-[#0B1120] relative overflow-hidden pb-12 pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Documentation
            </h1>
            <p className="text-xl text-gray-400 mb-10 font-light">
              Master JavaScript SEO with our guides, API references, and best practices.
            </p>
            
            {/* Modern Search Bar */}
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative flex items-center bg-white rounded-xl shadow-2xl">
                <input
                  type="text"
                  placeholder="Search guides, API, resources..."
                  ref={searchRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl focus:outline-none text-gray-900 placeholder-gray-400 text-lg"
                />
                <div className="hidden sm:flex items-center gap-2 pr-4">
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-xs text-gray-500 px-2 py-1">Clear</button>
                  )}
                  <kbd className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded border border-gray-200">⌘K</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-24">
              <nav className="space-y-6">
                {categories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`text-xs font-bold uppercase tracking-wider mb-3 ml-2 ${
                        activeCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      {category.name}
                    </button>
                    <div className="space-y-1">
                      {category.articles.map((article) => (
                        <a
                          key={article.id}
                          href={`#${article.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(article.id);
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              setActiveArticleId(article.id);
                              
                            }
                          }}
                          className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            activeArticleId === article.id ? 'bg-blue-50 text-blue-600' : activeCategory === category.id ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          {article.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-gray-900 rounded-xl p-4 text-white">
                  <h4 className="font-bold text-sm mb-2">Need help?</h4>
                  <p className="text-xs text-gray-400 mb-3">Can't find what you're looking for?</p>
                  <Link to="/contact" className="block w-full text-center py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition-colors">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 pb-24">
            {/* Category Intro Card */}
            <div className="mb-10 mt-8 lg:mt-0">
              {q ? (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Search results</h2>
                  <p className="text-sm text-gray-500">Showing <strong className="text-gray-900">{displayArticles.length}</strong> result{displayArticles.length !== 1 ? 's' : ''} for <span className="italic">"{searchQuery}"</span></p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{activeCategoryData?.name}</h2>
                  <p className="text-lg text-gray-600">{activeCategoryData?.description}</p>
                </>
              )}
            </div>

            {/* Articles List */}
            <div className="space-y-8">
              {displayArticles.length > 0 ? (
                displayArticles.map((article) => (
                  <ArticleSection key={article.id} article={article} />
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                  {q ? (
                    <>
                      <h3 className="text-lg font-medium text-gray-900">No results found</h3>
                      <p className="text-gray-500">Try different keywords or browse the categories on the left. If you need help, <Link to="/contact" className="text-blue-600">contact support</Link>.</p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900">Content Coming Soon</h3>
                      <p className="text-gray-500">We are currently writing the guides for this section.</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Table of Contents (Hidden on mobile) */}
          <div className="hidden xl:block w-64 flex-shrink-0">
             <div className="sticky top-24 pl-8 border-l border-gray-200">
                <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">On this page</h5>
                <ul className="space-y-3 text-sm">
                  {displayArticles.map(article => (
                    <li key={article.id}>
                      <a
                        href={`#${article.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(article.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setActiveArticleId(article.id);
                        }}
                        className={`block transition-colors ${activeArticleId === article.id ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-blue-600'}`}
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Documentation;