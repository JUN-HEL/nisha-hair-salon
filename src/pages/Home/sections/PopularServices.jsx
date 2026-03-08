import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles } from "lucide-react";

const services = [
    "Trend Haircut",
    "Beard Styling",
    "Hair Color",
    "Facial Glow Care",
    "Hair Styling",
    "Party Makeup",
    "Bridal Makeup",
    "Hair Spa",
];

export default function PopularServices() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-8 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-10">
                <div className="max-w-2xl">
                    <p className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">
                        <Sparkles size={15} />
                        Popular Services
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Services people usually come for first
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Easy to scan, visually clean, and perfect for quick booking intent.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={service}
                            className="group rounded-[1.5rem] border border-white/60 bg-gradient-to-br from-white via-rose-50/60 to-amber-50/70 px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(236,72,153,0.12)]"
                        >
                            <p className="text-sm text-zinc-500">0{index + 1}</p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                {service}
                            </h3>
                            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 transition-all duration-300 group-hover:w-24" />
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}