import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from '.components/Navbar';
import About from '.components/About';
import Testimonials from '.components/Testimonials';
import Approach from '.components/Approach';
import Topics from '.components/Topics';
import ServiceArea from '.components/ServiceArea';
import Samples from '.components/Samples';
import Scheduling from '.components/Scheduling';
import BizInfo from '.components/BizInfo';
import Contact from '.components/Contact';
import Footer from '.components/Footer';

function App() {
  return (
    <main>
      <Navbar />
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
  );
}

export default App;
