import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { GYM_CONTACT } from "@/config/constant";

export function Location() {
  return (
    <section id="contact" className="bg-[#050505] w-full py-16 md:py-24 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#FF2A5F] text-[11px] md:text-xs xl:text-[13px] font-bold tracking-[0.2em] uppercase mb-4">
            Visit Us
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1] lg:leading-none">
            Our Gym
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm lg:text-base font-light max-w-sm md:max-w-xl mx-auto leading-relaxed">
            Drop by our flagship facility for a tour. We're fully equipped and ready to help you push your physical limits.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          {/* Contact Details Panel */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 md:gap-8 bg-[#0a0a0a] border border-white/5 p-6 md:p-10 rounded-3xl shadow-xl justify-center z-10">

            {/* Address */}
            <div className="flex items-start gap-4 group">
              <div className="bg-[#FF2A5F]/10 p-3 rounded-full text-[#FF2A5F] group-hover:bg-[#FF2A5F] group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm md:text-base mb-1">Our Location</span>
                <span className="text-neutral-400 text-xs md:text-sm leading-relaxed font-light">
                  {GYM_CONTACT.address.streetAddress}<br />
                  {GYM_CONTACT.address.addressLocality}<br />
                  {GYM_CONTACT.address.addressRegion} {GYM_CONTACT.address.postalCode}
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 group">
              <div className="bg-[#FF2A5F]/10 p-3 rounded-full text-[#FF2A5F] group-hover:bg-[#FF2A5F] group-hover:text-white transition-colors">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm md:text-base mb-1">Operating Hours</span>
                <span className="text-neutral-400 text-xs md:text-sm leading-relaxed font-light">
                  <span className="text-[#FF2A5F] font-bold">{GYM_CONTACT.operatingHours.days}:</span> {GYM_CONTACT.operatingHours.time}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="bg-[#FF2A5F]/10 p-3 rounded-full text-[#FF2A5F] group-hover:bg-[#FF2A5F] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm md:text-base mb-1">Call Us</span>
                <span className="text-neutral-400 text-xs md:text-sm leading-relaxed font-light hover:text-[#FF2A5F] cursor-pointer transition-colors">
                  {GYM_CONTACT.telephone}
                </span>
              </div>
            </div>
          </div>

          {/* Map Embed Panel */}
          <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 bg-[#111] group">
            {/* A realistic embedded google map (using a stock iframe to a generic gym location for demo purposes) */}
            <iframe
              src={GYM_CONTACT.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[1500ms] opacity-80 group-hover:opacity-100"
            ></iframe>

            {/* Overlay to dim the map natively matching the dark theme unless hovered */}
            <div className="absolute inset-0 pointer-events-none bg-[#050505]/40 group-hover:bg-transparent transition-colors duration-[1000ms]"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
