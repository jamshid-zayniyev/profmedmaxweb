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

        // Fetch all data in parallel
        const [socialData, locationData, phoneData, emailData] = await Promise.all([
          getSocialMedia(),
          getLocation(),
          getPhone(),
          getEmail(),
        ]);

        setSocialMedia(socialData);

        // Assuming APIs return arrays, take the first item for single-value data
        if (locationData && locationData.length > 0) {
          setLocation(locationData[0]);
        }
        if (phoneData && phoneData.length > 0) {
          setPhones(phoneData);
        }
        if (emailData && emailData.length > 0) {
          setEmails(emailData);
        }
      } catch (err) {
        setError('Failed to load footer information');
        console.error('Error fetching footer data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
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

  // Function to get image URL for social media
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

  // Function to get display address
  const getDisplayAddress = () => {
    if (loading) {
      return t('footer.contact.address');
    }
    if (location) {
      return location.fullAddress || `${location.street} ${location.house}, ${location.region}`;
    }
    return t('footer.contact.address');
  };

  // Function to get display phone numbers
  const getDisplayPhones = () => {
    if (loading) {
      return t('footer.contact.phone');
    }
    if (phones.length > 0) {
      return phones.slice(0, 2).map(phone => phone.number).join(', ');
    }
    return t('footer.contact.phone');
  };

  // Function to get display email
  const getDisplayEmail = () => {
    if (loading) {
      return t('footer.contact.email');
    }
    if (emails.length > 0) {
      return emails[0].email; // Use first email as primary
    }
    return t('footer.contact.email');
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
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform rounded-[50%]"
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
                <span>{getDisplayAddress()}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {phones.length > 0 ? (
                    phones.slice(0, 2).map((phone, index) => (
                      <span key={phone.id}>
                        <a href={`tel:${phone.number}`} className="hover:text-white">
                          {phone.number}
                        </a>
                        {index < phones.length - 1 && ', '}
                      </span>
                    ))
                  ) : (
                    getDisplayPhones()
                  )}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {emails.length > 0 ? (
                    emails.map((email, index) => (
                      <span key={email.id}>
                        <a href={`mailto:${email.email}`} className="hover:text-white">
                          {email.email}
                        </a>
                        {index < emails.length - 1 && ', '}
                      </span>
                    ))
                  ) : (
                    getDisplayEmail()
                  )}
                </span>
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