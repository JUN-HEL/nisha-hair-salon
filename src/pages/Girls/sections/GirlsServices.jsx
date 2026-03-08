import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles, Brush, Scissors, Gem } from "lucide-react";

const services = [
    {
        title: "Beauty Care",
        text: "Facial, cleanup, and glow services for fresh, polished skin care.",
        icon: Sparkles,
    },
    {
        title: "Hair Styling",
        text: "Hair styling for daily wear, events, celebrations, and elegant finishing.",
        icon: Scissors,
    },
    {
        title: "Makeup",
        text: "Party and special occasion makeup with a clean, graceful look.",
        icon: Brush,
    },
    {
        title: "Bridal Services",
        text: "Bridal-ready beauty and styling designed for memorable occasions.",
        icon: Gem,
    },
];

export default function GirlsServices() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-8 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                        Services
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Beauty, hair, and makeup services in one place
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Keep this section elegant and easy to scan so visitors quickly know
                        what they can book.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group rounded-[1.75rem] border border-white/60 bg-gradient-to-br from-white via-[#faf5f7] to-[#f7efe8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(124,85,105,0.12)]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c5569] via-[#b58fa2] to-[#d5b48c] text-white">
                                    <Icon size={20} />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-zinc-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-zinc-600">
                                    {service.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
}