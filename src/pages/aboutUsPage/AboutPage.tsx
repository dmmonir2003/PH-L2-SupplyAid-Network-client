
import { useAppSelector } from "@/redux/hooks";
import { useLocation } from "react-router-dom";
import AboutUsIntrodection from "./AboutUsIntrodection";
import AboutGoals from "./AboutGoals";
import AboutVolunterTable from "./AboutVolunterTable";

const AboutPage = () => {
    const { category } = useAppSelector((store) => store.category);
    const location = useLocation();



    return (
        <div>
            {(location.pathname === '/common/about' && category === 'Introduction') && (
                <div className=" ">
                    <AboutUsIntrodection></AboutUsIntrodection>
                </div>
            )}

            {(location.pathname === '/common/about' && category === 'Goals and Objectives') && (
                <div className="">
                    <AboutGoals></AboutGoals>
                </div>
            )}
            {(location.pathname === '/common/about' && category === 'Our Volunteers') && (
                <div className="">
                    <AboutVolunterTable></AboutVolunterTable>
                </div>
            )}
        </div>
    );
};

export default AboutPage;
