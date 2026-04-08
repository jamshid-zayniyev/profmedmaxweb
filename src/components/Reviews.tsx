import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.jpg";
import review3 from "../assets/images/review3.jpg";

export function Reviews() {
  const { t } = useTranslation();

  // Reviews ma'lumotlarini i18n dan olamiz
  const reviews = t('reviews.reviewsList', { returnObjects: true }).map((review, index) => ({
    ...review,
    role: t('reviews.patient'),
    rating: 5, // Barcha sharhlar 5 yulduz
    avatar: [review1, review2, review3][index], // avatarlar ketma-ket
  }));

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] text-3xl font-bold mb-4">{t('reviews.title')}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto text-lg leading-relaxed">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-[#5B4E99] transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#5B4E99]/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#718096] mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
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