import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from './ui/input';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
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
            <h1 className="text-[#2D1B69] mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-[#718096] text-lg mb-8 max-w-xl leading-relaxed">
              {t('hero.subtitle')}

            </p>
            
            <div className="flex flex-row gap-2 mb-8 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contacts')}
                className="bg-[#2D1B69] hover:bg-[#3F2A7D] text-white px-4 py-1 rounded-full font-semibold shadow-md flex items-center text-sm"
              >
                {t('hero.clinicsButton')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md">
              <h3 className="text-[#2D1B69] mb-4">{t('hero.searchTitle')}</h3>
              <div className="relative">
                <Input 
                  placeholder={t('hero.searchPlaceholder')}
                  className="pr-12 h-12 rounded-lg"
                />
                <button className="ml-1 bg-[#2D1B69] hover:bg-[#3F2A7D] rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">4500+</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.patients')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">200</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.doctors')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.awards')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">20+</div>
                <div className="text-sm text-[#718096]">{t('hero.stats.experience')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnMlMjBob3NwaXRhbCUyMGdyb3VwfGVufDF8fHx8MTc2MTAyNjAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={t('hero.title')}
              className="relative z-10 w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* White circle time indicator in top right */}
      <div className="absolute top-8 right-8 bg-white rounded-full px-6 py-3 shadow-lg hidden lg:block">
        <div className="text-[#2D1B69] font-semibold">24/7</div>
        <div className="text-xs text-[#718096]">{t('hero.online')}</div>
      </div>
    </section>
  );
}