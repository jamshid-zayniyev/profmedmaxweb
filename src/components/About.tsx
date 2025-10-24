import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const features = t('about.features', { returnObjects: true });

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
              alt={t('about.title')}
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content - Text */}
          <div>
            <h2 className="text-[#2D1B69] mb-6">
              {t('about.title')}
            </h2>
            <p className="text-[#718096] mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-[#718096] mb-8 leading-relaxed">
              {t('about.description2')}
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
              {t('about.consultationButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}