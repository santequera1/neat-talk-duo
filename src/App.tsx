import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Services />
        </main>
        
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-3xl font-bold mb-8 md:mb-0">
                <span className="text-white">JR</span>
                <span className="text-emerald-400">10</span>
              </div>
              <div className="flex gap-8 text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
              <div className="mt-8 md:mt-0 text-slate-500 text-sm">
                © 2024 JR10 Cleaning Services. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
