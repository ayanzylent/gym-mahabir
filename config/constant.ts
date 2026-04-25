export const APP_NAME = 'Gym Mahabir';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const APP_DESCRIPTION = "Experience the new era of fitness at Gym Mahabir. Our expert coaches bring the focus and discipline you need to perfect your form and maximize your gains.";

export const GYM_CONTACT = {
  telephone: "+918145087543",
  address: {
    streetAddress: "GYM Mahabir, Bus Stop, Aistala",
    addressLocality: "NH 12, Ranaghat",
    addressRegion: "West Bengal",
    postalCode: "741201",
    addressCountry: "IN"
  },
  operatingHours: {
    days: "Mon - Sat",
    time: "7:00 AM - 12:00 PM and 4:00 PM - 10:00 PM"
  },
  mapUrl: "https://maps.google.com/maps?q=GYM%20Mahabir,%20Bus%20Stop,%20Aistala,%20NH%2012,%20Ranaghat,%20West%20Bengal%20741201&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const GYM_SOCIAL = {
  instagram: "https://www.instagram.com/babayde?igsh=ZWw5a3gwdDJrdWow",
  facebook: "https://www.facebook.com/share/1ZmxeDGrrR/?mibextid=wwXIfr"
}

export const WHATSAPP_LINK = `https://wa.me/${GYM_CONTACT.telephone.replace('+', '')}?text=${encodeURIComponent("Hi, I'm interested in joining Gym Mahabir!")}`;
