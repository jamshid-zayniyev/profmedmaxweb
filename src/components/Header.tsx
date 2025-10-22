import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Русский');

  const languages = [
    { name: 'Русский', flag: '🇷🇺' },
    { name: "O'zbekcha", flag: '🇺🇿' },
    { name: 'English', flag: '🇬🇧' },
    { name: 'العربية', flag: '🇸🇦' },
    { name: '中文', flag: '🇨🇳' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <div className="ml-2">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">PMM</span>
                </div>
                <div className="flex items-baseline -mt-1">
                  <span className="text-xs font-semibold">PROF</span>
                  <span className="text-xs font-semibold text-red-600">MED</span>
                  <span className="text-xs font-semibold">MAX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contacts')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Right Side - Language & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('appointment')}
              className="bg-white border-2 border-[#2D1B69] text-[#2D1B69] hover:bg-[#2D1B69] hover:text-white font-medium px-6 rounded-full"
            >
              Записаться на прием
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 font-medium">
                  <span>🇷🇺</span>
                  <span>{currentLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.name}
                    onClick={() => setCurrentLanguage(lang.name)}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2D1B69]"
            aria-label="Переключить меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                Контакты
              </button>

              {/* Language Selector Mobile */}
              <div className="pt-4 border-t">
                <div className="text-sm text-gray-500 mb-2">Выберите язык:</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => setCurrentLanguage(lang.name)}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('appointment')}
                className="bg-[#2D1B69] hover:bg-[#3F2A7D] text-white font-semibold rounded-full w-full"
              >
                Записаться на прием
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
