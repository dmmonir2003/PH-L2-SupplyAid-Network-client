/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateSupplyMutation } from "@/redux/features/supplies/SuppliesApi";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


interface FormData {
    title: string;
    image: string;
    quantity: string;
    description: string;
    category: string;
}

interface CreateSupplyResult {
    success: boolean;
    message: string;
}


const DeshbordAddSupply = () => {

    const { register, handleSubmit } = useForm<FormData>();
    const [createSupply] = useCreateSupplyMutation();

    const navigate = useNavigate();


    const [selectedCategory, setSelectedCategory] = useState('');

    const onSubmit = async (data: FormData) => {
        data.category = selectedCategory;

        try {
            const result = await createSupply(data).unwrap() as CreateSupplyResult;

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Supply created successfully',
                    text: result.message,

                });
                navigate('/Dashboard/supplies')
            }
            console.log(result);

        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Supply Not  created ',
                text: '',
            });

            // Handle error

            console.error("Error creating supply:", error);
        }
    };





    return (
        <div className="md:ml-44 ml-4 my-20 w-2/3">

            <div className="border-yellow-600 shadow-lg shadow-yellow-600 w-full   m-10 p-5 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label className="text-yellow-600 font-medium my-2" >Supply Title</Label>
                        <Input className="text-black font-medium" type="text" required {...register("title", { required: true })}></Input>
                    </div>

                    <div className="mt-2">
                        <Label className="text-yellow-600 font-medium my-2 ">Supply Image URL</Label>
                        <Input className="text-black font-medium " type="url" required {...register("image", { required: true })}></Input>
                    </div>
                    <div className="mt-2">
                        <Label className="text-yellow-600 font-medium my-2">Supply Category</Label>
                        <Select onValueChange={(value: string) => { setSelectedCategory(value) }} >
                            <SelectTrigger className="text-black font-medium">
                                <SelectValue placeholder="Select a Supply Category" />
                            </SelectTrigger>
                            <SelectContent className='  text-yellow-600 font-medium  '>
                                <SelectGroup className='group'>
                                    <SelectLabel>Category</SelectLabel>
                                    <SelectItem value="Orphan Fund">Orphan Fund</SelectItem>
                                    <SelectItem value="General Fund">General Fund</SelectItem>
                                    <SelectItem value="Food Package">Food Package</SelectItem>
                                    <SelectItem value="Hygiene Products">Hygiene Products</SelectItem>
                                    <SelectItem value="Baby Essentials">Baby Essentials</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>





                    </div>
                    <div className="mt-2">
                        <Label className="text-yellow-600 font-medium my-2">Supply Quantity</Label>
                        <Input className="text-black font-medium" type="text" required {...register("quantity", { required: true })}></Input>
                    </div>
                    <div className="mt-2">
                        <Label className="text-yellow-600 font-medium my-2">Supply Description</Label>
                        <Textarea className="text-black font-medium" placeholder="Type Supply Description here." {...register("description", { required: true })} />
                    </div>

                    <Button type="submit" className='py-2  px-1 bg-yellow-600 hover:bg-yellow-800 w-full my-3'>Add Supply</Button>


                </form>
            </div>

        </div>
    );
};

export default DeshbordAddSupply;







