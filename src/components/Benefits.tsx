import { useRef } from 'react';
import { Clock, Shield, Percent, Headphones, CreditCard, FileCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion, useInView } from 'motion/react';

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Clock,
      title: 'Быстрая запись',
      description: 'Онлайн-запись без звонков 24/7'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Лицензированные специалисты с опытом'
    },
    {
      icon: CreditCard,
      title: 'Удобная оплата',
      description: 'Наличные, карты, рассрочка'
    },
    {
      icon: Headphones,
      title: 'Поддержка 24/7',
      description: 'Консультации и запись круглосуточно'
    },
    {
      icon: FileCheck,
      title: 'Полный пакет документов',
      description: 'Все справки и заключения'
    },
    {
      icon: Percent,
      title: 'Программы лояльности',
      description: 'Скидки постоянным пациентам'
    }
  ];

  const promotions = [
    {
      title: 'Комплексный Check-up',
      description: 'Полное обследование организма со скидкой 20%',
      discount: '-20%',
      originalPrice: '15 000 ₽',
      price: '12 000 ₽',
      validity: 'До 31 октября 2025'
    },
    {
      title: 'Первичный прием педиатра',
      description: 'Консультация детского врача + базовые анализы',
      discount: '-15%',
      originalPrice: '3 000 ₽',
      price: '2 550 ₽',
      validity: 'Постоянная акция'
    },
    {
      title: 'Семейная программа',
      description: 'Оформите карту для всей семьи и получите бонусы',
      discount: '-10%',
      originalPrice: null,
      price: 'Скидка на все услуги',
      validity: 'Бессрочно'
    }
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 gradient-bg-soft relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A8E6CF]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Benefits */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Почему выбирают нас</h2>
          <p className="max-w-2xl mx-auto">
            <span className="accent-text text-xl block text-[#007BFF]">
              "Мы делаем всё для вашего комфорта и здоровья"
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start space-x-4 glass p-6 rounded-2xl hover:shadow-2xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[#FF9500] to-[#FF7A00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </motion.div>
                <div>
                  <h3 className="text-[#2C3E50] mb-1">{benefit.title}</h3>
                  <p className="text-[#5A6C7D]">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Promotions */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="mb-4">Акции и специальные предложения</h2>
          <p className="max-w-2xl mx-auto">
            <span className="accent-text text-xl block text-[#FF9500]">
              "Воспользуйтесь выгодными предложениями прямо сейчас"
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all border-0 glass h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF9500] to-[#FF7A00] opacity-10 rounded-bl-full"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#FF9500] to-[#FF7A00] text-white border-0 shadow-lg">
                  {promo.discount}
                </Badge>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-[#2C3E50] mb-3">{promo.title}</h3>
                  <p className="text-[#5A6C7D] mb-4">{promo.description}</p>
                  <div className="mb-4">
                    {promo.originalPrice && (
                      <div className="text-[#5A6C7D] line-through">{promo.originalPrice}</div>
                    )}
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FF9500] to-[#FF7A00] bg-clip-text text-transparent">
                      {promo.price}
                    </div>
                    <div className="text-sm text-[#5A6C7D] mt-1">Действует {promo.validity}</div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={scrollToAppointment}
                      className="w-full bg-gradient-to-r from-[#007BFF] to-[#0056b3] hover:from-[#0056b3] hover:to-[#004085] text-white shadow-lg min-h-[48px]"
                    >
                      Воспользоваться
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
