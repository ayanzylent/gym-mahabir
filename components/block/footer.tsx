import Link from "next/link";
import Image from "next/image";
import { APP_NAME, GYM_SOCIAL } from "@/config/constant";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#020202] pt-16 md:pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-8 mb-16">

          {/* Brand Info */}
          <div className="flex flex-col gap-6 md:max-w-md lg:max-w-xl">
            <Link href="/demo" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                <Image src={'/logo.svg'} alt="logo" height={100} width={100} className="w-full h-full object-contain grayscale brightness-200" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans uppercase">{APP_NAME}</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed font-light pr-4">
              We provide the ultimate premium fitness experience, combining brutal efficiency with state-of-the-art facilities engineered to transform your body.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Instagram Gradient Definition */}
              <svg width="0" height="0" className="absolute">
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </svg>

              <Link href={GYM_SOCIAL.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaInstagram className="w-5 h-5" style={{ fill: "url(#ig-gradient)" }} />
              </Link>
              <Link href={GYM_SOCIAL.facebook} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 md:min-w-[200px]">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FF2A5F] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3 mt-2">
              <li><Link href="/#programs" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Programs</Link></li>
              <li><Link href="/#reviews" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Reviews</Link></li>
              <li><Link href="/#about" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">About</Link></li>
              <li><Link href="/#contact" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs md:text-sm font-light">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-neutral-500 text-xs md:text-sm hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-neutral-500 text-xs md:text-sm hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
