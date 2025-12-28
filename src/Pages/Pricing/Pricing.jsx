import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [setHoveredPlan] = useState(null);

  // Helper to calculate price
  const getPrice = (monthlyPrice) => {
    if (billingCycle === 'annual') {
      return Math.round(monthlyPrice * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Header */}
      <div className="bg-[#0B1120] relative pt-32 pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
            <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Audit your JavaScript SEO without breaking the bank. <br className="hidden md:block"/>
            Scale your analysis as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-12 flex items-center justify-center space-x-6">
            <span className={`text-sm font-bold tracking-wide uppercase ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transform transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-bold tracking-wide uppercase flex items-center ${billingCycle === 'annual' ? 'text-white' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/30">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Starter Plan */}
          <div 
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-2 relative"
            onMouseEnter={() => setHoveredPlan('starter')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Starter</h3>
              <p className="text-sm text-gray-500 mt-2">For freelancers & side projects</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">${getPrice(49)}</span>
                <span className="text-gray-500 font-medium ml-1">/mo</span>
              </div>
              {billingCycle === 'annual' && (
                <p className="text-xs text-green-600 font-semibold mt-1">Billed ${getPrice(49) * 12} yearly</p>
              )}
            </div>

            <Link 
              to="/analyze"
              className="block w-full py-3 px-6 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-colors text-center border border-gray-200"
            >
              Start Free Trial
            </Link>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <ul className="space-y-4">
                {starterFeatures.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Plan (Featured) */}
          <div 
            className="bg-slate-900 rounded-3xl shadow-2xl p-8 relative transform lg:-translate-y-8 border border-slate-700 hover:scale-105 transition-all duration-300 ring-1 ring-white/10"
            onMouseEnter={() => setHoveredPlan('professional')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {/* Gradient Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl pointer-events-none"></div>
            
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
                Most Popular
              </span>
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Professional</h3>
                <p className="text-sm text-slate-400 mt-2">For growing teams & agencies</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-white tracking-tight">${getPrice(99)}</span>
                  <span className="text-slate-400 font-medium ml-1">/mo</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-xs text-blue-400 font-semibold mt-1">Billed ${getPrice(99) * 12} yearly</p>
                )}
              </div>

              <Link 
                to="/analyze"
                className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg text-center"
              >
                Start 14-Day Free Trial
              </Link>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <ul className="space-y-4">
                  {professionalFeatures.map((feature, index) => (
                    <FeatureItem key={index} text={feature} dark />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Agency Plan */}
          <div 
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-2 relative"
            onMouseEnter={() => setHoveredPlan('agency')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Agency</h3>
              <p className="text-sm text-gray-500 mt-2">For large scale operations</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">${getPrice(199)}</span>
                <span className="text-gray-500 font-medium ml-1">/mo</span>
              </div>
              {billingCycle === 'annual' && (
                <p className="text-xs text-green-600 font-semibold mt-1">Billed ${getPrice(199) * 12} yearly</p>
              )}
            </div>

            <Link 
              to="/analyze"
              className="block w-full py-3 px-6 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-colors text-center border border-gray-200"
            >
              Contact Sales
            </Link>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <ul className="space-y-4">
                {agencyFeatures.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison / Features Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
             <div className="p-10 text-center border-b border-gray-100">
                 <h2 className="text-2xl font-bold text-gray-900">Included in all plans</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                 <div className="p-8 text-center">
                     <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">Real Chrome Rendering</h3>
                     <p className="text-sm text-gray-500">We render pages exactly like Googlebot, executing all JS.</p>
                 </div>
                 <div className="p-8 text-center">
                     <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">Core Web Vitals</h3>
                     <p className="text-sm text-gray-500">LCP, CLS, and INP metrics included in every report.</p>
                 </div>
                 <div className="p-8 text-center">
                     <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">Secure & Private</h3>
                     <p className="text-sm text-gray-500">Enterprise-grade encryption for all your crawl data.</p>
                 </div>
             </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Everything you need to know about billing and features.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-[#0B1120] px-8 py-16 text-center shadow-2xl">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px] -ml-16 -mb-16"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to audit your JavaScript SEO?
                    </h2>
                    <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
                        Join 10,000+ developers and SEOs who trust RenderCrawl to fix their rendering issues.
                    </p>
                    <Link 
                    to="/analyze"
                    className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                    Get Started for Free
                    </Link>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

// --- Components ---

const FeatureItem = ({ text, dark = false }) => (
  <li className="flex items-start">
    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${dark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className={`ml-3 text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{text}</span>
  </li>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-gray-300 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg font-bold text-gray-900 pr-8">{question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
            <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
            {answer}
        </div>
      </div>
    </div>
  );
};

// --- Data ---

const starterFeatures = [
  '1,000 pages per month',
  'Single URL analysis',
  'Basic rendering checks',
  'Core Web Vitals analysis',
  'PDF report export',
  'Email support',
  '7-day data retention'
];

const professionalFeatures = [
  '10,000 pages per month',
  'Site-wide crawling',
  'Advanced JS framework analysis',
  'Scheduled daily crawls',
  'White-label PDF reports',
  'Full API access',
  '30-day data retention'
];

const agencyFeatures = [
  '50,000 pages per month',
  'Unlimited projects',
  'Client management dashboard',
  'Advanced analytics',
  'Priority Phone support',
  'SLA guarantee',
  '90-day data retention',
  'Custom integration support'
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with our 14-day free trial with full access to all Professional plan features. No credit card required. You'll get unlimited analysis during the trial period. Cancel anytime during the trial with no charges."
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time. When you upgrade, you get immediate access to the new features. When you downgrade, the changes take effect at the end of your billing cycle."
  },
  {
    question: "What happens if I exceed my page limit?",
    answer: "We'll notify you via email when you're approaching your monthly page limit. If you exceed your limit, you can either upgrade to a higher plan or purchase a one-time 'page pack' add-on. We never stop your crawls without warning."
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes! We offer a 50% discount for registered non-profit organizations and educational institutions. Contact our sales team with your organization details for verification."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We utilize Google Cloud Platform for enterprise-grade security and compliance."
  }
];

export default Pricing;