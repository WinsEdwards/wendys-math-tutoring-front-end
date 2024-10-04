import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Testimonials from './components/Testimonials.js';
import Approach from './components/Approach.js';
import Topics from './components/Topics.js';
import ServiceArea from './components/ServiceArea.js';
import Samples from './components/Samples.js';
import Scheduling from './components/Scheduling.js';
import BizInfo from './components/BizInfo.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Testimonials />
        <Approach />
        <Topics />
        <ServiceArea />
        <Samples />
        <Scheduling />
        <BizInfo />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
