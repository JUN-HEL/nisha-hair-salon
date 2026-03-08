import Hero from "./sections/Hero";
import AudienceSplit from "./sections/AudienceSplit";
import PopularServices from "./sections/PopularServices";
import ReelsPreview from "./sections/ReelsPreview";
import WhyChooseUs from "./sections/WhyChooseUs";
import GalleryPreview from "./sections/GalleryPreview";
import Testimonials from "./sections/Testimonials";
import LocationPreview from "./sections/LocationPreview";
import FinalCTA from "./sections/FinalCTA";

export default function HomePage() {
    return (
        <>
            <Hero />
            <AudienceSplit />
            <PopularServices />
            <ReelsPreview />
            <WhyChooseUs />
            <GalleryPreview />
            <Testimonials />
            <LocationPreview />
            <FinalCTA />
        </>
    );
}