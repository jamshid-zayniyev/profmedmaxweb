import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DepartmentCategory() {
  const { t } = useTranslation();

  const departments = [
    {
      name: t('departments.cardiology'),
      icon: Heart,
      color: 'from-red-500 to-pink-400'
    },
    {
      name: t('departments.neurology'),
      icon: Brain,
      color: 'from-purple-500 to-indigo-400'
    },
    {
      name: t('departments.orthopedics'),
      icon: Bone,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: t('departments.ophthalmology'),
      icon: Eye,
      color: 'from-green-500 to-emerald-400'
    },
    {
      name: t('departments.pediatrics'),
      icon: Baby,
      color: 'from-yellow-500 to-orange-400'
    },
    {
      name: t('departments.therapy'),
      icon: Stethoscope,
      color: 'from-teal-500 to-cyan-400'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF] ">
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">{t('departments.title')}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto ">
            {t('departments.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center border border-gray-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center mb-2`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium text-[#2D3748] text-center">
                  {dept.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}