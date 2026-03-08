import { Link } from "react-router-dom";
import AnimatedSection from "../../../components/common/AnimatedSection";

const images = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryPreview() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
                            Gallery Preview
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                            A dreamy, visual-first showcase of the work
                        </h2>
                        <p className="mt-4 text-zinc-600">
                            This section should feel like a curated board, not a random photo dump from another dimension.
                        </p>
                    </div>

                    <Link
                        to="/gallery"
                        className="inline-flex w-fit items-center rounded-full border border-white/60 bg-white/75 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-white"
                    >
                        View Full Gallery
                    </Link>
                </div>

                <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
                    <div className="overflow-hidden rounded-[1.75rem] md:col-span-2 md:row-span-2">
                        <img
                            src={images[0]}
                            alt="Gallery item 1"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem]">
                        <img
                            src={images[1]}
                            alt="Gallery item 2"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem]">
                        <img
                            src={images[2]}
                            alt="Gallery item 3"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] md:col-span-2">
                        <img
                            src={images[3]}
                            alt="Gallery item 4"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}