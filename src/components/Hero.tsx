import React from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i > 2 ? "text-blue-700" : ""}>{word} </span>
            ))}
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center group shadow-lg shadow-blue-200">
              {t.hero.cta}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all text-center">
              {t.services.title}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
