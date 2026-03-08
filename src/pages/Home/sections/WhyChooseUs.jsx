import AnimatedSection from "../../../components/common/AnimatedSection";
import { ShieldCheck, Sparkles, HeartHandshake, Clock3 } from "lucide-react";

const points = [
    {
        title: "Trusted Local Spot",
        text: "A warm and familiar salon experience right in Gumkhal market.",
        icon: ShieldCheck,
    },
    {
        title: "Separate Service Comfort",
        text: "Clear service experience for boys grooming and girls beauty care.",
        icon: Sparkles,
    },
    {
        title: "Friendly Service",
        text: "Approachable local service that feels personal, not robotic template nonsense.",
        icon: HeartHandshake,
    },
    {
        title: "Fast Booking",
        text: "WhatsApp, call, and directions are always easy to access.",
        icon: Clock3,
    },
];

export default function WhyChooseUs() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-rose-950 p-8 text-white shadow-[0_24px_60px_rgba(20,15,25,0.18)] sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                        Why Choose Us
                    </p>
                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Local trust with a polished, aesthetic touch
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-7 text-zinc-300 sm:text-base">
                        The website should feel beautiful, but still guide people straight
                        toward booking, visiting, and trusting the brand quickly.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {points.map((point) => {
                        const Icon = point.icon;

                        return (
                            <div
                                key={point.title}
                                className="glass-card rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 text-rose-600">
                                    <Icon size={20} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-zinc-900">
                                    {point.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-zinc-600">
                                    {point.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
}