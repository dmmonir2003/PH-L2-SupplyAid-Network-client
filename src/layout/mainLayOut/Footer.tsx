import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/redux/hooks';
import { Link, NavLink } from 'react-router-dom';

import { FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';
import { FaPhoneAlt, FaYoutube } from 'react-icons/fa';




const Footer = () => {
    const { darkMode } = useAppSelector((store) => store.theme)

    return (
        <div>
            <Separator className='h-1 bg-yellow-600'></Separator>
            <div className={`pt-5 ${darkMode === false ? 'bg-gray-200 ' : 'bg-black opacity-80'} `}>

                <div className='md:flex justify-center md:justify-evenly items-start md:h-[50vh] h-full '>
                    <div className=' pl-16 md:w-1/3 w-full p-10'>

                        <img className='rounded-full  w-[50px] ' src='https://i.postimg.cc/sM2w7MxH/Untitled-design-removebg-preview-2.png' alt="" />
                        <div className=''>
                            <h2 className='text-xl text-yellow-600 font-extrabold'>SupplyAid Network</h2>
                            <p className='text-orange-500 font-extrabold'>Bringing Hope, One Meal at a Time.</p>

                            <div className='flex space-x-2 mt-3'>
                                <NavLink to={'#'}> <FaSquareFacebook className='text-blue-500' size='20'></FaSquareFacebook> </NavLink>
                                <NavLink to={'#'}> <FaYoutube className='text-red-700' size='20'></FaYoutube> </NavLink>
                                <NavLink to={'#'}>
                                    <FaEnvelope className='text-yellow-600' size='18'></FaEnvelope>
                                </NavLink>
                                <NavLink to={'#'}>  <FaPhoneAlt className='text-yellow-600' size='18'></FaPhoneAlt></NavLink>

                            </div>
                        </div>

                    </div>
                    <div className='pl-16 md:w-1/3 w-full '>



                        <div className='ml-3 font-semibold mt-10 '>
                            <h2 className='text-yellow-600 text-xl font-semibold mb-5'>Menu</h2>

                            <NavLink to='/' >
                                <p className='text-yellow-600 hover:text-yellow-800'>Home</p>
                            </NavLink>
                            <NavLink to='/common/about' >
                                <p className='text-yellow-600 hover:text-yellow-800'>About Us</p>
                            </NavLink>
                            <NavLink to='/common/allSupplies'>
                                <p className='text-yellow-600 hover:text-yellow-800'>All Supplies</p>
                            </NavLink>

                            <NavLink to='/common/donorAndLifetimeMember' >
                                <p className='text-yellow-600 hover:text-yellow-800'>Donor And Lifetime Member</p>
                            </NavLink>

                            <NavLink to='/common/gallery' >
                                <p className='text-yellow-600 hover:text-yellow-800'>Gallery</p>
                            </NavLink>
                            <NavLink to='/terms-layout/volunteerRegistration' >
                                <p className='text-yellow-600 hover:text-yellow-800'>Volunteer Registration</p>
                            </NavLink>
                            <NavLink to='/terms-layout/community' >
                                <p className='text-yellow-600 hover:text-yellow-800'>Heartfelt Thanks</p>
                            </NavLink>

                        </div>

                    </div>
                    <div className='pl-16 md:w-1/3 w-full '>

                        <div className='ml-3 font-semibold mt-10 '>
                            <h2 className='text-yellow-600 text-xl font-semibold mb-3'>Contact Details</h2>

                            <h3 className='text-yellow-600 text-xl font-medium'>Address</h3>

                            <p className='w-4/6 text-yellow-600 text-opacity-80 mt-2'>SupplyAid Network
                                Road-10, Block-b, (Opposite Alamin Convention Center)
                                Mirpur, Dhaka-1216</p>
                            <h3 className='text-yellow-600 text-xl font-medium mt-3'>Phone</h3>

                            <p className='w-4/6 text-yellow-600 text-opacity-80 mt-2'>+88 00000000</p>

                        </div>



                    </div>

                </div>







                <div className='border-t border-yellow-600 py-2 text-center'>
                    <h2>Copyright © 2024 <Link to={'/'} className='text-yellow-600 font-medium hover:text-yellow-800 '>SupplyAid Network Foundation</Link> - all rights reserved. Technical support by <Link className='text-yellow-600 font-medium hover:text-yellow-800' to={'https://www.linkedin.com/in/dmmonir2003/'}>Md Moniruzzaman.</Link> </h2>
                    <div className='flex items-center justify-center space-x-2'>
                        <p className='text-yellow-600 font-medium hover:text-yellow-800'> <Link to={'/terms-layout/terms-and-conditions'} className=''>Terms and conditions</Link></p>

                        <Separator orientation="vertical" className='h-5 w-0.5 bg-yellow-600 '></Separator>

                        <p className='text-yellow-600 font-medium hover:text-yellow-800 '> <Link to={'/terms-layout/privacy-policy'} className=''>Privacy Policy</Link></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;



