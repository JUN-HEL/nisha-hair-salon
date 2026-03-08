import { motion } from "framer-motion";
import { Sparkles, MapPin, Heart, Star } from "lucide-react";

export default function GirlsHero() {
    return (
        <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
            <div className="hero-blob hero-blob-3" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-white/50 bg-white/45 p-6 shadow-[0_20px_60px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-8 lg:grid-cols-2 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[#7c5569] shadow-sm">
                        <Sparkles size={15} />
                        Beauty, Makeup & Hair Styling
                    </div>

                    <p className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-600">
                        <MapPin size={16} className="text-[#d5b48c]" />
                        Gumkhal, Pauri Garhwal
                    </p>

                    <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                        Beauty That Feels <br />
                        <span className="gradient-text">Elegant & Effortless.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                        Discover beauty care, makeup, hair styling, and occasion-ready looks
                        designed to help you feel confident, polished, and special.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] px-6 py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(124,85,105,0.28)] transition duration-300 hover:-translate-y-0.5"
                        >
                            Book Beauty Service
                        </a>

                        <a
                            href="tel:+919999999999"
                            className="rounded-full border border-white/60 bg-white/80 px-6 py-3.5 font-semibold text-zinc-800 shadow-sm transition duration-300 hover:bg-white"
                        >
                            Call Now
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div className="glass-card rounded-2xl px-5 py-4">
                            <p className="text-2xl font-bold text-zinc-900">Glow</p>
                            <p className="text-sm text-zinc-600">Beauty care and makeup finish</p>
                        </div>

                        <div className="glass-card rounded-2xl px-5 py-4">
                            <p className="text-2xl font-bold text-zinc-900">Occasion</p>
                            <p className="text-sm text-zinc-600">Party, bridal and festive looks</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="glass-card overflow-hidden rounded-[2rem] p-3"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
                                alt="Beauty and makeup"
                                className="h-[330px] w-full rounded-[1.5rem] object-cover"
                            />
                        </motion.div>

                        <div className="mt-12 space-y-4">
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="glass-card overflow-hidden rounded-[2rem] p-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                                    alt="Hair styling"
                                    className="h-[220px] w-full rounded-[1.5rem] object-cover"
                                />
                            </motion.div>

                            <div className="glass-card rounded-[2rem] p-5">
                                <div className="flex items-center gap-2 text-[#d5b48c]">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-zinc-900">
                                    Designed for graceful transformations
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-600">
                                    From subtle beauty care to bold occasion styling, this page is
                                    made to build trust and bring in bookings.
                                </p>
                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7c5569]">
                                    <Heart size={16} />
                                    Beauty with confidence
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}