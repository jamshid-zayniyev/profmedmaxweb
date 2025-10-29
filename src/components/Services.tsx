import { Card, CardContent } from './ui/card';
import { Clock, Shield, Users, Award, Heart, Activity } from 'lucide-react';
export function Services() {
  const services = [
    {
      icon: Clock,
      title: 'Круглосуточная помощь',
      description: 'Наши специалисты готовы помочь вам в любое время суток',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Современное оборудование',
      description: 'Используем новейшие технологии для точной диагностики',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: 'Опытные врачи',
      description: 'Команда профессионалов с многолетним опытом',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      title: 'Высокое качество',
      description: 'Сертифицированные специалисты и проверенные методики',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Heart,
      title: 'Забота о пациентах',
      description: 'Индивидуальный подход к каждому пациенту',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Activity,
      title: 'Комплексная диагностика',
      description: 'Полный спектр диагностических исследований',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">Почему выбирают нас</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            Наши преимущества делают лечение максимально эффективным и комфортным
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-[#2D1B69] mb-3">{service.title}</h3>
                  <p className="text-[#718096] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
