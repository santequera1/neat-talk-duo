import React from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Award, Users } from 'lucide-react';

export const TrustBar = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <ShieldCheck className="text-emerald-500" />, label: t.trust.years, value: "15+" },
    { icon: <Users className="text-blue-600" />, label: t.trust.clients, value: "500+" },
    { icon: <Award className="text-emerald-500" />, label: t.trust.sqft, value: "2M+" }
  ];

  return (
    <div className="bg-slate-50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="mb-4 bg-white p-4 rounded-2xl shadow-sm">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
