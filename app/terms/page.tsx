import { APP_NAME } from "@/config/constant";
import { Footer } from "@/components/block/footer";

export default function Terms() {
    return (
        <div className="w-full flex-grow flex flex-col bg-[#020202]">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl py-24 flex-grow">
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Terms of Service</h1>
                <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed">
                    <p className="mb-8 text-neutral-400">Welcome to {APP_NAME}. By accessing or using our services and facilities, you agree to be bound by these Terms of Service.</p>
                    
                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">1. Membership</h2>
                    <p className="mb-4 text-neutral-400">Members must comply with all rules and regulations of the facility. Memberships are strictly non-transferable. Initiation fees and monthly dues are subject to our billing and cancellation policies outlined during signup.</p>

                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">2. Facility Usage</h2>
                    <p className="mb-4 text-neutral-400">Use of the facilities and equipment is entirely at your own risk. We strongly recommend consulting with a physician before starting any exercise program. Proper athletic attire and footwear are required at all times.</p>

                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">3. Code of Conduct</h2>
                    <p className="mb-4 text-neutral-400">We expect all members to treat staff and other members with respect. Harassment, aggressive behavior, vandalism, or any disruptive behavior will not be tolerated and may lead to immediate termination of membership without refund.</p>
                    
                    <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4 text-white tracking-wide uppercase">4. Liability Waiver</h2>
                    <p className="mb-4 text-neutral-400">{APP_NAME} and its affiliates, staff, or contractors shall not be liable for any injuries, damages, or lost/stolen property that occur on the premises or during participation in any of our fitness programs.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}