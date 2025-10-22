import { Card } from './ui/card';
import { Star, Clock } from 'lucide-react';

export function Doctors() {
  const doctors = [
    {
      name: 'Доктор Елена Иванова',
      specialty: 'Главный кардиолог',
      experience: '15 лет опыта',
      image: 'https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5Mzk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Специалист по сердечно-сосудистым заболеваниям, кандидат медицинских наук',
      achievements: [
        '500+ операций',
        'Награда "Лучший кардиолог 2024"',
        'Международная сертификация'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Доктор Александр Петров',
      specialty: 'Хирург-ортопед',
      experience: '18 лет опыта',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Эксперт по эндопротезированию суставов и спортивной медицине',
      achievements: [
        '1000+ операций',
        'Профессор',
        'Стаж в ведущих клиниках Европы'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Доктор Мария Смирнова',
      specialty: 'Педиатр высшей категории',
      experience: '12 лет опыта',
      image: 'https://images.unsplash.com/photo-1567745566980-4378a3db17fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWNpYW4lMjBkb2N0b3J8ZW58MXx8fHwxNzYwOTIwODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Специалист по детским заболеваниям и иммунологии',
      achievements: [
        '5000+ детей',
        'Сертификат по вакцинации',
        'Автор научных статей'
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Доктор Дмитрий Козлов',
      specialty: 'Невролог',
      experience: '20 лет опыта',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Ведущий специалист по заболеваниям нервной системы',
      achievements: [
        'Доктор наук',
        'Международный эксперт',
        'Лектор конференций'
      ],
      color: 'from-purple-600 to-indigo-700'
    },
    {
      name: 'Доктор Анна Волкова',
      specialty: 'Терапевт',
      experience: '10 лет опыта',
      image: 'https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5Mzk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Врач общей практики, специалист по профилактической медицине',
      achievements: [
        'Магистр здравоохранения',
        'Эксперт ЗОЖ',
        '3000+ пациентов'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Доктор Сергей Николаев',
      specialty: 'Уролог',
      experience: '14 лет опыта',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Специалист по малоинвазивной хирургии',
      achievements: [
        'Лапароскопия',
        'Эндоурология',
        'Европейская ассоциация урологов'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#E84E27] mb-4">
            Познакомьтесь с нашей<br />командой экспертов
          </h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            Мы — это команда высококвалифицированных специалистов, объединенных общей целью: 
            обеспечить вам наилучшее медицинское обслуживание и заботу
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
