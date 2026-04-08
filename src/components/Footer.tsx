import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getSocialMedia } from '../services/social-media/socialService';
import { getLocation } from '../services/location/locationService';
import { getPhone } from '../services/phone/phoneService';
import { getEmail } from '../services/email/emailService';
import type { MediaTypes } from '../services/social-media/social.types';
import type { LocationTypes } from '../services/location/location.types';
import type { PhoneTypes } from '../services/phone/phone.types';
import type { EmailTypes } from '../services/email/email.types';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const [socialMedia, setSocialMedia] = useState<MediaTypes[]>([]);
  const [location, setLocation] = useState<LocationTypes | null>(null);
  const [phones, setPhones] = useState<PhoneTypes[]>([]);
  const [emails, setEmails] = useState<EmailTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        setLoading(true);
        const [socialData, locationData, phoneData, emailData] = await Promise.all([
          getSocialMedia(),
          getLocation(),
          getPhone(),
          getEmail(),
        ]);

        setSocialMedia(socialData || []);
        setLocation(locationData?.[0] || null);
        setPhones(phoneData || []);
        setEmails(emailData || []);
      } catch (err) {
        console.error('Error fetching footer data:', err);
        setError('Failed to load footer information');
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  const getSocialIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('facebook')) return <Facebook className="w-5 h-5" />;
    if (lower.includes('instagram')) return <Instagram className="w-5 h-5" />;
    if (lower.includes('twitter') || lower.includes('x')) return <Twitter className="w-5 h-5" />;
    if (lower.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
    return <div className="w-5 h-5 bg-white rounded-full" />;
  };

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http') || imagePath.startsWith('/')) return imagePath;
    return imagePath;
  };

  const getDisplayAddress = () => {
    if (loading) return t('footer.contact.address');
    if (location) return location.fullAddress || `${location.street} ${location.house}, ${location.region}`;
    return t('footer.contact.address');
  };

  const getDisplayPhones = () => {
    if (loading) return t('footer.contact.phone');
    if (phones.length > 0) return phones.slice(0, 2).map(p => p.number).join(', ');
    return t('footer.contact.phone');
  };

  const getDisplayEmail = () => {
    if (loading) return t('footer.contact.email');
    if (emails.length > 0) return emails[0].email;
    return t('footer.contact.email');
  };

  return (
    <footer className="bg-[#2D1B69] text-white pt-16 pb-8" aria-label={t('footer.title')}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white/80">{t('footer.about.title')}</h3>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">{t('footer.about.description')}</p>
            <div className="flex space-x-3">
              {loading
                ? [...Array(4)].map((_, i) => <div key={i} className="w-10 h-10 bg-white/10 rounded-full animate-pulse" />)
                : (error || socialMedia.length === 0
                    ? [Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      ))
                    : socialMedia.map(social => {
                        const imageUrl = getImageUrl(social.image);
                        return (
                          <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5B4E99] transition-colors group"
                            title={social.name}
                          >
                            {imageUrl ? (
                              <img
                                src={imageUrl}
                                alt={social.name}
                                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform rounded-full"
                                onError={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    parent.removeChild(e.currentTarget);
                                    parent.appendChild(getSocialIcon(social.name));
                                  }
                                }}
                              />
                            ) : (
                              getSocialIcon(social.name)
                            )}
                          </a>
                        );
                      })
                  )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-white/80">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {['about', 'services', 'doctors', 'contacts', 'careers'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="hover:text-white transition-colors">
                    {t(`footer.quickLinks.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-white/80">{t('footer.services.title')}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {['cardiology','neurology','orthopedics','pediatrics','therapy'].map((service) => (
                <li key={service}>
                  <a href="#category" className="hover:text-white transition-colors">
                    {t(`footer.services.${service}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white/80">{t('footer.contact.title')}</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{getDisplayAddress()}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {phones.length > 0
                    ? phones.slice(0, 2).map((p, i) => (
                        <span key={p.id}>
                          <a href={`tel:${p.number}`} className="hover:text-white">{p.number}</a>
                          {i < phones.length - 1 && ', '}
                        </span>
                      ))
                    : getDisplayPhones()}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {emails.length > 0
                    ? emails.map((e, i) => (
                        <span key={e.id}>
                          <a href={`mailto:${e.email}`} className="hover:text-white">{e.email}</a>
                          {i < emails.length - 1 && ', '}
                        </span>
                      ))
                    : getDisplayEmail()}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/80">
            <div>{t('footer.bottom.copyright', { year: currentYear })}</div>
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