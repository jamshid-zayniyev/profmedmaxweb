import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from 'lucide-react';

export function DepartmentCategory() {
  const departments = [
    {
      name: 'Кардиология',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Неврология',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Ортопедия',
      icon: Bone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Офтальмология',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Педиатрия',
      icon: Baby,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Терапия',
      icon: Stethoscope,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">Категории отделений</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            Широкий спектр медицинских услуг от опытных специалистов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#5B4E99] hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#2D3748] text-center">
                    {dept.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
