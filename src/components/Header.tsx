import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  // Add this debug effect
  useEffect(() => {
    console.log('i18n status:', {
      language: i18n.language,
      isInitialized: i18n.isInitialized,
      exists: t('header.home') !== 'header.home'
    });
  }, [i18n, t]);

  const languages = [
    { name: 'Русский', flag: '🇷🇺', code: 'ru' },
    { name: "O'zbekcha", flag: '🇺🇿', code: 'uz' },
    { name: 'English', flag: '🇬🇧', code: 'en' },
    { name: 'العربية', flag: '🇸🇦', code: 'ar' },
    { name: '中文', flag: '🇨🇳', code: 'zh' }
  ];

  // Fallback to Russian if current language not found
  const currentLangObj = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = async (langCode: string) => {
    try {
      await i18n.changeLanguage(langCode);
      setDropdownOpen(false);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Fallback function for translations
  const getTranslation = (key: string) => {
    const translation = t(key);
    return translation === key ? key : translation;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
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

          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              {getTranslation('header.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              {getTranslation('header.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              {getTranslation('header.about')}
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              {getTranslation('header.reviews')}
            </button>
            <button 
              onClick={() => scrollToSection('contacts')} 
              className="text-[#2D3748] hover:text-[#5B4E99] font-medium transition-colors"
            >
              {getTranslation('header.contacts')}
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('appointment')}
              className="bg-white border-2 border-[#2D1B69] text-[#2D1B69] hover:bg-[#2D1B69] hover:text-white font-medium px-6 rounded-full"
            >
              {getTranslation('header.appointment')}
            </Button>

            <div className="relative" ref={dropdownRef}>
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 font-medium"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{currentLangObj.flag}</span>
                <span>{currentLangObj.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        i18n.language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="flex-1">{lang.name}</span>
                      {i18n.language === lang.code && (
                        <span className="text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2D1B69]"
            aria-label={getTranslation('header.toggleMenu')}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                {getTranslation('header.home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                {getTranslation('header.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                {getTranslation('header.about')}
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                {getTranslation('header.reviews')}
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="text-left text-[#2D3748] hover:text-[#5B4E99] font-medium py-2"
              >
                {getTranslation('header.contacts')}
              </button>

              <div className="pt-4 border-t">
                <div className="text-sm text-gray-500 mb-2">{getTranslation('header.chooseLanguage')}</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 ${
                        i18n.language === lang.code ? 'bg-blue-50 border border-blue-200' : ''
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                      {i18n.language === lang.code && (
                        <span className="text-blue-600 text-xs ml-auto">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('appointment')}
                className="bg-[#2D1B69] hover:bg-[#3F2A7D] text-white font-semibold rounded-full w-full"
              >
                {getTranslation('header.appointment')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}