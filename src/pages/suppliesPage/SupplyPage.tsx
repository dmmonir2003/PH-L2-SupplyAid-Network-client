/* eslint-disable @typescript-eslint/no-explicit-any */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetSupplyQuery } from "@/redux/features/supplies/SuppliesApi";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useCreateDonationMutation } from "@/redux/features/donation/donationApi";
import Swal from "sweetalert2";

const SupplyPage = () => {
    const { darkMode } = useAppSelector((store) => store.theme);
    const { id } = useParams();
    const { data: data, isLoading: supplingLoader } = useGetSupplyQuery(id);
    const [activeTab, setActiveTab] = useState('donate once');
    const [position, setPosition] = useState(data?.supply?.category || '')

    const { handleSubmit, register } = useForm();
    const { user } = useAppSelector((state) => state.auth);
    const [createDonation] = useCreateDonationMutation();



    const navigate = useNavigate();



    const onSubmit = async (data: any) => {



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


    const handlePositionChange = (newValue: string) => {
        setPosition(newValue);
    };


    const handleTabClick = (value: string) => {
        setActiveTab(value);
    };

    if (supplingLoader) {
        return <div>Loading.....</div>;
    }

    const supply = data?.supply;


    return (
        <div className={`py-5 ${darkMode === false ? 'bg-gray-50' : 'bg-black opacity-80'} `}>
            <div className="md:flex gap-5 mx-10">
                <div className="md:w-4/6 w-full mb-5 md:mb-0">
                    <img className="rounded-md w-full h-[70vh]" src={supply?.image} alt="" />
                    <div className="mt-7 p-5 border border-yellow-600 rounded-md shadow shadow-yellow-600">
                        <h2 className="text-xl mb-5 text-yellow-600 font-semibold">Title : {supply?.title}</h2>
                        <h2 className="text-xl mb-5 text-yellow-600 font-semibold">Quantity : {supply?.quantity}</h2>
                        <h2 className="text-xl text-yellow-600 font-semibold mb-3">Summary </h2>
                        <article className="text-sm">{supply?.description}</article>
                    </div>
                </div>
                <div className=" md:w-2/6 w-full md:h-[100vh]">
                    <div className="text-yellow-600">
                        <Tabs defaultValue="donate once" className="">
                            <TabsList className={`w-full rounded-none px-0 pb-0  ${darkMode === true ? 'bg-black ' : ''}`}>
                                <TabsTrigger
                                    className={`text-white rounded-none w-1/2 `}
                                    style={{ backgroundColor: activeTab === 'donate once' ? 'rgb(133 77 14)' : 'rgb(202 138 4)', color: 'white' }}
                                    value="donate once"
                                    onClick={() => handleTabClick('donate once')}
                                >
                                    Donate once
                                </TabsTrigger>
                                <TabsTrigger
                                    className={`text-white rounded-none w-1/2`}
                                    style={{ backgroundColor: activeTab === 'donate monthly' ? 'rgb(133 77 14)' : 'rgb(202 138 4)', color: 'white' }}
                                    value="donate monthly"
                                    onClick={() => handleTabClick('donate monthly')}
                                >
                                    Donate Monthly
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="donate once" className="text-yellow-600 ">
                                <div className="mt-4">


                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div
                                        ><DropdownMenu >
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline" className={`w-full ${darkMode === true ? ' text-black ' : ''}`}>Donation Category</Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className={` ${darkMode === true ? 'bg-black ' : ''}`}>
                                                    <DropdownMenuLabel className=
                                                        'text-yellow-600 font-semibold '>Chose Category</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuRadioGroup value={position} onValueChange={handlePositionChange} className="text-yellow-600 min-w-full">
                                                        <DropdownMenuRadioItem value="Hygiene Products" className='focus:bg-yellow-600 '>Hygiene Products</DropdownMenuRadioItem>
                                                        <DropdownMenuRadioItem value="General Fund" className='focus:bg-yellow-600'>General Fund</DropdownMenuRadioItem>
                                                        <DropdownMenuRadioItem value="Orphan Fund" className='focus:bg-yellow-600'>Orphan Fund</DropdownMenuRadioItem>

                                                        <DropdownMenuRadioItem value="Baby Essentials" className='focus:bg-yellow-600'>Baby Essentials</DropdownMenuRadioItem>
                                                        <DropdownMenuRadioItem value="Food Package" className='focus:bg-yellow-600'>Food Package</DropdownMenuRadioItem>
                                                    </DropdownMenuRadioGroup>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                            <p className="text-sm mt-4">Already have an account? <Link className="hover:text-yellow-800 font-bold underline" to={'/login'}>Log in.</Link></p>

                                            <Label className="">Name</Label>

                                            <Input type="text" placeholder="Name" defaultValue={user?.name} {...register("name")} required></Input>
                                            <Label className="">Email</Label>
                                            <Input type="text" placeholder="Email" defaultValue={user?.email} {...register("email")} required></Input>
                                            <Label className="" >Amount</Label>
                                            <Input type="number" placeholder="Amount" required {...register("amount")}></Input>
                                            <Button type="submit" className='bg-yellow-600 text-white hover:bg-yellow-800 my-4 w-full'>Donate</Button>


                                        </div>
                                    </form>
                                </div>
                            </TabsContent>
                            <TabsContent value="donate monthly">   <div className="mt-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div
                                    ><DropdownMenu >
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className={`w-full ${darkMode === true ? ' text-black ' : ''}`}>Donation Category</Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className={` ${darkMode === true ? 'bg-black ' : ''}`}>
                                                <DropdownMenuLabel className=
                                                    'text-yellow-600 font-semibold '>Chose Category</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuRadioGroup value={position} onValueChange={handlePositionChange} className="text-yellow-600 min-w-full">
                                                    <DropdownMenuRadioItem value="Hygiene Products" className='focus:bg-yellow-600 '>Hygiene Products</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="General Fund" className='focus:bg-yellow-600'>General Fund</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="Orphan Fund" className='focus:bg-yellow-600'>Orphan Fund</DropdownMenuRadioItem>

                                                    <DropdownMenuRadioItem value="Baby Essentials" className='focus:bg-yellow-600'>Baby Essentials</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="Food Package" className='focus:bg-yellow-600'>Food Package</DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <p className="text-sm mt-4">Already have an account? <Link className="hover:text-yellow-800 font-bold underline" to={'/login'}>Log in.</Link></p>

                                        <Label className="">Name</Label>

                                        <Input type="text" placeholder="Name" defaultValue={user?.name} {...register("name")} required></Input>
                                        <Label className="">Email</Label>
                                        <Input type="text" placeholder="Email" defaultValue={user?.email} {...register("email")} required></Input>
                                        <Label className="">Amount</Label>
                                        <Input type="number" placeholder="Monthly Amount" {...register("amount")} required ></Input>
                                        <Button type="submit" className='bg-yellow-600 text-white hover:bg-yellow-800 my-4 w-full'>Donate</Button>


                                    </div>
                                </form>
                            </div></TabsContent>
                        </Tabs>


                        <div>

                            <h2 className="text-yellow-600 text-center font-medium mt-4">OTHER WAYS TO GIVE</h2>

                            <div className="grid grid-cols-3 h-40 gap-4 mt-7 text-xs">

                                <div className="shadow-xl h-32 shadow-yellow-600 p-2">
                                    <h2 className="my-2">Credit Card</h2>
                                    <img className="md:h-20 h-16 " src="https://banner2.cleanpng.com/20180203/ogq/kisspng-credit-card-cashback-reward-program-discover-card-major-credit-card-logo-png-pic-5a756da1ae0d20.2401945915176452177129.jpg" alt="" />
                                </div>


                                <div className="shadow-xl h-32 shadow-yellow-600 p-2">
                                    <h2 className="my-2">Internet Banking</h2>
                                    <img className="md:h-20 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrhlgboqrgj1aSL3vEjSI5b-Z4QcgyP2yFw&usqp=CAU" alt="" />


                                </div>
                                <div className="shadow-xl h-32 shadow-yellow-600 p-2">
                                    <h2 className="my-2">Mobile Banking</h2>
                                    <img className="md:h-20 h-16 " src="https://i.ibb.co/ZBY03zb/bank-logo-list.jpg" alt="" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyPage;
