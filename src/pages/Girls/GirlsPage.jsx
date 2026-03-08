import GirlsHero from "./sections/GirlsHero";
import GirlsServices from "./sections/GirlsServices";
import BridalHighlight from "./sections/BridalHighlight";
import GirlsReels from "./sections/GirlsReels";
import GirlsGallery from "./sections/GirlsGallery";
import GirlsCTA from "./sections/GirlsCTA";

export default function GirlsPage() {
    return (
        <>
            <GirlsHero />
            <GirlsServices />
            <BridalHighlight />
            <GirlsReels />
            <GirlsGallery />
            <GirlsCTA />
        </>
    );
}