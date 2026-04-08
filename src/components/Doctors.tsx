import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import dynamic from "next/dynamic"; // for dynamic icon imports
import { useTranslation } from "react-i18next";
import { getAllDoctors } from "../services/doctors/doctorService";
import type { DoctorTypes } from "../services/doctors/doctor.types";

// Dynamically import icons for performance
const Star = dynamic(() => import("lucide-react").then(mod => mod.Star), { ssr: false });
const Clock = dynamic(() => import("lucide-react").then(mod => mod.Clock), { ssr: false });
const User = dynamic(() => import("lucide-react").then(mod => mod.User), { ssr: false });

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

  const handleImageError = (doctorId: number) => {
    setImageErrors((prev) => ({ ...prev, [doctorId]: true }));
  };

  const getLocalizedField = (doctor: DoctorTypes, field: keyof DoctorTypes) => {
    const currentLanguage = i18n.language;
    const localizedField = `${field}_${currentLanguage}` as keyof DoctorTypes;

    if (doctor[localizedField]) return doctor[localizedField];

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

  const getDoctorColor = (index: number) => {
    const colors = [
      "from-orange-500 to-orange-600",
      "from-yellow-500 to-yellow-600",
      "from-purple-600 to-indigo-700",
      "from-teal-500 to-teal-600",
    ];
    return colors[index % colors.length];
  };

  const parseAchievements = (achievementsString: string): string[] => {
    try {
      if (achievementsString.startsWith("[") || achievementsString.startsWith("{")) {
        const parsed = JSON.parse(achievementsString);
        if (Array.isArray(parsed)) return parsed;
      }
      return achievementsString.split(/[,\n|•]/).filter((item) => item.trim().length > 0);
    } catch {
      return [achievementsString];
    }
  };

  const isValidImage = (imagePath: string | null): boolean => {
    if (!imagePath) return false;
    if (
      imagePath.startsWith("/media/") ||
      imagePath.startsWith("/static/") ||
      imagePath.startsWith("/uploads/") ||
      imagePath.includes("placeholder") ||
      imagePath.includes("default")
    ) {
      return false;
    }
    try {
      const url = new URL(imagePath);
      if (url.protocol === "data:") return imagePath.length > 1000;
      return true;
    } catch {
      return false;
    }
  };

  if (loading) {
    return (
      <main id="doctors" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-[#E84E27] mb-4">{t("doctors.title")}</h2>
            <p className="text-[#718096] max-w-2xl mx-auto">{t("doctors.subtitle")}</p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden rounded-2xl">
                <div className="relative h-60 bg-gray-200 animate-pulse" />
                <div className="bg-[#231864] p-6 text-white">
                  <div className="h-6 bg-gray-400 rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-400 rounded w-3/4 mb-3 animate-pulse" />
                  <div className="h-4 bg-gray-400 rounded w-1/2 mb-4 animate-pulse" />
                  <div className="space-y-2">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-gray-400 rounded animate-pulse" />
                        <div className="h-4 bg-gray-400 rounded flex-1 animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main id="doctors" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-600 text-lg mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#2D1B69] text-white px-6 py-2 rounded-full hover:bg-[#3F2A7D] transition-colors"
            aria-label="Retry loading doctors"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id="doctors" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-[#E84E27] mb-4">{t("doctors.title")}</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">{t("doctors.subtitle")}</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => {
            const localizedName = getLocalizedField(doctor, "full_name") as string;
            const localizedProfession = getLocalizedField(doctor, "profession") as string;
            const localizedSpeciality = getLocalizedField(doctor, "speciality") as string;
            const localizedAchievements = getLocalizedField(doctor, "achievements") as string;
            const localizedAbout = getLocalizedField(doctor, "about") as string;
            const achievementsArray = parseAchievements(localizedAchievements);
            const shouldShowImage = isValidImage(doctor.image) && !imageErrors[doctor.id];

            return (
              <article key={doctor.id} className="border-0 shadow-lg overflow-hidden rounded-2xl hover:shadow-2xl transition-all flex flex-col h-full">
                <div className="relative h-60 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                  {shouldShowImage ? (
                    <img
                      src={doctor.image!}
                      alt={localizedName}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(doctor.id)}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        if (img.naturalWidth < 50 || img.naturalHeight < 50) handleImageError(doctor.id);
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400" aria-hidden="true">
                      <User className="w-16 h-16 mb-2" />
                      <span className="text-sm">No Image Available</span>
                    </div>
                  )}
                </div>

                <div className="relative bg-[#231864] p-6 text-white flex-grow flex flex-col">
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl text-white mb-2">{localizedName}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full mb-2 bg-gradient-to-r ${getDoctorColor(index)} text-white text-sm font-semibold flex-shrink-0`}>
                      {localizedProfession}
                    </div>
                    <div className="inline-block py-1 rounded-full mb-4 bg-gradient-to-r text-white text-sm font-semibold flex-shrink-0">
                      {localizedSpeciality}
                    </div>

                    <div className="space-y-2 flex-grow">
                      {doctor.experience > 0 && (
                        <div className="flex items-center space-x-2 text-white/90">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{doctor.experience} {t("doctors.experience")}</span>
                        </div>
                      )}

                      {doctor.operations > 0 && (
                        <div className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
                          <p className="text-white/90 text-sm leading-relaxed">{doctor.operations}+ {t("operations")}</p>
                        </div>
                      )}

                      {localizedAbout && (
                        <div className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
                          <p className="text-white/90 text-sm leading-relaxed">{localizedAbout}</p>
                        </div>
                      )}

                      {achievementsArray.length > 0 && (
                        <div className="space-y-2">
                          {achievementsArray.slice(0, 3).map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Star className="w-4 h-4 text-yellow-300 fill-blue-300 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-white/90">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {doctors.length === 0 && !loading && (
          <div className="text-center text-gray-500 mt-8">{t("doctors.noDoctors") || "No doctors found"}</div>
        )}
      </div>
    </main>
  );
}