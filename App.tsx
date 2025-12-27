import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpaceCollection } from './components/SpaceCollection';
import { SignatureStyles } from './components/SignatureStyles';
import { Portfolio } from './components/Portfolio';
import { ServiceCards } from './components/ServiceCards';
import { Footer } from './components/Footer';

function App() {
  // Simple smooth scroll behavior for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-secondary">
      <Navbar />
      <main>
        <Hero />
        <SpaceCollection />
        <SignatureStyles />
        <Portfolio />
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;