import BannerSection from "./BannerSection";
import DonationCard from "./DonationCard";

import { useAppSelector } from '@/redux/hooks';
import HeroSection from "./HeroSection";
import SupplyItemSection from "./SupplyItemSection";
import Testimonial from "./Testimonial";
import Gallery from "./GallerySection";

const Home = () => {
    const { darkMode } = useAppSelector((store) => store.theme)
    return (
        <div>

            <div className={`py-10 ${darkMode === false ? 'bg-gray-100 ' : 'bg-black opacity-80'}`}>
                <DonationCard></DonationCard>
                <BannerSection></BannerSection>

            </div>
            <HeroSection></HeroSection>
            <div className={`py-20 ${darkMode === false ? 'bg-gray-100 ' : 'bg-black opacity-80'}`}>
                <SupplyItemSection></SupplyItemSection>
            </div>


            <div>
                <Testimonial></Testimonial>
            </div>
            <div className={`py-10 ${darkMode === false ? 'bg-gray-50 ' : 'bg-black opacity-80'}`}>
                <Gallery></Gallery>
            </div>

        </div>
    );
};

export default Home;