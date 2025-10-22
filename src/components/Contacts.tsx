import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export function Contacts() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(t('contacts.toast.error'));
      return;
    }

    toast.success(t('contacts.toast.success'));
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">{t('contacts.title')}</h2>
          <p className="text-[#718096]">{t('contacts.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#2D1B69] mb-6">{t('contacts.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">{t('contacts.address.title')}</h4>
                    <p className="text-[#718096]">
                      {t('contacts.address.line1')}<br />
                      {t('contacts.address.line2')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">{t('contacts.phone.title')}</h4>
                    <p className="text-[#718096]">
                      <a href="tel:+74951234567" className="hover:text-[#5B4E99]">{t('contacts.phone.number1')}</a><br />
                      <a href="tel:+74951234568" className="hover:text-[#5B4E99]">{t('contacts.phone.number2')}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">{t('contacts.email.title')}</h4>
                    <p className="text-[#718096]">
                      <a href="mailto:info@profmedmax.ru" className="hover:text-[#5B4E99]">{t('contacts.email.address')}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">{t('contacts.hours.title')}</h4>
                    <p className="text-[#718096]">
                      {t('contacts.hours.weekdays')}<br />
                      {t('contacts.hours.weekends')}<br />
                      {t('contacts.hours.emergency')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.3947386464283!2d37.62196931592435!3d55.76697998055647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Kremlin!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={t('contacts.title')}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div id="appointment" className="bg-[#F8F9FA] p-8 rounded-2xl">
            <h3 className="text-[#2D1B69] mb-6">{t('contacts.appointmentTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">{t('contacts.form.name')}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('contacts.form.namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="email">{t('contacts.form.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contacts.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="phone">{t('contacts.form.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t('contacts.form.phonePlaceholder')}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="message">{t('contacts.form.message')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('contacts.form.messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="mt-1 bg-white"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#5B4E99] hover:bg-[#3F2A7D] text-white font-semibold py-6 rounded-md"
              >
                {t('contacts.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}