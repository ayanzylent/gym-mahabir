import { About } from "@/components/block/about"
import { Footer } from "@/components/block/footer"
import { Hero } from "@/components/block/hero"
import { Reviews } from "@/components/block/reviews"
import { Services } from "@/components/block/services"
import { Location } from "@/components/block/location"
import { APP_URL, APP_NAME, GYM_CONTACT } from "@/config/constant"

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": APP_NAME,
    "image": `${APP_URL}/hero-image.png`, // Update this path to your actual logo/image
    "@id": APP_URL,
    "url": APP_URL,
    "telephone": GYM_CONTACT.telephone,
    "address": {
      "@type": "PostalAddress",
      ...GYM_CONTACT.address
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "06:00",
      "closes": "23:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full flex-grow flex flex-col">
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Location />
        <Footer />
      </main>
    </>
  )
}
