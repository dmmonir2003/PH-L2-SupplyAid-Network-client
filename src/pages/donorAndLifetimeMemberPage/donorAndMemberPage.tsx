import { useAppSelector } from "@/redux/hooks";
import { useLocation } from "react-router-dom";
import TopDonarList from "./TopDonarList";


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
                    <h2>this is Donar Testimonial</h2>
                </div>
            )}
            {(location.pathname === '/common/donorAndLifetimeMember' && category === 'Membership Policy') && (
                <div className="">
                    <h2>this is Membership</h2>
                </div>
            )}
        </div>
    );
};

export default DonorAndMemberPage;
