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
      image: 'https://sc04.alicdn.com/kf/H3c3e2bf4926247269a8f4c4cdd73cadfY.jpg_350x350.jpg',
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
      image: 'https://images.jdmagicbox.com/quickquotes/images_main/internet-website-developers-for-doctor-2224391753-nuza5ghs.jpg',
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
      image: 'https://i.pinimg.com/170x/7f/79/55/7f7955a81f8a0a76fb3ebbdbed63477c.jpg',
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
      image: 'https://estetica.istanbul/wp-content/uploads/2024/04/successful-surgeons-for-treatment-of-hair-transplant-in-turkey.png',
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
      image: 'https://img.redro.pl/plakaty/young-woman-doctor-dressed-white-medical-uniform-400-241268608.jpg',
      description: t('doctors.descriptions.therapist'),
      achievements: t('doctors.achievements.therapist', { returnObjects: true }),
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: t('language') === 'ru' ? 'Доктор Сергей Николаев' : 
            t('language') === 'uz' ? 'Doktor Sergey Nikolayev' :
            'Dr. Sergey Nikolayev',
      specialty: t('doctors.specialties.urologist'),
      experience: `14 ${t('doctors.experience')}`,
      image: 'https://st4.depositphotos.com/3776273/39461/i/450/depositphotos_394613312-stock-photo-covid-19-preventing-virus-healthcare.jpg',
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
              <div className={`relative bg-gradient-to-br bg-[#231864] bg-repeat p-6 text-white`}>
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
                      <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
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