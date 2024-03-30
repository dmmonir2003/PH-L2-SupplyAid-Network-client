
import { useState, useEffect } from 'react';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useUpdateSupplyMutation } from '@/redux/features/supplies/SuppliesApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';

interface Props {
    supply: {
        title: string;
        image: string;
        category: string;
        quantity: string;
        description: string;
    };
    onClose: () => void;
    modelOpen: boolean;
    id: string,
}

interface FormData {
    title: string;
    image: string;
    category: string;
    quantity: string;
    description: string;
}

const EditSupplyModel: React.FC<Props> = ({ supply, onClose, modelOpen, id }) => {
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [updateSupply] = useUpdateSupplyMutation();
    const { darkMode } = useAppSelector((store) => store.theme);
    const navigate = useNavigate();

    useEffect(() => {

        setValue('title', supply.title);
        setValue('image', supply.image);
        setValue('category', supply.category);
        setValue('quantity', supply.quantity);
        setValue('description', supply.description);
        setSelectedCategory(supply.category);
    }, [supply, setValue]);

    const onSubmit = async (data: FormData) => {

        const updatedData = {
            id: id,
            supplyData: data
        }


        try {
            const result = await updateSupply(updatedData).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Supply Updated successfully',
                    text: result.message,

                });
                navigate('/Dashboard/supplies')
            }
            console.log(result);
            onClose();


        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Supply Not  Updated ',
                text: '',
            });

            // Handle error

            console.error("Error creating supply:", error);
            onClose();
        }

    };

    return (
        <div>

            <AlertDialog open={modelOpen} >

                <AlertDialogContent className={`  ${darkMode ? "bg-black " : ""}`}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='text-yellow-600'>Edit Supply</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Label className="text-yellow-600 font-medium my-2">Supply Title</Label>
                                <Input className="text-black font-medium" type="text" {...register('title')} />
                            </div>
                            <div className="mt-2">
                                <Label className="text-yellow-600 font-medium my-2">Supply Image URL</Label>
                                <Input className="font-medium" type="url" {...register('image')} />
                            </div>
                            <div className="mt-2">
                                <Label className="text-yellow-600 font-medium my-2">Supply Category</Label>
                                <Select
                                    value={selectedCategory}
                                    onValueChange={(value: string) => {
                                        setSelectedCategory(value);
                                        setValue('category', value); // Update form value
                                    }}
                                >
                                    <SelectTrigger className="text-black font-medium">
                                        <SelectValue placeholder="Select a Supply Category" />
                                    </SelectTrigger>
                                    <SelectContent className="text-yellow-600 font-medium">
                                        <SelectGroup className="group">
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
                                <Input className="text-black font-medium" type="text" {...register('quantity')} />
                            </div>
                            <div className="mt-2">
                                <Label className="text-yellow-600 font-medium my-2">Supply Description</Label>
                                <Textarea className="text-black font-medium" placeholder="Type Supply Description here." {...register('description')} />
                            </div>
                            <Button type="submit" className="py-2 px-1 bg-yellow-600 hover:bg-yellow-800 w-full my-3">
                                Save
                            </Button>
                        </form>
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogCancel className='py-2 px-4 bg-yellow-600 hover:bg-yellow-800 text-white' onClick={onClose}>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
};

export default EditSupplyModel;
