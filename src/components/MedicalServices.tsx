import { Activity, Stethoscope, FlaskConical, Radio, Pill } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function MedicalServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Activity,
      title: t('services.ambulance.title'),
      description: t('services.ambulance.description'),
      image: 'https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjBtZWRpY2FsfGVufDF8fHx8MTc2MTAyNjIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FlaskConical,
      title: t('services.laboratory.title'),
      description: t('services.laboratory.description'),
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3R8ZW58MXx8fHwxNzYwOTI4NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Radio,
      title: t('services.radiology.title'),
      description: t('services.radiology.description'),
      image: 'https://images.unsplash.com/photo-1758691461957-13aff0c37c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjB4cmF5JTIwc2NhbnxlbnwxfHx8fDE3NjEwMjYyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Pill,
      title: t('services.pharmacy.title'),
      description: t('services.pharmacy.description'),
      image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc2MDk4NDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Main Image with Title */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                
                {/* ECG line */}
                <svg className="w-full h-16 mt-4" viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M0 30 L80 30 L90 10 L100 50 L110 30 L400 30" 
                    stroke="#EF4444" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[#2D1B69] mb-3">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-[#718096] text-sm leading-relaxed">
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