import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useGetAllSupplyQuery } from '@/redux/features/supplies/SuppliesApi';
import EditSupplyModel from './EditSupplyModel';
import { useState } from 'react';
import DeleteSupplyModel from './DeleteSupplyModel';


interface Supply {
    _id: string;
    title: string;
    image: string;
    category: string;
    quantity: string;
    description: string;
}

const SupplyTable = () => {

    const { data: supplies, isLoading } = useGetAllSupplyQuery(undefined);
    const [selectedSupply, setSelectedSupply] = useState<Supply>({
        _id: '',
        title: '',
        image: '',
        category: '',
        quantity: '',
        description: ''
    });
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const [id, setId] = useState<string>('');
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState<string>('');

    if (isLoading) {
        return <div>Loading......</div>
    }

    console.log(supplies);



    const handleEdit = (supply: Supply, id: string) => {

        setIsEditOpen(true);
        setModelOpen(true);

        setSelectedSupply(supply);
        setId(id);


    };


    const handleDelete = (id: string) => {
        setIdToDelete(id);
        setDeleteModalOpen(true);
    };




    return (
        <div>
            {
                isEditOpen && <EditSupplyModel
                    supply={selectedSupply}
                    modelOpen={modelOpen}
                    id={id}
                    onClose={() => setIsEditOpen(false)}
                />

            }
            {
                setDeleteModalOpen && <>
                    <DeleteSupplyModel
                        onpenDeleteModel={deleteModalOpen}
                        onClose={() => setDeleteModalOpen(false)}
                        idToDelete={idToDelete}
                    ></DeleteSupplyModel>

                </>
            }

            <div>
                <Table>
                    <TableHeader>
                        <TableRow className='text-yellow-600 '>
                            <TableHead className="w-[100px] text-yellow-600 ">Image</TableHead>
                            <TableHead className='text-yellow-600 '>Supply Name</TableHead>
                            <TableHead className='text-yellow-600 '>Supply Category</TableHead>
                            <TableHead className="text-right text-yellow-600">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>


                        {
                            supplies?.map((supply: Supply, i: number) => <>

                                <TableRow key={i}>
                                    <TableCell className="font-medium"><img src={supply.image} alt="image not found" /></TableCell>
                                    <TableCell className='text-yellow-600 '> {supply.
                                        title} </TableCell>
                                    <TableCell className='text-yellow-600 '>{supply.category}</TableCell>
                                    <TableCell className="text-right">
                                        <Link to={''} >
                                            <Button onClick={() => handleEdit(supply, supply._id)

                                            } className='hover:bg-yellow-800 bg-yellow-600'><FaEdit></FaEdit>Edit</Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell className="">
                                        <Link to={``}>
                                            <Button onClick={() => handleDelete(supply._id)} className='hover:bg-red-800 bg-red-600'>
                                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                Delete</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow >

                            </>)
                        }





                    </TableBody>
                </Table></div>
        </div >
    );
};

export default SupplyTable;