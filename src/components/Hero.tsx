import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from './ui/input';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-16 lg:py-20 overflow-hidden min-h-[600px]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-[#2D1B69] mb-6 leading-tight">
              Премиальное лечение<br />
              для здорового образа жизни
            </h1>
            
            <p className="text-[#718096] text-lg mb-8 max-w-xl leading-relaxed">
              Комплексный подход к вашему здоровью с использованием 
              передовых технологий и индивидуального подхода к 
              каждому пациенту.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('contacts')}
                className="bg-[#2D1B69] hover:bg-[#3F2A7D] text-white px-8 py-6 rounded-full font-semibold shadow-lg"
              >
                Наши клиники
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md">
              <h3 className="text-[#2D1B69] mb-4">Поиск врача</h3>
              <div className="relative">
                <Input 
                  placeholder="Введите специальность..."
                  className="pr-12 h-12 rounded-lg"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#2D1B69] rounded-lg flex items-center justify-center hover:bg-[#3F2A7D] transition-colors">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">4500+</div>
                <div className="text-sm text-[#718096]">Счастливых пациентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">200</div>
                <div className="text-sm text-[#718096]">Врачей</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-sm text-[#718096]">Наград</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">20+</div>
                <div className="text-sm text-[#718096]">Лет опыта</div>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative lg:block hidden">
            <img
              src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnMlMjBob3NwaXRhbCUyMGdyb3VwfGVufDF8fHx8MTc2MTAyNjAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Команда профессиональных врачей"
              className="relative z-10 w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* White circle time indicator in top right */}
      <div className="absolute top-8 right-8 bg-white rounded-full px-6 py-3 shadow-lg hidden lg:block">
        <div className="text-[#2D1B69] font-semibold">24/7</div>
        <div className="text-xs text-[#718096]">Всегда онлайн</div>
      </div>
    </section>
  );
}
