import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "bn";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", bn: "হোম" },
  "nav.services": { en: "Services", bn: "সার্ভিস" },
  "nav.why_us": { en: "Why Us", bn: "কেন আমরা" },
  "nav.book_now": { en: "Book Now", bn: "বুক করুন" },

  // Hero
  "hero.headline": { en: "Premium PC Cleaning, At Your Doorstep", bn: "আপনার পিসির প্রিমিয়াম ক্লিনিং, আপনার বাসায়" },
  "hero.subhead": { en: "No more hassle of taking your PC to a shop. We come to you.", bn: "আর নয় শপে যাওয়ার ঝামেলা। আমরা আসি আপনার কাছে।" },
  "hero.cta_packages": { en: "View Packages", bn: "প্যাকেজ দেখুন" },
  "hero.cta_whatsapp": { en: "Book on WhatsApp", bn: "হোয়াটসঅ্যাপে বুক করুন" },

  // Services
  "services.title": { en: "Our Packages", bn: "আমাদের প্যাকেজসমূহ" },
  "services.popular": { en: "Popular", bn: "জনপ্রিয়" },
  "services.book_btn": { en: "Book This Package", bn: "এই প্যাকেজটি নিন" },

  "pkg.basic.name": { en: "Basic Clean", bn: "বেসিক ক্লিন" },
  "pkg.basic.desc": { en: "Best for general dust removal", bn: "সাধারণ ধুলোবালি পরিষ্কারের জন্য" },
  "pkg.basic.feat1": { en: "Full Air Blowing", bn: "এয়ার ব্লোয়িং" },
  "pkg.basic.feat2": { en: "RAM Cleaning", bn: "র‍্যাম ক্লিনিং" },
  "pkg.basic.feat3": { en: "Exterior Wipe", bn: "বাইরের অংশ মোছা" },

  "pkg.adv.name": { en: "Advanced Care", bn: "অ্যাডভান্সড কেয়ার" },
  "pkg.adv.desc": { en: "Our recommended standard service", bn: "আমাদের রিকমেন্ডেড সার্ভিস" },
  "pkg.adv.feat1": { en: "Everything in Basic", bn: "বেসিকের সব কিছু" },
  "pkg.adv.feat2": { en: "Processor Thermal Paste", bn: "প্রসেসর থার্মাল পেস্ট" },
  "pkg.adv.feat3": { en: "Deep Dust Removal", bn: "গভীর ধুলো পরিষ্কার" },

  "pkg.ult.name": { en: "Ultimate Detox", bn: "আল্টিমেট ডিটক্স" },
  "pkg.ult.desc": { en: "Complete overhaul for gaming rigs", bn: "গেমিং পিসির সম্পূর্ণ যত্ন" },
  "pkg.ult.feat1": { en: "Everything in Advanced", bn: "অ্যাডভান্সডের সব কিছু" },
  "pkg.ult.feat2": { en: "Full Disassembly", bn: "সম্পূর্ণ খোলা" },
  "pkg.ult.feat3": { en: "GPU Deep Clean", bn: "GPU ডিপ ক্লিন" },
  "pkg.ult.feat4": { en: "Cable Management", bn: "ক্যাবল ম্যানেজমেন্ট" },
  "pkg.ult.feat5": { en: "PSU Cleaning", bn: "পাওয়ার সাপ্লাই ক্লিন" },

  // Why Us
  "why.title": { en: "Why Choose Neat PC?", bn: "কেন Neat PC বেছে নেবেন?" },
  "why.doorstep": { en: "Doorstep Service", bn: "হোম সার্ভিস" },
  "why.doorstep_desc": { en: "We come to your home or office.", bn: "আমরা আপনার বাসা বা অফিসে আসি।" },
  "why.expert": { en: "Expert Technicians", bn: "দক্ষ টেকনিশিয়ান" },
  "why.expert_desc": { en: "Trained professionals handling your gear.", bn: "আপনার পিসি থাকবে নিরাপদ হাতে।" },
  "why.guarantee": { en: "Performance Boost", bn: "পারফরমেন্স গ্যারান্টি" },
  "why.guarantee_desc": { en: "Lower temps, higher FPS.", bn: "কম তাপমাত্রা, বেশি FPS।" },
  "why.loyalty": { en: "Loyalty Discount", bn: "লয়ালটি ডিসকাউন্ট" },
  "why.loyalty_desc": { en: "৳100 off if rebooked within 2 months.", bn: "২ মাসের মধ্যে আবার নিলে ১০০ টাকা ছাড়।" },

  // Booking
  "book.title": { en: "Book a Service", bn: "সার্ভিস বুক করুন" },
  "book.name": { en: "Full Name", bn: "আপনার নাম" },
  "book.phone": { en: "Phone Number", bn: "ফোন নম্বর" },
  "book.address": { en: "Full Address", bn: "ঠিকানা" },
  "book.date": { en: "Preferred Date", bn: "পছন্দের তারিখ" },
  "book.package": { en: "Select Package", bn: "প্যাকেজ নির্বাচন করুন" },
  "book.notes": { en: "Any specific issues? (Optional)", bn: "বিশেষ কোনো সমস্যা? (অপশনাল)" },
  "book.submit": { en: "Confirm Booking", bn: "বুকিং নিশ্চিত করুন" },
  "book.success": { en: "Booking Received!", bn: "বুকিং গ্রহণ করা হয়েছে!" },
  "book.redirect": { en: "Opening WhatsApp...", bn: "হোয়াটসঅ্যাপ ওপেন হচ্ছে..." },
  "book.or_whatsapp": { en: "Or message us directly on WhatsApp", bn: "অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন" },

  // Footer
  "footer.tagline": { en: "Give your PC the care it deserves.", bn: "আপনার পিসিকে দিন তার প্রাপ্য যত্ন।" },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
