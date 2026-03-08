import { motion } from "framer-motion";
import { Scissors, Sparkles, MapPin } from "lucide-react";

export default function BoysHero() {
    return (
        <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-white/50 bg-white/45 p-6 shadow-[0_20px_60px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-8 lg:grid-cols-2 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[#7c5569] shadow-sm">
                        <Sparkles size={15} />
                        Boys Grooming & Styling
                    </div>

                    <p className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-600">
                        <MapPin size={16} className="text-[#d5b48c]" />
                        Gumkhal, Pauri Garhwal
                    </p>

                    <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                        Sharp Cuts. <br />
                        <span className="gradient-text">Fresh Looks.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                        Trendy haircuts, beard styling, hair color, and clean grooming
                        services designed for modern looks and everyday confidence.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] px-6 py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(124,85,105,0.28)] transition duration-300 hover:-translate-y-0.5"
                        >
                            Book Haircut
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
                            <p className="text-2xl font-bold text-zinc-900">Modern</p>
                            <p className="text-sm text-zinc-600">Fade, texture, and trend cuts</p>
                        </div>

                        <div className="glass-card rounded-2xl px-5 py-4">
                            <p className="text-2xl font-bold text-zinc-900">Clean</p>
                            <p className="text-sm text-zinc-600">Sharp beard and grooming finish</p>
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
                                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
                                alt="Men's haircut"
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
                                    src="https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop"
                                    alt="Beard styling"
                                    className="h-[220px] w-full rounded-[1.5rem] object-cover"
                                />
                            </motion.div>

                            <div className="glass-card rounded-[2rem] p-5">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d5b48c] to-[#b58fa2] text-white">
                                    <Scissors size={18} />
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-zinc-900">
                                    Groomed to stand out
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-600">
                                    From daily clean cuts to bold modern styles, this page is built
                                    to convert haircut traffic into bookings.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}