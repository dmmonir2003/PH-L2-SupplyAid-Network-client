import { Outlet } from "react-router-dom";
import DeshbordSideBar from "./DeshbordSideBar";
import { useAppSelector } from "@/redux/hooks";



const DeshbordLayout = () => {
    const { darkMode } = useAppSelector((store) => store.theme);


    return (
        <div className={` min-h-screen w-full max-w-7xl ${darkMode ? "bg-black text-white" : ""}`}>
            <div className="flex ">
                <div className="z-10 "><DeshbordSideBar></DeshbordSideBar></div>
                <div className="" style={{ overflowY: 'hidden', flexGrow: 1 }}>

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DeshbordLayout;