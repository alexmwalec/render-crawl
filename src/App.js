import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Home from './Pages/Home/Home';
import Analyze from './Pages/Analyze/Analyze'
import Results from './Pages/Results/Results';
import Pricing from './Pages/Pricing/Pricing';
import AboutUs from './Pages/About/About';
import Contact from './Pages/ContactUs/Contact';
import Documentation from './Pages/Documentation/Documentation';
import AdminDashboard from './Pages/Dashboard/AdminDashboard'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element = {<AboutUs/>} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/results" element={<Results />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/documentation' element={<Documentation/>}/>
            <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

