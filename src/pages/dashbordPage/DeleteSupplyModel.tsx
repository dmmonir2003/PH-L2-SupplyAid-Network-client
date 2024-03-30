// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
// import { useDeleteSupplyMutation } from '@/redux/features/supplies/SuppliesApi';

// import React from 'react';
// import Swal from 'sweetalert2';

// const DeleteSupplyModel = ({ idToDelete: string, onClose, onpenDeleteModel }) => {

//     const [deleteSupply, { isLoading }] = useDeleteSupplyMutation();



//     const handleDelete = async (id: string) => {

//         try {

//             const result = await deleteSupply(id);


//             if (result.success
//             ) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Supply created successfully',
//                     text: result.message,

//                 });

//             }
//             onClose(false);

//             // Optionally, you can refetch the supply data after deletion
//         } catch (error) {

//             Swal.fire({
//                 icon: 'error',
//                 title: 'Supply Not  Deleted ',
//                 text: '',
//             });
//             onClose(false);
//             console.error('Error deleting supply:', error);
//             // Handle deletion error
//         }





//     }


//     return (
//         <div>
//             <AlertDialog open={onpenDeleteModel}>

//                 <AlertDialogContent>
//                     <AlertDialogHeader>
//                         <AlertDialogTitle>Are you absolutely sure Delete This Supply?</AlertDialogTitle>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                         <AlertDialogCancel onClick={() => onClose()}>Cancel</AlertDialogCancel>
//                         <AlertDialogAction onClick={() => { handleDelete(`${idToDelete}`) }}>Continue</AlertDialogAction>
//                     </AlertDialogFooter>
//                 </AlertDialogContent>
//             </AlertDialog>
//         </div>
//     );
// };

// export default DeleteSupplyModel;






import React from 'react';
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



const DeleteSupplyModel = ({ idToDelete, onClose, onpenDeleteModel }) => {



    const [deleteSupply] = useDeleteSupplyMutation();
    const { darkMode } = useAppSelector((store) => store.theme);




    const handleDelete = async (id) => {
        try {
            const result = await deleteSupply(id);

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
