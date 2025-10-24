import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-20 overflow-hidden min-h-[600px]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-[#2D1B69] text-4xl font-bold mb-6 leading-tight">
              {t('hero.title', 'Премиальное лечение для здорового образа жизни')}
            </h1>
            
            <p className="text-[#718096] text-lg mb-8 max-w-xl leading-relaxed">
              {t('hero.subtitle', 'Комплексный подход к вашему здоровью, включающий профилактику и поддержание здоровья')}
            </p>
            
            <div className="flex flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contacts')}
                className="bg-[#2D1B69] hover:bg-[#3F2A7D] text-white px-6 py-3 rounded-full font-semibold shadow-md flex items-center"
              >
                {t('hero.clinicsButton', 'Найти клинику')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-[#2D1B69] text-[#2D1B69] hover:bg-[#2D1B69] hover:text-white px-6 py-3 rounded-full font-semibold"
              >
                {t('hero.servicesButton', 'Услуги')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">4500+</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.patients', 'Пациентов')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">200</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.doctors', 'Врачей')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.awards', 'Наград')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">20+</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.experience', 'Лет опыта')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="hidden lg:block">
            <img
              src="https://billingfoxtech.com/wp-content/uploads/2024/08/BillingFox-Technologies.png" // Replace with the actual image URL from your upload
              alt={t('hero.title')}
              className="relative z-10 w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Language selector in top right */}
      <div className="absolute top-8 right-8 flex space-x-2">
        <button className="bg-white rounded-full px-3 py-1 text-[#2D1B69] font-semibold">English</button>
        <button className="bg-white rounded-full px-3 py-1 text-[#2D1B69] font-semibold">العربية</button>
      </div>
    </section>
  );
}