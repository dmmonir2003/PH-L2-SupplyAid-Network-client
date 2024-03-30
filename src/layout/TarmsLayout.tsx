
import { useAppSelector } from "@/redux/hooks";
import Navber from "./mainLayOut/Navber";
import CommonNavber from "./commonLayout/CommonNavber";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./mainLayOut/Footer";
import { useGetAllSupplyQuery } from "@/redux/features/supplies/SuppliesApi";

interface Supply {
    _id: string;
    category: string;

}

const TarmsLayout = () => {
    const { darkMode } = useAppSelector((store) => store.theme);
    const location = useLocation();
    const { data: supplies, isLoading } = useGetAllSupplyQuery(undefined);


    const getNavNameForSupply = (pathname: string, supplies: Supply[]) => {
        const supplyId = pathname.split('/').pop();
        const supply = supplies.find(supply => supply._id === supplyId);


        if (supply && supply.category) {
            switch (supply.category) {
                case 'Food Package':
                    return 'Food Package';
                case 'Orphan Fund':
                    return 'Orphan Fund';
                case 'General Fund':
                    return 'General Fund';
                case 'Baby Essentials':
                    return 'Baby Essentials';
                case 'Hygiene Products':
                    return 'Hygiene Products';

                default:
                    return '';
            }
        }
        return '';
    };

    let navName = '';

    if (location.pathname === '/terms-layout/terms-and-conditions') {
        navName = 'Terms & Conditions';
    } else if (location.pathname === '/terms-layout/privacy-policy') {
        navName = 'Privacy Policy';
    } else if (location.pathname.startsWith('/terms-layout/supplies/') && !isLoading && supplies) {
        navName = getNavNameForSupply(location.pathname, supplies);
    } else if (location.pathname === '/terms-layout/volunteerRegistration') {
        navName = 'Volunteer Registration';
    }

    return (
        <div className={`min-h-screen w-full max-w-7xl ${darkMode ? "bg-black text-white" : ""}`}>
            <Navber />
            <CommonNavber navName={navName} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default TarmsLayout;

