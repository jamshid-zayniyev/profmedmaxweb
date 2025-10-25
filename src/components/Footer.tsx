
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getSocialMedia } from '../services/social-media/socialService';
import type { MediaTypes } from '../services/social-media/social.types';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [socialMedia, setSocialMedia] = useState<MediaTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        setLoading(true);
        const data = await getSocialMedia();
        setSocialMedia(data);
      } catch (err) {
        setError('Failed to load social media links');
        console.error('Error fetching social media:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, []);

  // Function to get the appropriate icon for each social media platform
  const getSocialIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    
    if (lowerName.includes('facebook')) return <Facebook className="w-5 h-5" />;
    if (lowerName.includes('instagram')) return <Instagram className="w-5 h-5" />;
    if (lowerName.includes('twitter') || lowerName.includes('x')) return <Twitter className="w-5 h-5" />;
    if (lowerName.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
    
    // Default icon for unknown platforms
    return <div className="w-5 h-5 bg-white rounded-full"></div>;
  };

  // Function to get image URL for social media - FIXED VERSION
  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return null;
    
    // If it's already a full URL, use it directly
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // If it's a relative path starting with /, use it as is (assuming it's served by your backend)
    if (imagePath.startsWith('/')) {
      return imagePath;
    }
    
    return imagePath;
  };

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
              {loading ? (
                // Loading skeleton for social media icons
                [...Array(4)].map((_, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 bg-white/10 rounded-full animate-pulse"
                  ></div>
                ))
              ) : error ? (
                // Fallback to default social media icons if API fails
                <>
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
                </>
              ) : socialMedia.length > 0 ? (
                // Render social media links from API
                socialMedia.map((social) => {
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
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            // If image fails to load, fall back to icon
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              // Remove the img element
                              parent.removeChild(e.currentTarget);
                              // Add the icon
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
              ) : (
                // Fallback if no social media data
                <>
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
                </>
              )}
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