import React from 'react';
import { useLanguage } from './LanguageContext';
import { Building2, Home, Sparkles } from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.commercial,
      icon: <Building2 size={40} className="text-blue-600" />,
      desc: "Comprehensive cleaning for offices, industrial sites, and retail spaces."
    },
    {
      title: t.services.residential,
      icon: <Home size={40} className="text-emerald-500" />,
      desc: "Elite housekeeping and deep cleaning for premium residences."
    },
    {
      title: t.services.specialty,
      icon: <Sparkles size={40} className="text-blue-600" />,
      desc: "Disinfection, floor care, and post-construction cleanup services."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">{t.services.title}</h2>
          <div className="mt-4 w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#" className="text-blue-700 font-bold flex items-center group-hover:gap-2 transition-all">
                Learn More <span className="text-xl">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
