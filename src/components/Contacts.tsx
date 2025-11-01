import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { getLocation } from "../services/location/locationService";
import { getPhone } from "../services/phone/phoneService";
import { getEmail } from "../services/email/emailService";
import { getworkTime } from "../services/workTime/workTimeService";
import { postWaitlist } from "../services/waitlist/waitlistService";
import type { LocationTypes } from "../services/location/location.types";
import type { PhoneTypes } from "../services/phone/phone.types";
import type { EmailTypes } from "../services/email/email.types";
import type { workTimeTypes } from "../services/workTime/workTime.types";
import type { WaitlistTypes } from "../services/waitlist/waitlist.types";

export function Contacts() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [location, setLocation] = useState<LocationTypes | null>(null);
  const [phones, setPhones] = useState<PhoneTypes[]>([]);
  const [emails, setEmails] = useState<EmailTypes[]>([]);
  const [workTimes, setWorkTimes] = useState<workTimeTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);

        // Fetch all data in parallel
        const [locationData, phoneData, emailData, workTimeData] =
          await Promise.all([
            getLocation(),
            getPhone(),
            getEmail(),
            getworkTime(),
          ]);

        // Assuming APIs return arrays, take the first item for single-value data
        if (locationData && locationData.length > 0) {
          setLocation(locationData[0]);
        }
        if (phoneData && phoneData.length > 0) {
          setPhones(phoneData);
        }
        if (emailData && emailData.length > 0) {
          setEmails(emailData);
        }
        if (workTimeData && workTimeData.length > 0) {
          setWorkTimes(workTimeData);
        }
      } catch (err) {
        setError("Failed to load contact information");
        console.error("Error fetching contact data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(t("contacts.toast.error"), {
        position: "bottom-center",
        style: {
          backgroundColor: "white",
          color: "black",
          border: "1px solid #e5e7eb",
        },
      });
      return;
    }

    setSubmitting(true);

    try {
      // Prepare data for waitlist API
      const waitlistData: Omit<WaitlistTypes, "id"> = {
        full_name: formData.name,
        email: formData.email,
        phone_number: parseInt(formData.phone.replace(/\D/g, "")) || 0,
        theme: "Appointment Request",
        message: formData.message || "No message provided",
        date: new Date().toISOString(),
      };

      // Post to waitlist API
      await postWaitlist(waitlistData as WaitlistTypes);

      toast.success(t("contacts.toast.success"), {
        position: "bottom-center", // Muvaffaqiyatli xabar ham pastda
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Failed to submit appointment request. Please try again.", {
        position: "bottom-center", // Xatolik xabari ham pastda
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Generate Google Maps URL from coordinates
  const getMapUrl = (latitude = 38.8472625, longitude = 65.784054) => {
    if (latitude !== undefined && longitude !== undefined) {
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${latitude}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru`;
    }

    // Fallback to default map if no coordinates
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.3947386464283!2d37.62196931592435!3d55.76697998055647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Kremlin!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru";
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2D1B69] mb-4">{t("contacts.title")}</h2>
          <p className="text-[#718096]">{t("contacts.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#2D1B69] mb-6">
                {t("contacts.contactInfo")}
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">
                      {loading
                        ? t("contacts.address.title")
                        : location
                        ? t("contacts.address.title")
                        : "Address"}
                    </h4>
                    {loading ? (
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                      </div>
                    ) : location ? (
                      <p className="text-[#718096]">
                        {location.fullAddress ||
                          `${location.street} ${location.house}, ${location.region}`}
                      </p>
                    ) : (
                      <p className="text-[#718096]">
                        {t("contacts.address.line1")}
                        <br />
                        {t("contacts.address.line2")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">
                      {t("contacts.phone.title")}
                    </h4>
                    {loading ? (
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                      </div>
                    ) : phones.length > 0 ? (
                      <p className="text-[#718096]">
                        {phones.slice(0, 2).map((phone, index) => (
                          <span key={phone.id}>
                            <a
                              href={`tel:${phone.number}`}
                              className="hover:text-[#5B4E99] block"
                            >
                              {phone.number}
                            </a>
                            {index < phones.length - 1 && ""}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p className="text-[#718096]">
                        <a
                          href="contacts.phone.number1"
                          className="hover:text-[#5B4E99]"
                        >
                          {t("contacts.phone.number1")}
                        </a>
                        <br />
                        <a
                          href="contacts.phone.number2"
                          className="hover:text-[#5B4E99]"
                        >
                          {t("contacts.phone.number2")}
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">
                      {t("contacts.email.title")}
                    </h4>
                    <p className="text-[#718096]">
                      {emails.map((email, index) => (
                        <a
                          key={email.id}
                          href={`mailto:${email.email}`}
                          className="hover:text-[#5B4E99] block"
                        >
                          {email.email}
                        </a>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#5B4E99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D3748] mb-1">
                      {t("contacts.hours.title")}
                    </h4>
                    {loading ? (
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
                      </div>
                    ) : workTimes.length > 0 ? (
                      <p className="text-[#718096]">
                        {workTimes.map((workTime, index) => (
                          <span key={workTime.id}>
                            {workTime.work_time}
                            {index < workTimes.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p className="text-[#718096]">
                        {t("contacts.hours.weekdays")}
                        <br />
                        {t("contacts.hours.weekends")}
                        <br />
                        {t("contacts.hours.emergency")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

       
          </div>

          {/* Contact Form */}
          <div id="appointment" className="bg-[#F8F9FA] p-8 rounded-2xl">
            <h3 className="text-[#2D1B69] mb-6">
              {t("contacts.appointmentTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">{t("contacts.form.name")}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("contacts.form.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  disabled={submitting}
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="email">{t("contacts.form.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contacts.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  disabled={submitting}
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="phone">{t("contacts.form.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("contacts.form.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  disabled={submitting}
                  className="mt-1 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="message">{t("contacts.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contacts.form.messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  disabled={submitting}
                  className="mt-1 bg-white"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#5B4E99] hover:bg-[#3F2A7D] text-white font-semibold py-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : t("contacts.form.submit")}
              </Button>
            </form>
          </div>
        </div>
             {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden  mt-4">
              {loading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                  <span className="text-gray-400">Loading map...</span>
                </div>
              ) : (
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.3245959616372!2d65.78405402538304!3d38.84726246406108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea7e61551de9f%3A0xb19aeecec3ec703!2sProf%20Med%20Max!5e1!3m2!1sen!2s!4v1761975084960!5m2!1sen!2s" width="100%" height={300} loading="lazy"></iframe>
              )}
            </div>
      </div>
    </section>
  );
}
