import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Reviews() {
  const { t } = useTranslation();

  const reviews = t('reviews.reviewsList', { returnObjects: true }).map((review, index) => ({
    ...review,
    role: t('reviews.patient'),
    rating: 5,
    avatar: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    ][index]
  }));

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">{t('reviews.title')}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-[#5B4E99] transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-[#5B4E99]/20 mb-4" />
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-[#718096] mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#2D3748]">{review.name}</div>
                    <div className="text-sm text-[#718096]">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}