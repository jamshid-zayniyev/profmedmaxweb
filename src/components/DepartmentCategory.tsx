import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import cardiology from '../assets/images/cardiology.png';
import neurology from '../assets/images/neurology.png';
import ortopedy from '../assets/images/ortopedy.png';
import pulmonology from '../assets/images/pulmonology.png';
import stomotology from '../assets/images/stomotology.png';
import urology from '../assets/images/urology.png';

export function DepartmentCategory() {
  const { t } = useTranslation();

  const departments = [
    {
      name: t('departments.cardiology'),
      icon: cardiology, 
      color: 'from-red-500 to-pink-400'
    },
    {
      name: t('departments.neurology'),
      icon: neurology,
      color: 'from-purple-500 to-indigo-400'
    },
    {
      name: t('departments.orthopedics'),
      icon: ortopedy,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: t('departments.Urology'),
      icon: urology,
      color: 'from-green-500 to-emerald-400'
    },
    {
      name: t('departments.Dentistry'),
      icon: stomotology,
      color: 'from-yellow-500 to-orange-400'
    },
    {
      name: t('departments.Pulmonology'),
      icon: pulmonology,
      color: 'from-teal-500 to-cyan-400'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF] ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">{t('departments.title')}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            {t('departments.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center border border-gray-200"
            >
              <div className={`w-50 h-50 bg-gradient-to-br rounded-full flex items-center justify-center mb-2`}>
                {typeof dept.icon === "string" ? (
                  <img src={dept.icon} alt={dept.name} className="w-20 h-20 object-contain" />
                ) : (
                  <dept.icon className="!w-50 h-50 text-white" />
                )}
              </div>
              <span className="text-xs font-medium text-[#2D3748] text-center">
                {dept.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
