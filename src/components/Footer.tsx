import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D1B69] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">PMM PROFMEDMAX</h3>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Современная многопрофильная медицинская клиника, предоставляющая 
              качественные услуги здравоохранения.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5B4E99] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5B4E99] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5B4E99] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5B4E99] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">О клинике</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Наши услуги</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Врачи</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Наши услуги</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Кардиология</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Неврология</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ортопедия</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Педиатрия</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Терапия</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>ул. Медицинская, д. 123, Москва, Россия</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@profmedmax.ru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/80">
            <div>
              © {currentYear} PMM PROFMEDMAX. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
