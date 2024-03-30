import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import logo from '../../assets/Untitled_design-removebg-preview-2.png'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { verifyJwtToken } from "@/utils/tokenVarify";
import { setUser } from "@/redux/features/auth/authSlice";


const LoginPage = () => {
    const { darkMode } = useAppSelector((store) => store.theme)

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit } = useForm();
    const [loginUser] = useLoginUserMutation();
    const dispatch = useAppDispatch();


    const onSubmit = async (data) => {

        try {

            // console.log(data);
            const result = await loginUser(data).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: result.message
                });
            }

            const user = verifyJwtToken(result.token)
            const payload = {
                user: user,
                token: result.token
            }
            dispatch(setUser(payload))
            // Handle successful registration(redirect user, show success message, etc.)
            navigate(from, { replace: true });
            console.log("Login successful:", result);
        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: error.data.message,
            });
            // Handle registration error (show error message, etc.)
            console.error("Login failed:", error);
        }
    };



    return (
        <div className={`py-10  md:h-[100vh] h-full ${darkMode === false ? 'bg-gray-100 ' : 'bg-black opacity-80'}`}>
            <div className="p-16 ">



                <div className="md:flex justify-center items-center shadow-lg shadow-yellow-600 p-5 rounded-md">
                    <div className="md:w-1/3 mt-5 w-full h-auto mx-auto p-5 shadow-inner rounded-md shadow-yellow-600" style={{ opacity: 0.9, width: 'full', backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vbIBsybWLTfF_t-ykMNtuuKI0OczSLv9kQ&usqp=CAU')", backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <Link to={'/'} className="cursor-pointer">
                            <div className="">
                                <h2 className="font-bold text-yellow-600 opacity-100">Login Please</h2>
                                <p className="text-orange-500">By Login, you can avail full features of our services.</p>

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
                                <Label className="text-yellow-600">Email</Label>
                                <Input required type="email" className="" {...register("email")}></Input>
                            </div>
                            <div>
                                <Label className="text-yellow-600">Password</Label>
                                <Input required type="text" className="" {...register("password")}></Input>
                            </div>

                            <div className="mt-3">
                                <Button className="bg-yellow-600 text-white hover:bg-yellow-800">Login</Button>
                            </div>
                            <p className="text-yellow-600">Don't have an account ? please <Link to={'/register'}> <span className="font-semibold underline hover:text-yellow-800">Register</span> </Link></p>


                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LoginPage;