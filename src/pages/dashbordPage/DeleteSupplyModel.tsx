/* eslint-disable @typescript-eslint/no-explicit-any */

import Swal from 'sweetalert2';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { useDeleteSupplyMutation } from '@/redux/features/supplies/SuppliesApi';
import { useAppSelector } from '@/redux/hooks';

interface DeleteSupplyModelProps {
    idToDelete: string;
    onClose: () => void;
    onpenDeleteModel: boolean;
}

const DeleteSupplyModel = ({ idToDelete, onClose, onpenDeleteModel }: DeleteSupplyModelProps) => {



    const [deleteSupply] = useDeleteSupplyMutation();
    const { darkMode } = useAppSelector((store: { theme: any; }) => store.theme);




    const handleDelete = async (id: string) => {
        try {
            await deleteSupply(id);

            onClose();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Supply Not Deleted',
                text: '',
            });
            onClose();
            console.error('Error deleting supply:', error);
        }
    };

    return (
        <div>
            <AlertDialog open={onpenDeleteModel} >
                <AlertDialogContent className={`  ${darkMode ? "bg-black " : ""}`}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='text-yellow-600'>Are you absolutely sure you want to delete this supply?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className='hover:bg-yellow-800 bg-yellow-600 text-white' onClick={onClose}>Cancel</AlertDialogCancel>
                        <AlertDialogAction className='hover:bg-yellow-800 bg-yellow-600 text-white' onClick={() => handleDelete(idToDelete)}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DeleteSupplyModel;
