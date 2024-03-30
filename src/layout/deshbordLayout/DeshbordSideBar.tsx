import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiNginxproxymanager } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import { SiGoogletagmanager } from "react-icons/si";


const DeshbordSideBar = () => {

    const { darkMode } = useAppSelector((store) => store.theme);
    const location = useLocation();

    const menus = [
        { name: 'Dashboard', link: '/dashboard', icon: LuLayoutDashboard },
        { name: 'Manage Supplies', link: '/dashboard/supplies', icon: SiGoogletagmanager },

        { name: 'Testimonial', link: '/dashboard/create-testimonial', icon: FiMessageSquare },
        { name: 'Donor And Lifetime Member', link: '/dashboard/donor-and-lifetime-member', icon: FaPeopleGroup, margin: true },
        { name: 'Manage Volunteer', link: '/dashboard/volunteer', icon: SiNginxproxymanager },
        { name: 'Donation Analytics', link: '/dashboard/analytics', icon: DiGoogleAnalytics },

        { name: 'Settings', link: '/dashboard/settings', icon: FiSettings, margin: true },
        { name: 'Back to Home', link: '/', icon: BiLogOutCircle },
    ];


    const [open, setOpen] = useState(true);
    const toggleSidebarWidth = () => {
        setOpen(!open);
    };

    return (
        <div className={`${open ? 'w-72' : 'w-12'} duration-500 text-white min-h-screen px-4 border-r-4 border-yellow-600 sticky top-0 `}>
            <div className="">
                <div className="flex justify-between py-4 items-center ">
                    <div className={`flex items-center ${!open && 'hidden'} grow-0`} >
                        <img className="w-[40px]" src='https://i.postimg.cc/sM2w7MxH/Untitled-design-removebg-preview-2.png' alt="" />

                        <h2 className=' ml-2 text-yellow-600 font-bold'>SupplyAid Network</h2>


                    </div>
                    <div className="w-[26px] " >
                        <HiMenuAlt3 size={26} className="cursor-pointer hover:text-yellow-800 text-yellow-600"

                            onClick={toggleSidebarWidth}

                        />
                    </div>


                </div>



                <div className="mt-4 flex flex-col gap-4 relative ">
                    {menus.map((menu, i) => (
                        <Link
                            key={i}
                            to={menu?.link}
                            className={` ${menu?.margin === true && 'mt-7'} flex gap-3 text-sm items-center font-medium  rounded-md group  `}
                        >
                            <div className="text-yellow-600 hover:text-yellow-800">
                                {React.createElement(menu.icon, { size: 20 })}
                            </div>
                            <h3
                                style={{
                                    transitionDelay: `${i + 3}00ms`,

                                }}
                                className={`whitespace-pre   duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden "} text-yellow-600   ${open && "hover:text-yellow-800 hover:duration-0"} ${location.pathname === menu.link ? 'underline' : ''}`}>{menu.name}</h3>

                            <h3 className={` ${open && 'hidden'} left-40  absolute  bg-opacity-80   whitespace-pre rounded-md  px-0 py-0 w-0 overflow-hidden shadow-lg shadow-yellow-600 group-hover:px-2 group-hover:py-1 group-hover:left-10 group-hover:duration-300 group-hover:w-fit   ${darkMode ? "bg-black text-yellow-600" : "bg-yellow-700 text-white"}`}>
                                {menu.name}
                            </h3>
                        </Link>

                    ))
                    }
                </div >
            </div>
        </div >
    );
};

export default DeshbordSideBar;
