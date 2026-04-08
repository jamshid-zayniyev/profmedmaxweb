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
        const [locationData, phoneData, emailData, workTimeData] = await Promise.all([
          getLocation(),
          getPhone(),
          getEmail(),
          getworkTime(),
        ]);
        if (locationData?.length) setLocation(locationData[0]);
        if (phoneData?.length) setPhones(phoneData);
        if (emailData?.length) setEmails(emailData);
        if (workTimeData?.length) setWorkTimes(workTimeData);
      } catch (err) {
        setError(t("contacts.toast.loadError") || "Failed to load contact info");
        console.error("Error fetching contact data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContactData();
  }, [t]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(t("contacts.toast.error"), {
        position: "bottom-center",
        style: { backgroundColor: "white", color: "black", border: "1px solid #e5e7eb" },
      });
      return;
    }
    setSubmitting(true);
    try {
      const waitlistData: Omit<WaitlistTypes, "id"> = {
        full_name: formData.name,
        email: formData.email,
        phone_number: parseInt(formData.phone.replace(/\D/g, "")) || 0,
        theme: "Appointment Request",
        message: formData.message || "No message provided",
        date: new Date().toISOString(),
      };
      await postWaitlist(waitlistData as WaitlistTypes);
      toast.success(t("contacts.toast.success"), { position: "bottom-center" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(t("contacts.toast.submitError") || "Failed to submit. Try again.", {
        position: "bottom-center",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getMapUrl = (latitude = 38.8472625, longitude = 65.784054) =>
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${latitude}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru`;

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
            <h3 className="text-[#2D1B69] mb-6">{t("contacts.contactInfo")}</h3>

            {/* Address */}
            <ContactItem
              icon={MapPin}
              title={t("contacts.address.title")}
              loading={loading}
              content={location?.fullAddress || `${location?.street} ${location?.house}, ${location?.region}`}
              fallback={[t("contacts.address.line1"), t("contacts.address.line2")]}
            />

            {/* Phone */}
            <ContactItem
              icon={Phone}
              title={t("contacts.phone.title")}
              loading={loading}
              content={phones.map(p => p.number)}
              fallback={[t("contacts.phone.number1"), t("contacts.phone.number2")]}
              isLink
              linkPrefix="tel:"
            />

            {/* Email */}
            <ContactItem
              icon={Mail}
              title={t("contacts.email.title")}
              loading={loading}
              content={emails.map(e => e.email)}
              isLink
              linkPrefix="mailto:"
            />

            {/* Working Hours */}
            <ContactItem
              icon={Clock}
              title={t("contacts.hours.title")}
              loading={loading}
              content={workTimes.map(w => w.work_time)}
              fallback={[
                t("contacts.hours.weekdays"),
                t("contacts.hours.weekends"),
                t("contacts.hours.emergency"),
              ]}
            />
          </div>

          {/* Contact Form */}
          <div id="appointment" className="bg-[#F8F9FA] p-8 rounded-2xl">
            <h3 className="text-[#2D1B69] mb-6">{t("contacts.appointmentTitle")}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField id="name" label={t("contacts.form.name")} value={formData.name} onChange={val => handleInputChange("name", val)} disabled={submitting} placeholder={t("contacts.form.namePlaceholder")} />
              <InputField id="email" label={t("contacts.form.email")} type="email" value={formData.email} onChange={val => handleInputChange("email", val)} disabled={submitting} placeholder={t("contacts.form.emailPlaceholder")} />
              <InputField id="phone" label={t("contacts.form.phone")} type="tel" value={formData.phone} onChange={val => handleInputChange("phone", val)} disabled={submitting} placeholder={t("contacts.form.phonePlaceholder")} />
              <div>
                <Label htmlFor="message">{t("contacts.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contacts.form.messagePlaceholder")}
                  value={formData.message}
                  onChange={e => handleInputChange("message", e.target.value)}
                  rows={4}
                  disabled={submitting}
                  className="mt-1 bg-white"
                />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-[#5B4E99] hover:bg-[#3F2A7D] text-white font-semibold py-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? "Submitting..." : t("contacts.form.submit")}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden mt-4">
          {loading ? (
            <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
              <span className="text-gray-400">Loading map...</span>
            </div>
          ) : (
            <iframe
              src={getMapUrl(location?.latitude, location?.longitude)}
              width="100%"
              height={300}
              loading="lazy"
              title="Location map"
              className="border-0"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}

// Reusable Contact Item component
function ContactItem({ icon: Icon, title, content = [], fallback = [], loading = false, isLink = false, linkPrefix = "" }: {
  icon: any; title: string; content?: string[]; fallback?: string[]; loading?: boolean; isLink?: boolean; linkPrefix?: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-[#5B4E99]/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#5B4E99]" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-semibold text-[#2D3748] mb-1">{title}</h4>
        {loading ? (
          <div className="space-y-1">
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          </div>
        ) : content.length ? (
          <p className="text-[#718096]">
            {content.map((line, idx) => (
              <span key={idx} className="block">
                {isLink ? <a href={`${linkPrefix}${line}`} className="hover:text-[#5B4E99]">{line}</a> : line}
              </span>
            ))}
          </p>
        ) : (
          <p className="text-[#718096]">
            {fallback.map((line, idx) => (
              <span key={idx} className="block">{line}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

// Reusable Input Field
function InputField({ id, label, value, onChange, type = "text", disabled = false, placeholder }: { id: string; label: string; value: string; onChange: (val: string) => void; type?: string; disabled?: boolean; placeholder?: string; }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} disabled={disabled} placeholder={placeholder} className="mt-1 bg-white" required />
    </div>
  );
}