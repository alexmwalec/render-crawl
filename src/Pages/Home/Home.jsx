import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  Zap, 
  Shield, 
  Search,
  Code,
  Layout,
  Menu,
  X,
  Play,
  MonitorPlay,
  FileText
} from 'lucide-react';
import analysis from "../../Images/How-to-Use-Python-to-Analyze-SEO-Data-A-Reference-Guide.webp"
import home from "../../Images/Home.jpg"

// Data (moved outside component)
const stats = [
  { value: '30s', label: 'Avg Analysis' },
  { value: '94%', label: 'Accuracy' },
  { value: '10k+', label: 'Sites Checked' },
];


const mainFeatures = [
  {
    icon: Search,
    title: 'Precision Detection',
    description: 'Find JavaScript-specific SEO issues that other tools completely miss with real browser rendering.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get comprehensive analysis in 30 seconds, not 5 minutes like other tools.'
  },
  {
    icon: Layout,
    title: 'Actionable Solutions',
    description: 'We don\'t just find problems - we tell you exactly how to fix them with step-by-step guides.'
  }
];

const steps = [
  {
    number: '1',
    title: 'Enter Your URL',
    description: 'Simply paste your website URL. No installation, no setup required.'
  },
  {
    number: '2',
    title: 'Real Browser Analysis',
    description: 'We render your page exactly like Googlebot, executing all JavaScript.'
  },
  {
    number: '3',
    title: 'Get Actionable Insights',
    description: 'Receive clear, prioritized fixes for JavaScript SEO issues.'
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">RenderCrawl</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                How It Works
              </a>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Pricing
              </Link>
              <Link to="/documentation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Docs
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                to="/analyze" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Analyze Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={analysis}
            alt="JavaScript SEO Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/80"></div>
          
          {/* Animated Shapes */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-200 text-sm font-medium">Trusted by 1,000+ SEO Pros</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                JavaScript SEO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Issues Solved
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Google sees your site differently than you think. Our real-browser rendering engine uncovers the critical JavaScript issues killing your rankings.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/analyze"
                  className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Analyze Your Site
                </Link>
                <a 
                  href="#how-it-works"
                  className="group bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border border-white/10 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 fill-current" />
                  How It Works
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className={`hidden lg:block relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
               <div className="relative rounded-2xl bg-gray-900/50 border border-white/10 p-4 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
                    <div className="flex space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="text-gray-400">&lt;!-- What Googlebot Sees --&gt;</div>
                      <div className="text-purple-400">const <span className="text-blue-400">app</span> = <span className="text-yellow-400">await</span> render();</div>
                      <div className="text-purple-400">if <span className="text-white">(</span>!content<span className="text-white">)</span> <span className="text-red-400">return 404;</span></div>
                      <div className="text-green-400 pl-4">// RenderCrawl detects this hidden content</div>
                      <div className="flex items-center gap-2 bg-blue-900/30 p-2 rounded border border-blue-500/30 mt-4">
                         <CheckCircle2 className="w-4 h-4 text-green-400" />
                         <span className="text-blue-200">Client-Side Rendering Simulated</span>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why SEO Professionals Choose RenderCrawl
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for modern JavaScript-heavy websites like React, Vue, and Angular.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Feature Image */}
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src={home}
                  alt="RenderCrawl analysis dashboard  shoeing actionable SEO insights" 
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg py-3 px-5 rounded-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold">Actionable Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Text */}
            <div className="order-1 lg:order-2 space-y-8">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              See the Difference in <span className="text-blue-600">30 Seconds</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional crawlers only see the raw HTML. RenderCrawl executes the JavaScript to show you the full DOM exactly how search engines index it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden ring-4 ring-blue-50">
              <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex justify-between items-center">
                <span className="font-bold text-green-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> RenderCrawl
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600">Full  Rendering</span>
              </div>
              <div className="relative w-full h-80 md:h-96 lg:h-80 group overflow-hidden">
                <img 
                  src={analysis}
                  alt="Fully Rendered Content" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{objectPosition: 'center 25%'}}
                />
                <div className="absolute bottom-4 right-4">
                  <div className="text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-bold text-sm">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/analyze"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
            >
              Test Your URL Now
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">How RenderCrawl Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get deep insights into your JavaScript rendering in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden">
                {/* Decorative Background Number */}
                <div className="absolute -right-6 -top-6 text-9xl font-black text-gray-50 group-hover:text-blue-50/50 transition-colors duration-500 select-none z-0">
                  {step.number}
                </div>
                
                {/* Active Border Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                    {/* Dynamic Icons based on index */}
                    {index === 0 && <Globe className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />}
                    {index === 1 && <MonitorPlay className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />}
                    {index === 2 && <FileText className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Ready to fix your <span className="text-blue-400">JavaScript SEO</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of developers and SEOs who use RenderCrawl to ensure their hard work actually gets seen by Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/analyze"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Start Free Analysis
            </Link>
            <Link 
              to="/pricing"
              className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-12 rounded-xl transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;