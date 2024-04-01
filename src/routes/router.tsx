import App from "@/App";
import TarmsLayout from "@/layout/TarmsLayout";
import CommonMainLayout from "@/layout/commonLayout/CommonMainLayout";
import DeshbordLayout from "@/layout/deshbordLayout/DeshbordLayout";
import AboutPage from "@/pages/aboutUsPage/AboutPage";
import AllSuppliesPage from "@/pages/suppliesPage/AllSuppliesPage";
import LoginPage from "@/pages/authPage/LoginPage";
import Register from "@/pages/authPage/Register";
import Deshbord from "@/pages/dashbordPage/Deshbord";
import DeshbordAddSupply from "@/pages/dashbordPage/DeshbordAddSupply";
import DeshbordSupplies from "@/pages/dashbordPage/DeshbordSupplies";
import DonorAndMemberPage from "@/pages/donorAndLifetimeMemberPage/donorAndMemberPage";
import GalleryPage from "@/pages/galleryPage/GalleryPage";

import Home from "@/pages/homepage/Home";

import VolunteerRegistrationPage from "@/pages/volunteerRegistrationPage/VolunteerRegistrationPage";
import {
    createBrowserRouter,

} from "react-router-dom";
import TarmsAndConditionPage from "@/pages/tarmsAndPrivacyPage/TarmsAndConditionPage";
import PrivacyPage from "@/pages/tarmsAndPrivacyPage/PrivacyPage";
import SupplyPage from "@/pages/suppliesPage/SupplyPage";
import PrivateRoute from "./PrivateRoute";
import DeshbordVolunteerPage from "@/pages/dashbordPage/manageVoluteer/DeshbordVolunteerPage";
import HeartfeltThanksPage from "@/pages/heartfeltThanksPage/HeartfeltThanksPage";
import CreateTestimonial from "@/pages/dashbordPage/donarTestimonialManage/CreateTestimonial";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/terms-layout",
        element: <TarmsLayout></TarmsLayout>,
        children: [
            {
                path: 'terms-and-conditions',
                element: <TarmsAndConditionPage></TarmsAndConditionPage>
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPage></PrivacyPage>
            },
            {
                path: 'supplies/:id',
                element: <SupplyPage></SupplyPage>
            },
            {
                path: 'volunteerRegistration',
                element: <VolunteerRegistrationPage></VolunteerRegistrationPage>
            },
            {
                path: 'community',
                element: <HeartfeltThanksPage></HeartfeltThanksPage>
            },

        ]
    },
    {
        path: "/common",
        element: <CommonMainLayout></CommonMainLayout>,
        children: [
            {
                path: 'about',
                element: <AboutPage></AboutPage>
            },
            {
                path: 'allSupplies',
                element: <AllSuppliesPage></AllSuppliesPage>
            },
            {
                path: 'gallery',
                element: <GalleryPage></GalleryPage>
            },
            {
                path: 'donorAndLifetimeMember',
                element: <DonorAndMemberPage></DonorAndMemberPage>
            },


        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/Dashboard',
        element: <PrivateRoute><DeshbordLayout></DeshbordLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Deshbord></Deshbord>
            },
            {
                path: 'supplies',
                element: <DeshbordSupplies></DeshbordSupplies>
            },
            {
                path: 'create-supply',
                element: <DeshbordAddSupply></DeshbordAddSupply>
            },
            {
                path: 'volunteer',
                element: <DeshbordVolunteerPage></DeshbordVolunteerPage>
            },
            {
                path: 'create-testimonial',
                element: <CreateTestimonial></CreateTestimonial>
            },
        ]
    },
    {
        path: '*',
        element: <div className="flex justify-center m-20"><img src="https://cdn.dribbble.com/userupload/7615675/file/original-e0f0615b2efdeb8c40d3aae36415a804.png?resize=400x300&vertical=center" alt="" /></div>
    },
]);

export default router;