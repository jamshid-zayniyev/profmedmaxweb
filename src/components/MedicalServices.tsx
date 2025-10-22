import { Activity, Stethoscope, FlaskConical, Radio, Pill } from 'lucide-react';

export function MedicalServices() {
  const services = [
    {
      icon: Activity,
      title: 'Скорая помощь',
      description: 'Круглосуточная служба экстренной помощи готова оказать поддержку в критических ситуациях. Оснащены современным оборудованием для работы с травмами, сердечными и другими неотложными состояниями.',
      image: 'https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjBtZWRpY2FsfGVufDF8fHx8MTc2MTAyNjIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FlaskConical,
      title: 'Лабораторные услуги',
      description: 'Комплексные лабораторные исследования для точной и своевременной медицинской диагностики. Анализы крови, мочи и другие исследования для постановки диагноза и наблюдения лечения.',
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3R8ZW58MXx8fHwxNzYwOTI4NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Radio,
      title: 'Радиология и диагностика',
      description: 'Передовые методы медицинской диагностической визуализации включая рентген, КТ, МРТ и УЗИ. Современное оборудование для точной диагностики и удобства пациентов.',
      image: 'https://images.unsplash.com/photo-1758691461957-13aff0c37c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjB4cmF5JTIwc2NhbnxlbnwxfHx8fDE3NjEwMjYyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Pill,
      title: 'Аптека',
      description: 'Аптека на территории клиники предоставляет рецептурные и безрецептурные медикаменты. БАДы и витамины, обезболивающие, гигиенические средства, доступ к необходимым препаратам.',
      image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc2MDk4NDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="py-12 bg-[#ABB1BD]">
      <div className="container mx-auto px-4  bg-[#ABB1BD]">
        <div className="grid lg:grid-cols-2 gap-6 items-start bg-[#ABB1BD]">
          {/* Left Side - Main Image with Title and Stats */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjEwMjYyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Медицинская команда"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Overlay with title and stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#2D1B69]/80 p-4">
                <h2 className="text-white text-lg font-semibold mb-2 leading-tight">
                  Высококвалифицированные услуги,<br />которые можно доверить
                </h2>
                <ul className="text-white text-xs space-y-1">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#718096] rounded-full mr-2"></span> 20+ лет опыта</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#718096] rounded-full mr-2"></span> 50+ квалифицированных врачей</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#718096] rounded-full mr-2"></span> 10+ наград</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-[#E6F0FA] rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#2D1B69]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[#2D1B69] text-sm font-medium mb-2">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-[#718096] text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}