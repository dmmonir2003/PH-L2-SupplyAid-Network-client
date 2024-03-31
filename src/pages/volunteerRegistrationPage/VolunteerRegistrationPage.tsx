import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateVolunteerAplicationMutation } from "@/redux/features/voluteer/volunteerApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import Swal from "sweetalert2";

const VolunteerRegistrationPage = () => {


    const { darkMode } = useAppSelector((store) => store.theme)
    const [createVoluteerAplication] = useCreateVolunteerAplicationMutation()

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {

            const result = await createVoluteerAplication(data).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Application submit successfully for Admin',
                    text: result.message,

                });

            }
            console.log(result);

        } catch (error) {
            console.error("Error submitting Application:", error);
            Swal.fire({
                icon: 'error',
                title: 'Application Not Submited',
                text: error?.data
                    ?.message,
            });
        }

    };





    return (
        <div className="p-10">
            <div className="border-2 border-yellow-600 shadow-lg shadow-yellow-600  rounded-md">

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="w-full">
                            <div className="flex">
                                <FaAsterisk className="text-yellow-600 mr-1" size={6}></FaAsterisk>
                                <Label className="text-yellow-600 "> Name</Label>
                            </div>
                            <Input type="text" className={`w-full mt-2 font-medium  ${darkMode ? 'text-yellow-600' : ''}`} required placeholder="Md Moniruzzaman" {...register('name')}></Input>
                        </div>
                        <div className="w-full">
                            <div className="flex">
                                <FaAsterisk className="text-yellow-600 mr-1" size={6}></FaAsterisk>
                                <Label className="text-yellow-600 "> Email</Label>
                            </div>
                            <Input type="email" className={`w-full mt-2 font-medium  ${darkMode ? 'text-yellow-600' : ''}`} required placeholder="example@gmail.com" {...register('email')}></Input>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <div className="w-full">
                            <div className="flex">
                                <FaAsterisk className="text-yellow-600 mr-1" size={6}></FaAsterisk>
                                <Label className="text-yellow-600 "> Phone Number</Label>
                            </div>
                            <Input type="text" className={`w-full mt-2 font-medium  ${darkMode ? 'text-yellow-600' : ''}`} required placeholder="01xxxxxxxxx" {...register('phoneNumber')}></Input>
                        </div>
                        <div className="w-full">
                            <div className="flex">
                                <FaAsterisk className="text-yellow-600 mr-1" size={6}></FaAsterisk>
                                <Label className="text-yellow-600 "> Address</Label>
                            </div>
                            <Textarea className={`w-full mt-2 font-medium  ${darkMode ? 'text-yellow-600' : ''}`} required placeholder="Mirpur,Dhaka" {...register('address')}></Textarea>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="w-full">
                            <Label className="text-yellow-600 ">Facebook Id Link</Label>
                            <Input type="text" className={`w-full mt-2 font-medium  ${darkMode ? 'text-yellow-600' : ''}`} placeholder="www.facebook.com/XXXX" {...register('facebookId')}></Input>
                        </div>
                        <div className="w-full mt-5">
                            <div className="flex">
                                <FaAsterisk className="text-yellow-600 mr-1" size={6}></FaAsterisk>
                                <Label className="text-yellow-600 ">Volunteer For</Label>
                            </div>

                            <Textarea className={`w-full mt-2 font-medium  ${darkMode ? 'text-yellow-600' : ''}`} required placeholder="Teaching , Cooking ,Rescuing" {...register('volunteerFor')}></Textarea>
                        </div>

                    </div>
                    <Button type="submit" className="w-full my-5 bg-yellow-600 hover:bg-yellow-800 text-white font-medium"> Send My Application</Button>


                </form>



            </div>
        </div>
    );
};

export default VolunteerRegistrationPage;
