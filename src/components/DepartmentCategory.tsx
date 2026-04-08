import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllCategories } from '../services/category/categoryService';
import type { CategoryTypes } from '../services/category/category.types';
import cardiology from '../assets/images/cardiology.png';
import neurology from '../assets/images/neurology.png';
import ortopedy from '../assets/images/ortopedy.png';
import pulmonology from '../assets/images/pulmonology.png';
import stomotology from '../assets/images/stomotology.png';
import urology from '../assets/images/urology.png';

// Default icons mapping
const defaultIcons = [cardiology, neurology, ortopedy, urology, stomotology, pulmonology];

export function DepartmentCategory() {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getAllCategories();
        setCategories(data);
      } catch (err) {
        setError(t('departments.loadError') || 'Failed to load categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [t]);

  const getLocalizedName = (category: CategoryTypes) => {
    const lang = i18n.language;
    return (
      (lang === 'uz' && category.name_uz) ||
      (lang === 'ru' && category.name_ru) ||
      (['zh', 'zh-CN', 'zh-Hans'].includes(lang) && category.name_zh_hans) ||
      (lang === 'ar' && category.name_ar) ||
      category.name_en ||
      category.name
    );
  };

  const getCategoryIcon = (index: number, category: CategoryTypes) => {
    if (category.image) return category.image;
    return defaultIcons[index % defaultIcons.length];
  };

  // Loading skeleton
  if (loading) {
    return (
      <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF]">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('departments.title')} subtitle={t('departments.subtitle')} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF]">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-600 text-lg mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#2D1B69] text-white px-6 py-2 rounded-full hover:bg-[#3F2A7D] transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="category" className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF]">
      <div className="container mx-auto px-4">
        <SectionHeader title={t('departments.title')} subtitle={t('departments.subtitle')} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                name={getLocalizedName(category)}
                icon={getCategoryIcon(index, category)}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full mt-8">
              {t('departments.noDepartments') || 'No departments found'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Reusable Section Header
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-[#2D1B69] mb-4">{title}</h2>
      <p className="text-[#718096] max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

// Reusable Category Card
function CategoryCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center border border-gray-200">
      <div className="w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mb-2">
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 object-contain"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>
      <span className="text-xs font-medium text-[#2D3748] text-center leading-tight">{name}</span>
    </div>
  );
}

// Skeleton Card
function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center border border-gray-200 animate-pulse">
      <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
    </div>
  );
}