import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PageTransition from './components/common/PageTransition';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';
import LoaderProvider from './components/common/LoaderProvider';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <LoaderProvider minLoadTime={2500}>
      <Router>
        <ScrollToTop />
        <div className="App min-h-screen bg-bg-dark">
          <Header />
          <main>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;
