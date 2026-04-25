import Image from "next/image";
import { APP_NAME } from "@/config/constant";

export function About() {
  return (
    <section id="about" className="w-full bg-[#050505] py-5 lg:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

        {/* Left Content (Text) - Shows first on all screens */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1">
          <p className="text-[#FF2A5F] text-[11px] md:text-xs xl:text-[13px] font-bold tracking-[0.2em] uppercase mb-4 pl-3 md:pl-4 border-l-2 border-[#FF2A5F]">
            About {APP_NAME}
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-6xl xl:text-[85px] font-black text-white mb-4 md:mb-6 leading-[1.1] lg:leading-none tracking-tight">
            We Build <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Great Bodies.</span>
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm lg:text-base xl:text-xl leading-relaxed mb-6 md:mb-8 max-w-sm md:max-w-lg xl:max-w-full font-light">
            Welcome to Mahabir Gym. Step into a space where raw power meets modern fitness. Whether your goal is to build muscle, increase endurance, or transform your lifestyle, we provide the ultimate training ground to unleash your inner strength.          </p>


        </div>

        {/* Right Images (4-Grid) - Shows second on all screens */}
        <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-[650px] flex justify-center items-center order-2">

          {/* Decorative glowing blob behind images */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF2A5F]/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* 4 Image Asymmetric Grid Layout */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 w-full h-full relative z-10 p-2 md:p-6">

            {/* Left Column */}
            <div className="flex flex-col gap-3 md:gap-4 h-full">
              {/* Top Left: Tall Image */}
              <div className="relative w-full h-[55%] sm:h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/about-3.png"
                  alt="Gym Session"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Left: Short Image */}
              <div className="relative w-full h-[45%] sm:h-[40%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/about-2.png"
                  alt="Weights Workout"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 md:gap-4 h-full">
              {/* Top Right: Short Image */}
              <div className="relative w-full h-[45%] sm:h-[40%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/about-1.png"
                  alt="Gym Facilities"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Right: Tall Image */}
              <div className="relative w-full h-[55%] sm:h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/about-4.png"
                  alt="Personal Training"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
