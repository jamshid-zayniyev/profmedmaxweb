// components/Statistics.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllFooterdata } from '../services/footerData/footerDataService'; // Adjust import path as needed
import type { FooterTypes } from '../services/footerData/footerData.types'; // Adjust import path as needed

export const Statistics: React.FC = () => {
  const { t } = useTranslation();
  const [footerData, setFooterData] = useState<FooterTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        setLoading(true);
        const data = await getAllFooterdata();
        // Assuming the API returns an array, take the first item
        if (data && data.length > 0) {
          setFooterData(data[0]);
        }
      } catch (err) {
        setError('Failed to load statistics data');
        console.error('Error fetching footer data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  // Use translation as fallback, but prefer API data
  const statistics = t('statistics', { returnObjects: true }) as {
    happy_patients: string;
    wards: string;
    awards: string;
    ambulances: string;
  };

  const statsData = [
    {
      number: footerData ? `${footerData.doctors}+` : "50+",
      label: statistics.happy_patients || "Doctors",
      icon: "👨‍⚕️"
    },
    {
      number: footerData ? `${footerData.experience}+` : "200+",
      label: statistics.wards || "Years of Experience",
      icon: "🏥"
    },
    {
      number: footerData ? `${footerData.awards}+` : "25+",
      label: statistics.awards || "Awards",
      icon: "🏆"
    },
    {
      number: footerData ? `${footerData.successfully_operations}+` : "15k+",
      label: statistics.ambulances || "Successful Operations",
      icon: "🚑"
    }
  ];

  // Show loading state
  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg animate-pulse"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="h-12 bg-gray-300 rounded mb-2 w-20 mx-auto"></div>
                <div className="h-6 bg-gray-300 rounded w-32 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show error state (but still show the data with fallback values)
  if (error && !footerData) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600 mb-4">{error}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-lg md:text-5xl font-bold text-blue-600 mb-2">
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
  }

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