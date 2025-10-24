import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D1B69] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white/80">{t('footer.about.title')}</h3>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              {t('footer.about.description')}
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
            <h3 className="font-bold mb-4 text-white/80">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">{t('footer.quickLinks.about')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.quickLinks.services')}</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">{t('footer.quickLinks.doctors')}</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">{t('footer.quickLinks.contacts')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.quickLinks.careers')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-white/80">{t('footer.services.title')}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.services.cardiology')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.services.neurology')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.services.orthopedics')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.services.pediatrics')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.services.therapy')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white/80">{t('footer.contact.title')}</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('footer.contact.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/80">
            <div>
              {t('footer.bottom.copyright', { year: currentYear })}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">{t('footer.bottom.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.bottom.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}