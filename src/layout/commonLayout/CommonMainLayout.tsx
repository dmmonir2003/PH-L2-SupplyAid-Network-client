import { Outlet, useLocation } from "react-router-dom";
import Footer from "../mainLayOut/Footer";
import Navber from "../mainLayOut/Navber";
import CommonNavber from "./CommonNavber";
import CommonSideBar from "./CommonSideBar";
import { useAppSelector } from "@/redux/hooks";

import { aboutCategoris, donarAndLifeTimePageCategoris, supplyCategoris } from "@/assets/categoryData";



const CommonMainLayout = () => {


    const { darkMode } = useAppSelector((store) => store.theme);



    const location = useLocation();







    let categoryName: { category: string }[] = [];
    let name = '';
    let pathName = '';

    if (location.pathname === '/common/allSupplies') {
        categoryName = supplyCategoris;
        name = 'Our Supplies';
        pathName = '/common/allSupplies';

    }
    else if (location.pathname === '/common/about') {
        categoryName = aboutCategoris;// about array
        name = 'About Us'
        pathName = '/common/about';
    }
    else if (location.pathname === '/common/projects') {
        categoryName = [];// projects array 
        name = 'Our Projects'
    }
    else if (location.pathname === '/common/donorAndLifetimeMember') {
        categoryName = donarAndLifeTimePageCategoris;// Donor And Lifetime Member array 
        name = 'Donor And Lifetime Member'
    }
    else if (location.pathname === '/common/gallery') {
        categoryName = [];// gallery array 
        name = 'Gallery'
    }
    else if (location.pathname === '/common/volunteerRegistration') {
        categoryName = [];//Volunteer Registration
        name = 'Volunteer Registration'
    }




    return (
        <div className={` min-h-screen w-full max-w-7xl ${darkMode ? "bg-black text-white" : ""}`}>
            <Navber></Navber>
            <CommonNavber navName={name}></CommonNavber>
            <div className={`  flex ${darkMode ? "bg-black text-white" : "bg-gray-50"}`}>

                <CommonSideBar pathName={pathName} categoryName={categoryName} >
                </CommonSideBar>
                <div className={` m-5  rounded-md w-full ${darkMode ? "bg-black border-2 border-yellow-600" : "bg-white"}`}><Outlet></Outlet></div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default CommonMainLayout;