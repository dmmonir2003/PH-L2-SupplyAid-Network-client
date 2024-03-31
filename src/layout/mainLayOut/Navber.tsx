

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FaBars, FaEnvelope, FaMoon, FaPhoneAlt, FaSun, FaYoutube } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';


import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { themeToggle } from '@/redux/features/themeSlice';
import { logOut } from '@/redux/features/auth/authSlice';



const Navber = () => {
    const [activeNavLink, setActiveNavLink] = useState(''); // Initialize state for active NavLink

    const dispatch = useAppDispatch()
    const { darkMode } = useAppSelector((store) => store.theme)
    const { user } = useAppSelector((store) => store.auth)

    const handleToggleTheme = () => {
        dispatch(themeToggle())
    }


    const handleLogout = () => {
        dispatch(logOut())
    }


    return (
        <nav>
            <div className='md:max-w-4xl flex justify-end 
         pt-8 mx-auto'>
                <div className='flex space-x-2'>
                    <NavLink to={'#'}> <FaSquareFacebook className='text-blue-500' size='20'></FaSquareFacebook> </NavLink>
                    <NavLink to={'#'}> <FaYoutube className='text-red-700' size='20'></FaYoutube> </NavLink>
                    <NavLink to={'#'}>
                        <FaEnvelope className='text-yellow-600' size='18'></FaEnvelope>
                    </NavLink>
                    <NavLink to={'#'}>  <FaPhoneAlt className='text-yellow-600' size='18'></FaPhoneAlt></NavLink>
                    <button
                        onClick={handleToggleTheme}
                        className=""

                    >
                        {darkMode ? <FaSun size='18' className='text-yellow-600'></FaSun> : <FaMoon size='18' className='text-yellow-600'></FaMoon>}
                    </button>






                </div>
            </div>

            <div className='flex justify-between items-center md:max-w-4xl mx-auto mt-0'>
                <div className='flex  items-center'>
                    <div className='flex ml-20 items-center md:hidden'>


                        <div className="" >
                            <Drawer direction="left">
                                <DrawerTrigger><FaBars className='text-yellow-600 mt-2' size={30} /></DrawerTrigger>
                                <DrawerContent className={`w-1/3  mt-0 rounded-none absolute top-0 left-0 min-h-screen  shadow-xl shadow-yellow-200 ${darkMode ? 'bg-black text-white' : ''}`}>
                                    <DrawerHeader className='shadow-yellow-100 shadow-md'>
                                        <DrawerTitle className=''><h2 className='text-xl text-yellow-600 font-extrabold '>SupplyAid Network</h2></DrawerTitle>
                                        <DrawerDescription><p className='text-orange-500 font-bold'>Bringing Hope, One Meal at a Time.</p></DrawerDescription>
                                    </DrawerHeader>



                                    <div className='ml-3 font-semibold mt-10'>



                                        <NavLink to='/' className={activeNavLink === 'home' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('home')}>
                                            <p>Home</p>
                                        </NavLink>
                                        <NavLink to='/common/about' className={activeNavLink === '/common/about' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('/common/about')}>
                                            <p>About Us</p>
                                        </NavLink>
                                        <NavLink to='/common/allSupplies' className={activeNavLink === 'allSupplies' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('allSupplies')}>
                                            <p>All Supplies</p>
                                        </NavLink>

                                        <NavLink to='/common/donorAndLifetimeMember' className={activeNavLink === 'donorAndLifetimeMember' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('donorAndLifetimeMember')}>
                                            <p>Donor And Lifetime Member</p>
                                        </NavLink>

                                        <NavLink to='/common/gallery' className={activeNavLink === '/common/gallery' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('/common/gallery')}>
                                            <p>Gallery</p>
                                        </NavLink>
                                        <NavLink to='/terms-layout/volunteerRegistration' className={activeNavLink === 'volunteerRegistration' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('volunteerRegistration')}>
                                            <p>Volunteer Registration</p>
                                        </NavLink>
                                        <NavLink to='/terms-layout/community' className={activeNavLink === 'heartfeltthanks' ? 'text-yellow-800 underline' : 'text-yellow-600 '} onClick={() => setActiveNavLink('heartfeltthanks')}>
                                            <p>Heartfelt Thanks</p>
                                        </NavLink>

                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>

                    </div>
                    <img className='rounded-full p-3 w-[80px] md:w-[130px]' src='https://i.postimg.cc/sM2w7MxH/Untitled-design-removebg-preview-2.png' alt="" />
                    <div className='hidden md:block'>
                        <h2 className='text-3xl text-yellow-600 font-extrabold'>SupplyAid Network</h2>
                        <p className='text-orange-500 font-extrabold'>Bringing Hope, One Meal at a Time.</p>
                    </div>

                </div>


                {
                    user ? (
                        <div className='space-x-2'>
                            <NavLink to='/dashboard'><Button className='bg-yellow-600 text-white hover:bg-yellow-800'>Dashboard</Button></NavLink>
                            <NavLink to=''><Button className='bg-yellow-600 text-white hover:bg-yellow-800 mt-2' onClick={() => handleLogout()}>Logout</Button></NavLink>
                        </div>
                    ) : (
                        <div className='space-x-2'>
                            <NavLink to='/login'><Button className='bg-yellow-600 text-white hover:bg-yellow-800'>Login</Button></NavLink>
                            <NavLink to='/register'><Button className='bg-yellow-600 text-white hover:bg-yellow-800 mt-2'>Register</Button></NavLink>
                        </div>
                    )
                }









            </div>



            <div className='hidden md:flex'>

                <div className='bg-yellow-800 w-full h-10 flex items-center justify-evenly'>
                    <NavLink to='/' className={activeNavLink === 'home' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('home')}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='/common/about' className={activeNavLink === 'about' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('about')}>
                        <p>About Us</p>
                    </NavLink>
                    <NavLink to='/common/allSupplies' className={activeNavLink === 'allSupplies' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('allSupplies')}>
                        <p>All Supplies</p>
                    </NavLink>

                    <NavLink to='/common/donorAndLifetimeMember' className={activeNavLink === 'donorAndLifetimeMember' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('donorAndLifetimeMember')}>
                        <p>Donor And Lifetime Member</p>
                    </NavLink>

                    <NavLink to='/common/gallery' className={activeNavLink === 'gallery' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('gallery')}>
                        <p>Gallery</p>
                    </NavLink>
                    <NavLink to='/terms-layout/volunteerRegistration' className={activeNavLink === 'volunteerRegistration' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('volunteerRegistration')}>
                        <p>Volunteer Registration</p>
                    </NavLink>

                    <NavLink to='/terms-layout/community' className={activeNavLink === 'heartfeltthanks' ? 'text-orange-500 underline' : 'text-white'} onClick={() => setActiveNavLink('heartfeltthanks')}>
                        <p>Heartfelt Thanks</p>
                    </NavLink>
                </div>


            </div>


        </nav>
    );
};

export default Navber;




