import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from './ui/input';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getAllHeroData } from '../services/heroData/heroDataService'; // Adjust the import path as needed
import type { HeroTypes } from '../services/heroData/heroData.types'; // Adjust the import path as needed

export function Hero() {
  const { t } = useTranslation();
  const [heroData, setHeroData] = useState<HeroTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        const data = await getAllHeroData();
        if (data && data.length > 0) {
          setHeroData(data[0]);
        }
      } catch (err) {
        setError('Failed to load hero data');
        console.error('Error fetching hero data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-20 overflow-hidden min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-[#2D1B69] text-lg">Loading...</div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-20 overflow-hidden min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-20 overflow-hidden min-h-[600px]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[#2D1B69] text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-[#718096] text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-row gap-2 mb-8 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contacts')}
                className="bg-[#2D1B69] hover:bg-[#3F2A7D] text-white px-4 py-1 rounded-full font-semibold shadow-md flex items-center text-sm"
              >
                {t('hero.clinicsButton')}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <div className="bg-white rounded-full p-1 shadow-md flex items-center">
                <Input 
                  placeholder={t('hero.searchPlaceholder')}
                  className="border-none focus:ring-0 h-8 rounded-full text-xs px-2"
                />
                <button className="ml-1 bg-[#2D1B69] hover:bg-[#3F2A7D] rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {heroData?.happy_patients}+
                </div>
                <div className="text-sm text-[#718096]">{t('hero.stats.patients')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {heroData?.wards}
                </div>
                <div className="text-sm text-[#718096]">{t('hero.stats.doctors')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {heroData?.awards}+
                </div>
                <div className="text-sm text-[#718096]">{t('hero.stats.awards')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {heroData?.ambulances}+
                </div>
                <div className="text-sm text-[#718096]">{t('hero.stats.experience')}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://billingfoxtech.com/wp-content/uploads/2024/08/BillingFox-Technologies.png"
              alt="Команда профессиональных врачей"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 bg-white rounded-full px-6 py-3 shadow-lg hidden lg:block">
        <div className="text-[#2D1B69] font-semibold">24/7</div>
        <div className="text-xs text-[#718096]">{t('hero.online')}</div>
      </div>
    </section>
  );
}