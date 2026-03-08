import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Star, PhoneCall } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
            <div className="hero-blob hero-blob-3" />

            <div className="section-grid mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 rounded-[2rem] border border-white/50 bg-white/40 p-6 backdrop-blur-[6px] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-sm font-medium text-[#7c5569] shadow-sm">
                        <Sparkles size={16} />
                        Premium local salon experience
                    </div>

                    <p className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-600">
                        <MapPin size={16} className="text-[#d5b48c]" />
                        Gumkhal, Pauri Garhwal, Uttarakhand
                    </p>

                    <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                        Style for Him. <br />
                        <span className="gradient-text">Beauty for Her.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                        Nisha Hair Salon & Beauty Parlour brings together modern haircuts,
                        grooming, beauty care, makeup, and elegant styling in one warm,
                        local destination.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] px-6 py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(124,85,105,0.28)] transition duration-300 hover:-translate-y-0.5"
                        >
                            Book on WhatsApp
                        </a>

                        <Link
                            to="/contact"
                            className="rounded-full border border-white/60 bg-white/80 px-6 py-3.5 font-semibold text-zinc-800 shadow-sm transition duration-300 hover:bg-white"
                        >
                            Visit / Contact
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div className="glass-card rounded-2xl px-5 py-4">
                            <p className="text-2xl font-bold text-zinc-900">2-in-1</p>
                            <p className="text-sm text-zinc-600">Boys salon + girls parlour</p>
                        </div>

                        <div className="glass-card rounded-2xl px-5 py-4">
                            <p className="text-2xl font-bold text-zinc-900">Local</p>
                            <p className="text-sm text-zinc-600">Trusted in Gumkhal market</p>
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
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="glass-card overflow-hidden rounded-[2rem] p-3"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop"
                                alt="Men's salon styling"
                                className="h-[320px] w-full rounded-[1.5rem] object-cover"
                            />
                        </motion.div>

                        <div className="mt-12 space-y-4">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="glass-card overflow-hidden rounded-[2rem] p-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                                    alt="Beauty parlour styling"
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
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    Elegant beauty care, trendy cuts, and fast local booking — all
                                    wrapped in one stylish experience.
                                </p>
                                <a
                                    href="tel:+919999999999"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7c5569]"
                                >
                                    <PhoneCall size={16} />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}