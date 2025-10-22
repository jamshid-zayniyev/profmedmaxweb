import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustedProvider() {
  const { t } = useTranslation();

  const features = [
    t('trusted.features.expertTeam'),
    t('trusted.features.emergencyCare'),
    t('trusted.features.patientFocused'),
    t('trusted.features.modernEquipment'),
    t('trusted.features.comprehensiveServices'),
    t('trusted.features.advancedTech')
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[#2D3748] mb-6 leading-tight">
              {t('trusted.title')}
            </h2>
            
            <p className="text-[#718096] mb-8 leading-relaxed">
              {t('trusted.description1')}
            </p>
            
            <p className="text-[#718096] mb-8 leading-relaxed">
              {t('trusted.description2')}
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-[#2D3748] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-sm text-[#718096]">{t('trusted.stats.years')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-[#718096]">{t('trusted.stats.specialists')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
                <div className="text-sm text-[#718096]">{t('trusted.stats.patients')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB0ZWFtJTIwaG9zcGl0YWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDI2NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t('trusted.title')}
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}