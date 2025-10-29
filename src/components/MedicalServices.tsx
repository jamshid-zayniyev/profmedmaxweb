import { Activity, Stethoscope, FlaskConical, Radio, Pill } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import service1 from '../assets/images/service1.jpeg';
import service2 from '../assets/images/service2.jpeg';
import service3 from '../assets/images/service3.jpeg';
export function MedicalServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Activity,
      title: t('services.ambulance.title'),
      description: t('services.ambulance.description'),
      image: service3
    },
    {
      icon: FlaskConical,
      title: t('services.laboratory.title'),
      description: t('services.laboratory.description'),
      image: service1
    },
    {
      icon: Radio,
      title: t('services.radiology.title'),
      description: t('services.radiology.description'),
      image: service2
    },
    {
      icon: Pill,
      title: t('services.pharmacy.title'),
      description: t('services.pharmacy.description'),
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
                alt={t('services.mainTitle')}
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay with title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                <h2 className="text-white mb-4 leading-tight">
                  {t('services.mainTitle')}

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