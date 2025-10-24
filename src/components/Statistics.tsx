// components/Statistics.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface StatisticsData {
  happy_patients: string;
  wards: string;
  awards: string;
  ambulances: string;
}

export const Statistics: React.FC = () => {
  const { t } = useTranslation();

  const statistics = t('statistics', { returnObjects: true }) as StatisticsData;

  const statsData = [
    {
      number: "50+",
      label: statistics.happy_patients || "Happy Patients",
      icon: "👨‍⚕️"
    },
    {
      number: "200+",
      label: statistics.wards || "Years of Experience",
      icon: "🏥"
    },
    {
      number: "25+",
      label: statistics.awards || "International Certifications",
      icon: "🏆"
    },
    {
      number: "15k+",
      label: statistics.ambulances || "Successful Operations",
      icon: "🚑"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};