import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Zap, 
  Wrench, 
  Users, 
  Shield, 
  Rocket, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Search,
  BarChart2
} from 'lucide-react';
import aboutus from "../../Images/About US.jpg"
import vision from "../../Images/Vision.jpg"
import { Link } from 'react-router-dom';

// --- Data ---
const missionPoints = [
  'Make JavaScript SEO testing accessible to everyone',
  'Provide accurate, actionable insights in seconds',
  'Bridge the gap between developers and SEO professionals',
  'Stay ahead of Google\'s evolving rendering capabilities',
  'Build tools that actually work for modern web frameworks'
];

const storyTimeline = [
  {
    title: 'The Frustration Begins',
    description: 'While working as senior SEO consultants, we constantly struggled with traditional SEO tools that couldn\'t properly analyze JavaScript-rendered content.',
    details: [
      'Clients losing rankings due to rendering issues',
      'Manual testing taking hours per page',
      'No reliable way to see what Google actually sees'
    ]
  },
  {
    title: 'The Breakthrough',
    description: 'We built an internal tool that used real browser rendering to analyze JavaScript execution. The results were eye-opening.',
    details: [
      'Discovered critical content invisible to search engines',
      'Found meta tags being modified by client-side JavaScript',
      'Identified lazy-loading issues affecting indexing'
    ]
  },
  {
    title: 'RenderCrawl is Born',
    description: 'We realized this tool could help thousands of other SEO professionals and developers facing the same challenges.',
    details: [
      'Launched private beta with 100+ agencies',
      'Refined based on real-world feedback',
      'Built scalable infrastructure for mass analysis'
    ]
  },
  {
    title: 'Today & Beyond',
    description: 'RenderCrawl now helps thousands of businesses worldwide ensure their JavaScript-powered sites get the search visibility they deserve.',
    details: [
      'Expanding to support all major JavaScript frameworks',
      'Building advanced analytics and monitoring features',
      'Creating educational resources for the community'
    ]
  }
];

const values = [
  {
    icon: Target,
    title: 'Accuracy First',
    description: 'We prioritize precise, reliable results over flashy features.',
    manifestations: [
      'Real browser rendering analysis',
      'Continuous algorithm improvements',
      'Transparent about limitations'
    ]
  },
  {
    icon: Zap,
    title: 'Speed Matters',
    description: 'SEO moves fast, and so should your tools.',
    manifestations: [
      '30-second average analysis time',
      'Instant result processing',
      'Rapid feature deployment'
    ]
  },
  {
    icon: Wrench,
    title: 'Actionable Insights',
    description: 'We don\'t just find problems - we help you fix them.',
    manifestations: [
      'Step-by-step solutions',
      'Developer-friendly explanations',
      'Priority-based recommendations'
    ]
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'We believe in growing together with the SEO community.',
    manifestations: [
      'Free educational content',
      'Active in SEO forums and events',
      'Feature requests drive development'
    ]
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Your data is yours, and we protect it fiercely.',
    manifestations: [
      'GDPR & CCPA compliant',
      'Enterprise-grade security',
      'Transparent data policies'
    ]
  },
  {
    icon: Rocket,
    title: 'Continuous Innovation',
    description: 'The web evolves, and so do we.',
    manifestations: [
      'Regular platform updates',
      'New framework support',
      'Cutting-edge research'
    ]
  }
];

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">RenderCrawl</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to= "/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md flex items-center">
              <BarChart2 className="w-4 h-4 mr-2" />
              Analyze Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact</Link>
            <button className="w-full mt-4 text-left px-3 py-2 bg-blue-50 text-blue-600 font-semibold rounded-md">
              Analyze Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      <Navigation />

      {/* Hero Section with Full Width Image */}
      <section className="relative pt-20 pb-0 lg:pt-24 lg:pb-0">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image - Full Width */}
            <div className="absolute inset-0">
              <img 
                src={aboutus}
                alt="Team working on SEO" 
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
                About RenderCrawl
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                We're on a mission to solve the most challenging problem in modern SEO: <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  JavaScript rendering and indexing.
                </span>
              </h1>
              
              <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base font-medium">
                 <div className="flex items-center">
                   <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                   Used by 10k+ sites
                 </div>
                 <div className="flex items-center">
                   <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                   Enterprise Security
                 </div>
                 <div className="flex items-center">
                   <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                   99.9% Accuracy
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission: 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Make JavaScript SEO Accessible</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In today's web, JavaScript frameworks power over 70% of modern websites. Yet most SEO tools still analyze pages as if we're in 2010 - looking only at static HTML.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We founded RenderCrawl to bridge this gap. Our platform shows you exactly what Google sees after JavaScript execution, helping you identify and fix rendering issues that impact your search visibility.
              </p>
              
              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image on the right side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-white border border-gray-100 rounded-2xl p-4 shadow-xl overflow-hidden">
                <img 
                  src={vision}
                  alt="JavaScript SEO Analysis" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Lucide Icons */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <value.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <ul className="space-y-3">
                      {value.manifestations.map((manifestation, manifestIndex) => (
                        <li key={manifestIndex} className="flex items-start text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          {manifestation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              From frustration to innovation
            </p>
          </div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                {index < storyTimeline.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 to-purple-100 hidden md:block md:left-[2.35rem] -z-10"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="hidden md:flex flex-shrink-0 w-20 justify-center">
                    <div className="w-12 h-12 bg-white border-2 border-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg shadow-sm z-10">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                       <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                         {index + 1}
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    
                    <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{item.description}</p>
                    
                    {item.details && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Thousands of SEO Professionals
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            See what Google really sees on your JavaScript-powered website. 
            Start fixing indexing issues today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link to="/analyze"className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Start Free Analysis</span>
            </Link>
            
            <Link to="/pricing" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>View Pricing</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;