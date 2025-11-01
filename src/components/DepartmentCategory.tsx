import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllCategories } from '../services/category/categoryService'; // Adjust the import path as needed
import type { CategoryTypes } from '../services/category/category.types'; // Adjust the import path as needed
import cardiology from '../assets/images/cardiology.png';
import neurology from '../assets/images/neurology.png';
import ortopedy from '../assets/images/ortopedy.png';
import pulmonology from '../assets/images/pulmonology.png';
import stomotology from '../assets/images/stomotology.png';
import urology from '../assets/images/urology.png';


// Default icons mapping for fallback
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
        setError('Failed to load categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to get localized category name based on current language
  const getLocalizedName = (category: CategoryTypes) => {
    const currentLanguage = i18n.language;
    
    switch (currentLanguage) {
      case 'uz':
        return category.name_uz || category.name;
      case 'ru':
        return category.name_ru || category.name;
      case 'zh':
      case 'zh-CN':
      case 'zh-Hans':
        return category.name_zh_hans || category.name;
      case 'ar':
        return category.name_ar || category.name;
      case 'en':
      default:
        return category.name_en || category.name;
    }
  };

  // Function to get icon for category
  const getCategoryIcon = (index: number, category: CategoryTypes) => {
    // Use category image from API if available
    if (category.image) {
      return category.image;
    }
    
    // Fallback to default icons based on index
    return defaultIcons[index % defaultIcons.length];
  };


  // Show loading state
  if (loading) {
    return (
      <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#2D1B69] mb-4">{t('departments.title')}</h2>
            <p className="text-[#718096] max-w-2xl mx-auto">
              {t('departments.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center border border-gray-200 animate-pulse"
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-red-600 text-lg mb-4">{error}</div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#2D1B69] text-white px-6 py-2 rounded-full hover:bg-[#3F2A7D] transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='category' className="py-12 bg-gradient-to-b from-[#E6F0FA] to-[#D1E8FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">{t('departments.title')}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            {t('departments.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center border border-gray-200"
            >
              <div className={`w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mb-2`}>
                <img 
                  src={getCategoryIcon(index, category)} 
                  alt={getLocalizedName(category)} 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    // Fallback to a default icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // You could add a default icon component here
                  }}
                />
              </div>
              <span className="text-xs font-medium text-[#2D3748] text-center leading-tight">
                {getLocalizedName(category)}
              </span>
            </div>
          ))}
        </div>

        {/* Show message if no categories found */}
        {categories.length === 0 && !loading && (
          <div className="text-center text-gray-500 mt-8">
            No departments found
          </div>
        )}
      </div>
    </section>
  );
}