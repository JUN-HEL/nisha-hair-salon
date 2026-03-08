import AnimatedSection from "../../../components/common/AnimatedSection";
import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const reels = [
    {
        title: "Trending Boys Cut",
        category: "Boys Salon",
        image:
            "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
        link: "/boys",
    },
    {
        title: "Elegant Makeup Look",
        category: "Girls Parlour",
        image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
        link: "/girls",
    },
    {
        title: "Fresh Styling Finish",
        category: "Boys Salon",
        image:
            "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop",
        link: "/boys",
    },
];

export default function ReelsPreview() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-8 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                            Our Work in Motion
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                            Real transformations make the brand feel alive
                        </h2>
                        <p className="mt-4 text-zinc-600">
                            A small featured reel section on the homepage builds trust quickly
                            without overcrowding the layout.
                        </p>
                    </div>

                    <Link
                        to="/gallery"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-white"
                    >
                        View More
                        <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {reels.map((reel) => (
                        <Link
                            key={reel.title}
                            to={reel.link}
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
                                    Featured
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
                                    Explore Section
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}