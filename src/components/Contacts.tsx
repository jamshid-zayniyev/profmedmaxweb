import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Пожалуйста, заполните все обязательные поля');
      return;
    }

    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
    
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
          <h2 className="text-[#2D1B69] mb-4">Свяжитесь с нами</h2>
          <p className="text-[#718096]">Мы всегда готовы помочь и ответить на ваши вопросы</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#2D1B69] mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">Адрес</h4>
                    <p className="text-[#718096]">
                      ул. Медицинская, д. 123<br />
                      г. Москва, Россия 101000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">Телефон</h4>
                    <p className="text-[#718096]">
                      <a href="tel:+74951234567" className="hover:text-[#5B4E99]">+7 (495) 123-45-67</a><br />
                      <a href="tel:+74951234568" className="hover:text-[#5B4E99]">+7 (495) 123-45-68</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">Email</h4>
                    <p className="text-[#718096]">
                      <a href="mailto:info@profmedmax.ru" className="hover:text-[#5B4E99]">info@profmedmax.ru</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">Часы работы</h4>
                    <p className="text-[#718096]">
                      Пн-Пт: 8:00 - 20:00<br />
                      Сб-Вс: 9:00 - 18:00<br />
                      Экстренная помощь: 24/7
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
                title="Расположение клиники на карте"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div id="appointment" className="bg-[#F8F9FA] p-8 rounded-2xl">
            <h3 className="text-[#2D1B69] mb-6">Записаться на прием</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Полное имя *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о ваших симптомах или вопросах..."
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
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
