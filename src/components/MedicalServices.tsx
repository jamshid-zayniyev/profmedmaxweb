import { Activity, FlaskConical, Radio, Pill } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import service1 from '../assets/images/service1.jpeg';
import service2 from '../assets/images/service2.jpeg';

export function MedicalServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Activity,
      title: t('services.ambulance.title'),
      description: t('services.ambulance.description'),
      image: 'https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/e50fcfb4940eb64c8f5d131b7f20accf.jpg',
    },
    {
      icon: FlaskConical,
      title: t('services.laboratory.title'),
      description: t('services.laboratory.description'),
      image: service2,
    },
    {
      icon: Radio,
      title: t('services.radiology.title'),
      description: t('services.radiology.description'),
      image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    },
    {
      icon: Pill,
      title: t('services.pharmacy.title'),
      description: t('services.pharmacy.description'),
      image: 'https://images.unsplash.com/photo-1606813902393-49f6e6fdb7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    },
  ];

  return (
    <section className="py-12 bg-[#ABB1BD]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Side - Main Image with Title and Stats */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={service1}
                alt={t('services.mainTitle')}
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                <h2 className="text-white mb-4 text-2xl font-semibold leading-tight">
                  {t('services.mainTitle')}
                </h2>
                <ul className="text-white text-xs space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#718096] rounded-full mr-2"></span>
                    7+ {t('hero.stats.experience')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#718096] rounded-full mr-2"></span>
                    57+ {t('hero.stats.doctors')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#718096] rounded-full mr-2"></span>
                    80+ {t('hero.stats.awards')}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Services Grid */}
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
                    <p className="text-[#718096] text-xs leading-relaxed">{service.description}</p>
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