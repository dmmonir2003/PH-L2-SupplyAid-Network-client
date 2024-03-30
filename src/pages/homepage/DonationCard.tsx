import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAppSelector } from '@/redux/hooks';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateDonationMutation } from "@/redux/features/donation/donationApi";
import Swal from "sweetalert2";





const DonationCard = () => {
    const [position, setPosition] = useState("")
    const { darkMode } = useAppSelector((store) => store.theme)
    const { handleSubmit, register } = useForm();
    const { user } = useAppSelector((state) => state.auth);
    const [createDonation, { isLoading }] = useCreateDonationMutation();



    const navigate = useNavigate();
    const onSubmit = async (data) => {



        if (!user) {

            Swal.fire({
                icon: 'error',
                title: 'Please log in to make a donation.',


            });

            navigate('/login')
            return;

        }

        try {


            const formData = { ...data, category: position };

            if (formData.category === '') {
                return Swal.fire({
                    icon: 'error',
                    title: 'Please Add donation category in to Paid a donation.',

                });
            }


            const donationData = {
                userId: user.userId,
                amount: formData.amount,
                category: formData.category,
            }


            const result = await createDonation(donationData).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Donation paid  successfully',
                    text: result.message,

                });
                navigate('/Dashboard')
            }
            console.log(result);

        } catch (error) {
            console.error("Error submitting donation:", error);
            Swal.fire({
                icon: 'error',
                title: 'Supply Not  created ',
                text: '',
            });
        }
    };


    const handlePositionChange = (newValue) => {
        setPosition(newValue);
    };



    return (
        <div className="max-w-4xl bg-white border mx-auto rounded-md">

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:flex justify-around space-y-2 md:space-y-0">

                <div>

                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className={` ${darkMode === true ? ' text-black ' : ''}`}>Donation..</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={`w-56 ${darkMode === true ? 'bg-black ' : ''}`}>
                            <DropdownMenuLabel className=
                                'text-yellow-600 font-semibold'>Chose Category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={handlePositionChange} className="text-yellow-600 "  >
                                <DropdownMenuRadioItem value="Hygiene Products" className='focus:bg-yellow-600 ' >Hygiene Products</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="General Fund" className='focus:bg-yellow-600' >General Fund</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Orphan Fund" className='focus:bg-yellow-600' >Orphan Fund</DropdownMenuRadioItem>

                                <DropdownMenuRadioItem value="Baby Essentials" className='focus:bg-yellow-600' >Baby Essentials</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Food Package" className='focus:bg-yellow-600' >Food Package</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>


                <div className="">
                    <Input className={`${darkMode === true ? ' text-black ' : ''}`} type="text" placeholder="Name" defaultValue={user?.name} {...register("name")} required />
                </div>
                <div className="">
                    <Input className={`${darkMode === true ? ' text-black ' : ''}`} type="email" placeholder="Email" defaultValue={user?.email} {...register("email")} required />
                </div>

                <div className="">
                    <Input className={`${darkMode === true ? ' text-black ' : ''}`} type="number" placeholder="Amount" {...register("amount")} required />
                </div>
                <div className="">
                    <Button type="submit" className='bg-yellow-600 text-white hover:bg-yellow-800'>Donate</Button>
                </div>
            </form>





        </div>
    );
};

export default DonationCard;


