import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from 'lucide-react';

export function DepartmentCategory() {
  const departments = [
    {
      name: 'Кардиология',
      icon: Heart,
      color: 'from-red-500 to-pink-400'
    },
    {
      name: 'Неврология',
      icon: Brain,
      color: 'from-purple-500 to-indigo-400'
    },
    {
      name: 'Ортопедия',
      icon: Bone,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Офтальмология',
      icon: Eye,
      color: 'from-green-500 to-emerald-400'
    },
    {
      name: 'Педиатрия',
      icon: Baby,
      color: 'from-yellow-500 to-orange-400'
    },
    {
      name: 'Терапия',
      icon: Stethoscope,
      color: 'from-teal-500 to-cyan-400'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF] ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 mt-12">
          <h2 className="text-[#2D1B69] text-2xl font-bold mb-2">Категории отделений</h2>
          <p className="text-[#718096] text-sm max-w-xl mx-auto">
            Широкий спектр медицинских услуг от опытных специалистов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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