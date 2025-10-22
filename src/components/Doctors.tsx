import { Card } from './ui/card';
import { Star, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Doctors() {
  const { t } = useTranslation();

  const doctors = [
    {
      name: t('language') === 'ru' ? 'Доктор Елена Иванова' : 
            t('language') === 'uz' ? 'Doktor Elena Ivanova' :
            t('language') === 'ar' ? 'الدكتورة إيلينا إيفانوفا' :
            t('language') === 'zh' ? '伊莲娜·伊万诺娃医生' :
            'Dr. Elena Ivanova',
      specialty: t('doctors.specialties.cardiologist'),
      experience: `15 ${t('doctors.experience')}`,
      image: 'https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5Mzk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: t('doctors.descriptions.cardiologist'),
      achievements: t('doctors.achievements.cardiologist', { returnObjects: true }),
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: t('language') === 'ru' ? 'Доктор Александр Петров' : 
            t('language') === 'uz' ? 'Doktor Aleksandr Petrov' :
            t('language') === 'ar' ? 'الدكتور ألكسندر بيتروف' :
            t('language') === 'zh' ? '亚历山大·彼得罗夫医生' :
            'Dr. Alexander Petrov',
      specialty: t('doctors.specialties.orthopedicSurgeon'),
      experience: `18 ${t('doctors.experience')}`,
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: t('doctors.descriptions.orthopedicSurgeon'),
      achievements: t('doctors.achievements.orthopedicSurgeon', { returnObjects: true }),
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: t('language') === 'ru' ? 'Доктор Мария Смирнова' : 
            t('language') === 'uz' ? 'Doktor Mariya Smirnova' :
            t('language') === 'ar' ? 'الدكتورة ماريا سميرنوفا' :
            t('language') === 'zh' ? '玛丽亚·斯米尔诺娃医生' :
            'Dr. Maria Smirnova',
      specialty: t('doctors.specialties.pediatrician'),
      experience: `12 ${t('doctors.experience')}`,
      image: 'https://images.unsplash.com/photo-1567745566980-4378a3db17fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWNpYW4lMjBkb2N0b3J8ZW58MXx8fHwxNzYwOTIwODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: t('doctors.descriptions.pediatrician'),
      achievements: t('doctors.achievements.pediatrician', { returnObjects: true }),
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: t('language') === 'ru' ? 'Доктор Дмитрий Козлов' : 
            t('language') === 'uz' ? 'Doktor Dmitriy Kozlov' :
            t('language') === 'ar' ? 'الدكتور دميتري كوزلوف' :
            t('language') === 'zh' ? '德米特里·科兹洛夫医生' :
            'Dr. Dmitry Kozlov',
      specialty: t('doctors.specialties.neurologist'),
      experience: `20 ${t('doctors.experience')}`,
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: t('doctors.descriptions.neurologist'),
      achievements: t('doctors.achievements.neurologist', { returnObjects: true }),
      color: 'from-purple-600 to-indigo-700'
    },
    {
      name: t('language') === 'ru' ? 'Доктор Анна Волкова' : 
            t('language') === 'uz' ? 'Doktor Anna Volkova' :
            t('language') === 'ar' ? 'الدكتورة آنا فولكوفا' :
            t('language') === 'zh' ? '安娜·沃尔科娃医生' :
            'Dr. Anna Volkova',
      specialty: t('doctors.specialties.therapist'),
      experience: `10 ${t('doctors.experience')}`,
      image: 'https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5Mzk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: t('doctors.descriptions.therapist'),
      achievements: t('doctors.achievements.therapist', { returnObjects: true }),
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: t('language') === 'ru' ? 'Доктор Сергей Николаев' : 
            t('language') === 'uz' ? 'Doktor Sergey Nikolayev' :
            t('language') === 'ar' ? 'الدكتور سيرجي نيكولايف' :
            t('language') === 'zh' ? '谢尔盖·尼古拉耶夫医生' :
            'Dr. Sergey Nikolayev',
      specialty: t('doctors.specialties.urologist'),
      experience: `14 ${t('doctors.experience')}`,
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: t('doctors.descriptions.urologist'),
      achievements: t('doctors.achievements.urologist', { returnObjects: true }),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#E84E27] mb-4">
            {t('doctors.title')}
          </h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            {t('doctors.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden rounded-2xl hover:shadow-2xl transition-all">
              {/* Image Section */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info Section with Gradient Background */}
              <div className={`relative bg-gradient-to-br ${doctor.color} p-6 text-white`}>
                <h3 className="text-white mb-2">{doctor.name}</h3>
                <div className={`inline-block px-3 py-1 rounded-full mb-3 bg-gradient-to-r ${doctor.color} text-white text-sm font-semibold`}>
                  {doctor.specialty}
                </div>
                <div className="flex items-center space-x-2 text-white/90 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{doctor.experience}</span>
                </div>
                
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {doctor.description}
                </p>
                
                {/* Achievements with Stars */}
                <div className="space-y-2">
                  {doctor.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}