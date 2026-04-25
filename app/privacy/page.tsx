import { APP_NAME } from "@/config/constant";
import { Footer } from "@/components/block/footer";

export default function Privacy() {
    return (
        <div className="w-full flex-grow flex flex-col bg-[#020202]">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl py-24 flex-grow">
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed">
                    <p className="mb-8 text-neutral-400">Effective Date: {new Date().toLocaleDateString()}</p>
                    
                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">1. Information We Collect</h2>
                    <p className="mb-4 text-neutral-400">At {APP_NAME}, we value your privacy. We collect personal information you provide to us when registering for a membership, using our facilities, or interacting with our app, as well as data automatically collected when you use our services.</p>
                    
                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">2. How We Use Your Information</h2>
                    <p className="mb-4 text-neutral-400">We use the information collected to provide, maintain, and improve our services, as well as to communicate with you about your membership, process payments, and send promotional offers.</p>

                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">3. Information Sharing</h2>
                    <p className="mb-4 text-neutral-400">We do not share your personal information with third parties without your consent, except as required by law, to protect our rights, or with service providers who assist us in operating our business.</p>
                    
                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">4. Data Security</h2>
                    <p className="mb-4 text-neutral-400">We implement reasonable security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is entirely secure.</p>

                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">5. Contact Us</h2>
                    <p className="mb-4 text-neutral-400">If you have any questions about this Privacy Policy, please contact our support team.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}