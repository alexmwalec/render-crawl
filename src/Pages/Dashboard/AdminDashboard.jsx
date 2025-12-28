import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown,
  Menu,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Globe,
  Shield,
  Zap,
  Download,
  Filter,
  Calendar,
  Eye,
  Home,
  CreditCard,
  HelpCircle,
  LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const [dashboardStats] = useState({
    totalUsers: 1245,
    activeSubscriptions: 892,
    monthlyRevenue: 24850,
    pendingAnalyses: 42,
    completionRate: 94,
    growthRate: 12.5
  });

  const [recentUsers] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@agency.com', plan: 'Professional', status: 'active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Mike Chen', email: 'mike@techcorp.com', plan: 'Enterprise', status: 'active', lastLogin: '5 hours ago' },
    { id: 3, name: 'Alex Rivera', email: 'alex@devshop.com', plan: 'Starter', status: 'active', lastLogin: '1 day ago' },
    { id: 4, name: 'Emma Wilson', email: 'emma@studio.com', plan: 'Professional', status: 'pending', lastLogin: '2 days ago' },
    { id: 5, name: 'David Park', email: 'david@seoagency.com', plan: 'Starter', status: 'active', lastLogin: '3 days ago' },
  ]);

  const [recentAnalyses] = useState([
    { id: 1, url: 'https://shopify-store.com', status: 'completed', issues: 3, date: '2024-01-15', user: 'Sarah Johnson' },
    { id: 2, url: 'https://react-app.com', status: 'processing', issues: 0, date: '2024-01-15', user: 'Mike Chen' },
    { id: 3, url: 'https://vue-dashboard.com', status: 'completed', issues: 12, date: '2024-01-14', user: 'Alex Rivera' },
    { id: 4, url: 'https://angular-app.com', status: 'failed', issues: 0, date: '2024-01-14', user: 'Emma Wilson' },
    { id: 5, url: 'https://nextjs-site.com', status: 'completed', issues: 5, date: '2024-01-13', user: 'David Park' },
  ]);

  // Mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo & Menu Toggle */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">RenderCrawl Admin</span>
              </Link>
            </div>

            {/* Center: Search */}
            <div className="flex-1 max-w-2xl mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search users, analyses, or reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

        
            <div className="flex items-center space-x-4">
              {/* Mobile Search */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 bg-white border-r border-gray-200 z-40 transition-all duration-300 ${isSidebarCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-20' : 'translate-x-0 w-64'}`}>
        <div className="h-full overflow-y-auto py-6">
          {/* Navigation */}
          <nav className="px-4 space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Home className="w-5 h-5" />
              {!isSidebarCollapsed && <span>Overview</span>}
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'users' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Users className="w-5 h-5" />
              {!isSidebarCollapsed && <span>Users</span>}
            </button>

            <button
              onClick={() => setActiveTab('analyses')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'analyses' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <FileText className="w-5 h-5" />
              {!isSidebarCollapsed && <span>Analyses</span>}
            </button>

            <button
              onClick={() => setActiveTab('billing')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'billing' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <CreditCard className="w-5 h-5" />
              {!isSidebarCollapsed && <span>Billing</span>}
            </button>

            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'reports' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <BarChart3 className="w-5 h-5" />
              {!isSidebarCollapsed && <span>Reports</span>}
            </button>

            <div className="pt-8">
              <p className={`px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Settings</p>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors mt-2 ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Settings className="w-5 h-5" />
                {!isSidebarCollapsed && <span>Settings</span>}
              </button>

              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors mt-2">
                <HelpCircle className="w-5 h-5" />
                {!isSidebarCollapsed && <span>Help & Support</span>}
              </button>

              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors mt-8">
                <LogOut className="w-5 h-5" />
                {!isSidebarCollapsed && <span>Logout</span>}
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-600 mt-2">Monitor your platform's performance and user activity</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Last 30 days</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export Report</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {/* Total Users */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${dashboardStats.growthRate > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {dashboardStats.growthRate > 0 ? '+' : ''}{dashboardStats.growthRate}%
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Total Users</div>
            </div>

            {/* Active Subscriptions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.activeSubscriptions.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Active Subscriptions</div>
            </div>

            {/* Monthly Revenue */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <TrendingUp className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">${dashboardStats.monthlyRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Monthly Revenue</div>
            </div>

            {/* Pending Analyses */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm">
                  {dashboardStats.pendingAnalyses}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.pendingAnalyses}</div>
              <div className="text-sm text-gray-500">Pending Analyses</div>
            </div>

            {/* Completion Rate */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.completionRate}%</div>
              <div className="text-sm text-gray-500">Completion Rate</div>
            </div>

            {/* Global Reach */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <Shield className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">42</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
          </div>

          {/* Charts & Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Users */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Recent Users</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                              {user.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' : user.plan === 'Professional' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {user.plan}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center ${user.status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>
                            <div className={`w-2 h-2 rounded-full mr-2 ${user.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                            {user.status === 'active' ? 'Active' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{user.lastLogin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Analyses */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Recent Analyses</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentAnalyses.map((analysis) => (
                      <tr key={analysis.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="max-w-xs truncate">
                            <div className="font-medium text-gray-900 truncate">{analysis.url}</div>
                            <div className="text-sm text-gray-500">by {analysis.user}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center ${analysis.status === 'completed' ? 'text-green-600' : analysis.status === 'processing' ? 'text-blue-600' : 'text-red-600'}`}>
                            <div className={`w-2 h-2 rounded-full mr-2 ${analysis.status === 'completed' ? 'bg-green-500' : analysis.status === 'processing' ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                            {analysis.status.charAt(0).toUpperCase() + analysis.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${analysis.issues === 0 ? 'bg-green-100 text-green-800' : analysis.issues <= 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {analysis.issues} {analysis.issues === 1 ? 'issue' : 'issues'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <Download className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Platform Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-100">Server Uptime</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-blue-500/30 rounded-full h-2">
                    <div className="bg-green-400 rounded-full h-2 w-[99.9%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-100">Avg. Analysis Time</span>
                    <span className="font-bold">28s</span>
                  </div>
                  <div className="w-full bg-blue-500/30 rounded-full h-2">
                    <div className="bg-blue-400 rounded-full h-2 w-[93%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-100">API Success Rate</span>
                    <span className="font-bold">98.5%</span>
                  </div>
                  <div className="w-full bg-blue-500/30 rounded-full h-2">
                    <div className="bg-purple-400 rounded-full h-2 w-[98.5%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">New user registered</p>
                    <p className="text-sm text-gray-600">Sarah Johnson signed up for the Professional plan</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Subscription upgraded</p>
                    <p className="text-sm text-gray-600">Mike Chen upgraded from Starter to Enterprise plan</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Monthly report generated</p>
                    <p className="text-sm text-gray-600">December 2024 revenue report is ready for download</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
        <div className="flex justify-around items-center h-16">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex flex-col items-center justify-center p-2 ${activeTab === 'overview' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('users')}
            className={`flex flex-col items-center justify-center p-2 ${activeTab === 'users' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs mt-1">Users</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('analyses')}
            className={`flex flex-col items-center justify-center p-2 ${activeTab === 'analyses' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-xs mt-1">Analyses</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center justify-center p-2 ${activeTab === 'settings' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;