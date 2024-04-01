import { useAppSelector } from "@/redux/hooks";
import { useLocation } from "react-router-dom";
import TopDonarList from "./TopDonarList";
import DonarTestimonial from "./DonarTestimonial";
import Membership from "./Membership";


const DonorAndMemberPage = () => {

    const { category } = useAppSelector((store) => store.category);
    const location = useLocation();





    return (
        <div>
            {(location.pathname === '/common/donorAndLifetimeMember' && category === 'Top Donar data') && (
                <div className=" ">
                    <TopDonarList></TopDonarList>
                </div>
            )}

            {(location.pathname === '/common/donorAndLifetimeMember' && category === 'Donar Testimonial') && (
                <div className="">
                    <DonarTestimonial></DonarTestimonial>
                </div>
            )}
            {(location.pathname === '/common/donorAndLifetimeMember' && category === 'Membership Policy') && (
                <div className="">
                    <Membership></Membership>
                </div>
            )}
        </div>
    );
};

export default DonorAndMemberPage;
