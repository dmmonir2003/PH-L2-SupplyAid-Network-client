import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import logo from '../../assets/Untitled_design-removebg-preview-2.png'
import { useAppSelector } from "@/redux/hooks";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";






const Register = () => {
    const { darkMode } = useAppSelector((store) => store.theme);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [registerUser] = useRegisterUserMutation();


    const onSubmit = async (data) => {

        const { password, confirmPassword, ...userData } = data;

        if (password !== confirmPassword) {

            Swal.fire({
                icon: 'error',
                title: 'Not Registration',
                text: 'Password and confirm password do not match.'
            });
            // Display alert or error message
            console.error("Password and confirm password do not match.");
            return;
        }


        try {

            const customUserData = {
                name: userData.name,
                password: password,
                email: userData.email,
            }
            console.log(customUserData);
            const result = await registerUser(customUserData).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: result.message
                });
            }
            // Handle successful registration(redirect user, show success message, etc.)
            navigate('/login')
            console.log("Registration successful:", result);
        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Registration failed',
                text: error.data.message,
            });
            // Handle registration error (show error message, etc.)
            console.error("Registration failed:", error);
        }
    };


    return (
        <div className={`py-10 md:h-[100vh] h-full ${darkMode === false ? 'bg-gray-100 ' : 'bg-black opacity-80'}`}>
            <div className="p-16 ">



                <div className="md:flex justify-center items-start shadow-lg shadow-yellow-600 p-5 rounded-md">
                    <div className="md:w-1/3 mt-5 w-full h-auto mx-auto p-5 shadow-inner rounded-md shadow-yellow-600" style={{ opacity: 0.9, width: 'full', backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vbIBsybWLTfF_t-ykMNtuuKI0OczSLv9kQ&usqp=CAU')", backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <Link to={'/'} className="cursor-pointer">
                            <div className="">
                                <h2 className="font-bold text-yellow-600 opacity-100">Register Please</h2>
                                <p className="text-orange-500">By Register, you can avail full features of our services.</p>

                                <h5 className="text-orange-500 ">Make a Donation</h5>
                            </div>
                            <div className="">
                                <img className="w-3/12 mt-5" src={logo} alt="" />

                                <h2 className='text-xl text-yellow-600 font-extrabold '>SupplyAid Network</h2>
                                <p className='text-orange-500 font-bold'>Bringing Hope, One Meal at a Time.</p>

                            </div>
                        </Link>
                    </div>




                    <div className="md:w-1/2 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Label className="text-yellow-600">Name</Label>
                                <Input required type="text"  {...register("name")} className="block"></Input>
                            </div>

                            <div>
                                <Label className="text-yellow-600">Email</Label>
                                <Input required type="email" className=""  {...register("email")} ></Input>
                            </div>
                            <div>
                                <Label className="text-yellow-600">Password</Label>
                                <Input required type="password" className=""  {...register("password")} ></Input>
                            </div>
                            <div>
                                <Label className="text-yellow-600">Confirm Password</Label>
                                <Input required type="password" className=""  {...register("confirmPassword")} ></Input>
                            </div>
                            <div className="mt-3">
                                <Button type="submit" className="bg-yellow-600 text-white hover:bg-yellow-800">Register</Button>
                            </div>
                            <p className="text-yellow-600 mt-2">If you allready  have an account ? please <Link to={'/login'}> <span className="font-semibold underline hover:text-yellow-800">Login</span> </Link></p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
