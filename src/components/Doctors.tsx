import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Star, Clock, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAllDoctors } from "../services/doctors/doctorService";
import type { DoctorTypes } from "../services/doctors/doctor.types";

export function Doctors() {
  const { t, i18n } = useTranslation();
  const [doctors, setDoctors] = useState<DoctorTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const data = await getAllDoctors();
        setDoctors(data);
      } catch (err) {
        setError("Failed to load doctors");
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Function to handle image errors
  const handleImageError = (doctorId: number) => {
    setImageErrors((prev) => ({ ...prev, [doctorId]: true }));
  };

  // Function to get localized field based on current language
  const getLocalizedField = (doctor: DoctorTypes, field: keyof DoctorTypes) => {
    const currentLanguage = i18n.language;
    const localizedField = `${field}_${currentLanguage}` as keyof DoctorTypes;

    if (doctor[localizedField]) {
      return doctor[localizedField];
    }

    switch (currentLanguage) {
      case "uz":
        return doctor[`${field}_uz` as keyof DoctorTypes] || doctor[field];
      case "ru":
        return doctor[`${field}_ru` as keyof DoctorTypes] || doctor[field];
      case "zh":
      case "zh-CN":
      case "zh-Hans":
        return doctor[`${field}_zh_hans` as keyof DoctorTypes] || doctor[field];
      case "ar":
        return doctor[`${field}_ar` as keyof DoctorTypes] || doctor[field];
      case "en":
      default:
        return doctor[`${field}_en` as keyof DoctorTypes] || doctor[field];
    }
  };

  // Function to get color based on specialty or index
  const getDoctorColor = (index: number) => {
    const colors = [
      "from-orange-500 to-orange-600",
      "from-orange-500 to-orange-600",
      "from-yellow-500 to-yellow-600",
      "from-purple-600 to-indigo-700",
      "from-teal-500 to-teal-600",
      "from-orange-500 to-orange-600",
    ];
    return colors[index % colors.length];
  };

  // Function to parse achievements string into array
  const parseAchievements = (achievementsString: string): string[] => {
    try {
      if (
        achievementsString.startsWith("[") ||
        achievementsString.startsWith("{")
      ) {
        const parsed = JSON.parse(achievementsString);
        if (Array.isArray(parsed)) return parsed;
      }

      return achievementsString
        .split(/[,\n|•]/)
        .filter((item) => item.trim().length > 0);
    } catch {
      return [achievementsString];
    }
  };

  // Function to check if image is a valid URL or should be treated as placeholder
  const isValidImage = (imagePath: string | null): boolean => {
    if (!imagePath) return false;

    // Check if it's a local file path (starts with /media/ or similar)
    if (
      imagePath.startsWith("/media/") ||
      imagePath.startsWith("/static/") ||
      imagePath.startsWith("/uploads/")
    ) {
      return false;
    }

    // Check if it's a valid URL
    try {
      new URL(imagePath);
      return true;
    } catch {
      return false;
    }
  };

  // Show loading state
  if (loading) {
    return (
      <section id="doctors" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#E84E27] mb-4">{t("doctors.title")}</h2>
            <p className="text-[#718096] max-w-2xl mx-auto">
              {t("doctors.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg overflow-hidden rounded-2xl"
              >
                <div className="relative h-64 bg-gray-200 animate-pulse"></div>
                <div className="bg-[#231864] p-6 text-white">
                  <div className="h-6 bg-gray-400 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-400 rounded w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-400 rounded w-1/2 mb-4 animate-pulse"></div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-gray-400 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-400 rounded flex-1 animate-pulse"></div>
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

  // Show error state
  if (error) {
    return (
      <section id="doctors" className="py-20 bg-[#F8F9FA]">
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
    <section id="doctors" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#E84E27] mb-4">{t("doctors.title")}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            {t("doctors.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => {
            const localizedName = getLocalizedField(
              doctor,
              "full_name"
            ) as string;
            const localizedProfession = getLocalizedField(
              doctor,
              "profession"
            ) as string;
            const localizedSpeciality = getLocalizedField(
              doctor,
              "speciality"
            ) as string;
            const localizedAchievements = getLocalizedField(
              doctor,
              "achievements"
            ) as string;
            const localizedAbout = getLocalizedField(doctor, "about") as string;

            const achievementsArray = parseAchievements(localizedAchievements);
            const shouldShowImage =
              isValidImage(doctor.image) && !imageErrors[doctor.id];

            return (
              <Card
                key={doctor.id}
                className="border-0 shadow-lg overflow-hidden rounded-2xl hover:shadow-2xl transition-all"
              >
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {shouldShowImage ? (
                    <img
                      src={doctor.image!}
                      alt={localizedName}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(doctor.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <User className="w-16 h-16 mb-2" />
                      <span className="text-sm">No Image Available</span>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="relative bg-[#231864] p-6 text-white">
                  <h3 className="text-white mb-2">{localizedName}</h3>
                  <div
                    className={`inline-block px-3 py-1 rounded-full mb-3 bg-gradient-to-r ${getDoctorColor(
                      index
                    )} text-white text-sm font-semibold`}
                  >
                    {localizedProfession || localizedSpeciality}
                  </div>
                  <div className="flex items-center space-x-2 text-white/90 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {doctor.experience} {t("doctors.experience")}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {doctor.operations}+ {t("operations")}
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {localizedAbout}
                    </p>
                  </div>

                  {/* Achievements with Stars */}
                  {achievementsArray.length > 0 && (
                    <div className="space-y-2">
                      {achievementsArray.slice(0, 3).map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/90">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Show message if no doctors found */}
        {doctors.length === 0 && !loading && (
          <div className="text-center text-gray-500 mt-8">
            {t("doctors.noDoctors") || "No doctors found"}
          </div>
        )}
      </div>
    </section>
  );
}
