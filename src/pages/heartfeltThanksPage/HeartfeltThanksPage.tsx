/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "@/components/ui/label";
import ThanksCard from "./ThanksCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useCreateGratitudeMutation, useGetAllGratitudeQuery } from "@/redux/features/gratitude/gratitudeApi";
import Swal from "sweetalert2";
import { Key } from "react";


interface TFormData {
    name: string;
    location: string;
    projectName: string;
    image: FileList;
    message: string;
}

const imageToken = process.env.IMAGE_UPLOAD_TOKEN;
const HeartfeltThanksPage = () => {
    const { register, handleSubmit } = useForm<TFormData>();
    const [createGratitude] = useCreateGratitudeMutation();

    const { data: GratitudeData, isLoading } = useGetAllGratitudeQuery(undefined);

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageToken}`

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
                const { name, location, message, projectName } = data;
                const gratitudeData = { name, location, message, projectName, image: imageUrl };

                const result = await createGratitude(gratitudeData).unwrap();

                if (result.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Gratitude Added Successfully',
                        text: result.message,
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gratitude Not Added',
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

    const allGratitudes = GratitudeData?.gratitudeEntries;

    return (
        <div className=" pb-10  ">

            <div>

                <div className="w-full flex px-10 space-y-6  gap-10 py-20">

                    <div className="w-2/3 ">
                        <h2 className="text-xl text-yellow-600 font-bold">Building Bonds of Gratitude: Introducing Our Community Gratitude Wall</h2>

                        <p className="mt-3">In times of adversity, finding solace in the support of our community can be a beacon of hope. As-Sunnah Foundation is proud to introduce our latest initiative: the Community Gratitude Wall. This digital space is dedicated to fostering a culture of appreciation and unity, where individuals can express their heartfelt thanks for the kindness and assistance they've received during challenging moments.</p>

                        <h2 className="text-xl mt-7 text-yellow-600 font-bold">Join Our Community:</h2>
                        <p className="mt-3">Whether you've been the recipient of support or you simply wish to spread positivity, we invite you to be a part of our Community Gratitude Wall. Your words have the power to brighten someone's day and foster a sense of belonging within our community.</p>
                        <h2 className="text-xl mt-7 text-yellow-600 font-bold">Together, Let's Build a World Filled With Gratitude: </h2>
                        <p className="mt-3">At As-Sunnah Foundation, we believe in the transformative power of gratitude. Join us on our journey to create a world where kindness is celebrated, support is abundant, and gratitude knows no bounds. Visit our Community Gratitude Wall today and let your words of appreciation inspire others.</p>
                    </div>

                    <div className="space-y-4 w-1/3">
                        <div className="border-t border-yellow-600" />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-yellow-600">Share Your Gratitude</h2>
                            <p className="text-sm text-orange-500 opacity-80 font-medium">
                                Spread some positivity! Post your message of gratitude.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-yellow-600">Name</Label>
                                        <Input id="name" placeholder="Enter your name" {...register('name')} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="Project Name" className="text-yellow-600">Project Name</Label>
                                        <Input id="projectName" className="text-black" placeholder="Enter Project name" {...register('projectName')} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="image" className="text-yellow-600">Image</Label>
                                        <Input id="image" type="file" className="text-black" placeholder="Enter Image for Gratitude " {...register('image')} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location" className="text-yellow-600">Location</Label>
                                        <Input className="text-black" id="location" placeholder="Enter your location" {...register('location')} required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-yellow-600">Your Message</Label>
                                    <Textarea className="text-black" id="message" placeholder="Type your message here." {...register('message')} required />
                                </div>
                                <Button type="submit" className="w-full my-3 bg-yellow-600 hover:bg-yellow-800">Post Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className='w-full grid grid-cols-4 gap-5 px-10'>
                <ThanksCard image={'https://www.finnpartners.com/wp-content/uploads/2022/12/holiday-24-800x800.jpg'} date={''} name={''} ProjectName={''} gratefulFor={''} address={''} message={'create a world where kindness is celebrated, support is abundant, and gratitude knows no bounds. Visit our Community Gratitude Wall today and let your words of appreciation inspire others.'}></ThanksCard>
                <ThanksCard image={'https://www.finnpartners.com/wp-content/uploads/2022/12/holiday-24-800x800.jpg'} date={''} name={''} ProjectName={''} gratefulFor={''} address={''} message={'create a world where kindness is celebrated, support is abundant, and gratitude knows no bounds. Visit our Community Gratitude Wall today and let your words of appreciation inspire others.'}></ThanksCard>
                <ThanksCard image={'https://www.finnpartners.com/wp-content/uploads/2022/12/holiday-24-800x800.jpg'} date={''} name={''} ProjectName={''} gratefulFor={''} address={''} message={'create a world where kindness is celebrated, support is abundant, and gratitude knows no bounds. Visit our Community Gratitude Wall today and let your words of appreciation inspire others.'}></ThanksCard>
                <ThanksCard image={'https://www.finnpartners.com/wp-content/uploads/2022/12/holiday-24-800x800.jpg'} date={''} name={''} ProjectName={''} gratefulFor={''} address={''} message={'create a world where kindness is celebrated, support is abundant, and gratitude knows no bounds. Visit our Community Gratitude Wall today and let your words of appreciation inspire others.'}></ThanksCard>

                {
                    allGratitudes?.map((gratitude: { _id: Key | null | undefined | string; projectName: string; name: string; message: string; userGratitudeTime: string; location: string; image: string; }) => (
                        <ThanksCard
                            key={gratitude._id}
                            gratefulFor={'grateful For'}
                            ProjectName={gratitude.projectName}
                            name={gratitude.name}
                            message={gratitude.message}
                            date={gratitude.userGratitudeTime}
                            address={gratitude.location}
                            image={gratitude.image}
                        />
                    ))
                }
            </div>

        </div >
    );
};

export default HeartfeltThanksPage;