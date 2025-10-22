import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function About() {
  const features = [
    'Современное медицинское оборудование',
    'Высококвалифицированные специалисты',
    'Индивидуальный подход к каждому',
    'Комфортные условия пребывания',
    'Доступные цены на услуги',
    'Удобное расположение клиники'
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#5B4E99] rounded-2xl opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjEwMjUzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="О нашей клинике"
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content - Text */}
          <div>
            <h2 className="text-[#2D1B69] mb-6">
              О нашей клинике
            </h2>
            <p className="text-[#718096] mb-6 leading-relaxed">
              PMM PROFMEDMAX — современная многопрофильная медицинская клиника, 
              оснащенная новейшим оборудованием и укомплектованная 
              высококвалифицированными специалистами.
            </p>
            <p className="text-[#718096] mb-8 leading-relaxed">
              Мы предоставляем широкий спектр медицинских услуг, от профилактических 
              осмотров до сложных диагностических процедур. Наша цель — обеспечить 
              каждому пациенту качественную медицинскую помощь в комфортных условиях.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#5B4E99] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2D3748]">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToAppointment}
              className="bg-[#5B4E99] hover:bg-[#3F2A7D] text-white px-8 py-6 rounded-md font-semibold"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
