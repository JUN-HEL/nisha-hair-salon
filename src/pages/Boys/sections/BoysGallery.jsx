import AnimatedSection from "../../../components/common/AnimatedSection";

const images = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop",
];

export default function BoysGallery() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                        Style Gallery
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Fresh looks, clean lines, confident style
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Use your real salon photos here later. Those will hit much harder than stock images.
                    </p>
                </div>

                <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
                    <div className="overflow-hidden rounded-[1.75rem] md:col-span-2 md:row-span-2">
                        <img
                            src={images[0]}
                            alt="Boys salon gallery 1"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem]">
                        <img
                            src={images[1]}
                            alt="Boys salon gallery 2"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem]">
                        <img
                            src={images[2]}
                            alt="Boys salon gallery 3"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] md:col-span-2">
                        <img
                            src={images[3]}
                            alt="Boys salon gallery 4"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}