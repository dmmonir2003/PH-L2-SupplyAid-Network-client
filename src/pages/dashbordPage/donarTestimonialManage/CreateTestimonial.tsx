import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useGetUserTotalDonationAmountQuery } from "@/redux/features/donation/donationApi";
import { useCreateTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


interface TFormData {
    name: string;
    image: FileList;
    description: string;
}


const imageToken = process.env.IMAGE_UPLOAD_TOKEN;

const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageToken}`

const CreateTestimonial = () => {

    const user = useAppSelector((store) => store.auth.user)

    const userId = user?.userId;
    const { register, handleSubmit, reset } = useForm<TFormData>();
    const [createTestimonial] = useCreateTestimonialMutation();
    const navigate = useNavigate();

    const { data: userDonationTotal, isLoading } = useGetUserTotalDonationAmountQuery(userId);

    useEffect(() => {
        if (!isLoading && userDonationTotal && userDonationTotal.totalUserDonation === 0) {
            Swal.fire({
                icon: 'error',
                title: 'If You post testimonials please give minimum one donation',
            }).then(() => {
                navigate('/');
            });
        }
    }, [isLoading, userDonationTotal, navigate]);



    const onSubmit = async (data: TFormData) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        try {
            const response = await fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Image upload failed');
            }

            const imageRespone = await response.json();

            if (imageRespone.success) {
                const imageUrl = imageRespone.data.display_url;
                const { name, description } = data;
                const gratitudeData = { name, description, image: imageUrl };


                const result = await createTestimonial(gratitudeData).unwrap();

                if (result.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Create Testimonial Successfully',
                        text: result.message,
                    });

                    reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Testimonial Not created',
                        text: result.message,
                    });
                }
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',

            });
        }

    };

    if (isLoading) {
        return <div>Loading ......</div>
    }



    return (
        <div className="md:max-w-4xl w-full mx-auto">
            <div className="border-yellow-600 shadow-lg shadow-yellow-600 w-full   m-10 p-5 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label className="text-yellow-600 font-medium my-2" >Donar Name</Label>
                        <Input className="text-black font-medium" type="text" required {...register("name", { required: true })}></Input>
                    </div>

                    <div className="mt-2">
                        <Label className="text-yellow-600 font-medium my-2 ">Donar Image</Label>
                        <Input className=" font-medium text-black " type="file" required {...register("image", { required: true })} placeholder="Enter Image for Gratitude "></Input>
                    </div>


                    <div className="mt-2">
                        <Label className="text-yellow-600 font-medium my-2">Description</Label>
                        <Textarea className="text-black font-medium" placeholder="Type testimonial Description here." {...register("description", { required: true })} />
                    </div>

                    <Button type="submit" className='py-2  px-1 bg-yellow-600 hover:bg-yellow-800 w-full my-3'>Add Testimonial</Button>

                </form>
            </div>
        </div>
    );
};

export default CreateTestimonial;