import AnimatedSection from "../../../components/common/AnimatedSection";
import { Play, ArrowUpRight } from "lucide-react";

const reels = [
    {
        title: "Textured Fade Look",
        category: "Haircut",
        image:
            "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/the_styling_nawed/",
    },
    {
        title: "Clean Beard Styling",
        category: "Beard",
        image:
            "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/the_styling_nawed/",
    },
    {
        title: "Fresh Modern Cut",
        category: "Grooming",
        image:
            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/the_styling_nawed/",
    },
    {
        title: "Sharp Styling Finish",
        category: "Hair Styling",
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/the_styling_nawed/",
    },
];

export default function BoysReels() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-8 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                        Trending Cuts & Grooming Looks
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Real work in motion builds trust fast
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Use this section to showcase haircut, beard, and styling reels from
                        Instagram without turning the page into visual chaos soup.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {reels.map((reel) => (
                        <a
                            key={reel.title}
                            href={reel.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-[0_12px_36px_rgba(40,20,30,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(124,85,105,0.14)]"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={reel.image}
                                    alt={reel.title}
                                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-900/10 to-transparent" />

                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-900 shadow-sm">
                                    <Play size={14} className="fill-current" />
                                    Reel
                                </div>

                                <div className="absolute bottom-4 left-4 rounded-full bg-[#7c5569]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                    {reel.category}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">
                                    {reel.title}
                                </h3>

                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7c5569]">
                                    View on Instagram
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}