import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllVolunteerQuery, useVolunteerApprovedMutation, useVolunteerDeleteMutation } from "@/redux/features/voluteer/volunteerApi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


interface TVolunteerData {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    facebookId?: string;
    volunteerFor: string;
    _id: string;
    isApproved?: boolean;

}


const DeshbordVolunteerPage = () => {

    const { data: volunteersData, isLoading } = useGetAllVolunteerQuery(undefined);
    console.log(volunteersData);

    const [approvedVolunteer] = useVolunteerApprovedMutation();

    const [deleteVolunteer] = useVolunteerDeleteMutation();

    if (isLoading) {
        return <div>Loading.....</div>
    }

    const volunteers = volunteersData?.volunteerApplications;

    const handleApproved = async (id: string) => {


        try {

            const result = await approvedVolunteer(id).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Volunteer add successfully',
                    text: result.message,

                });

            }
            console.log(result);

        } catch (error) {
            console.error("Error Volunteer Not add successfully:", error);
            Swal.fire({
                icon: 'error',
                title: 'Volunteer Not add ',

            });

        }

    }


    const handleDelete = async (id: string) => {

        try {

            const result = await deleteVolunteer(id).unwrap();

            if (result.success
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Volunteer application deleted successfully',
                    text: result.message,

                });

            }


        } catch (error) {
            console.error("Error Volunteer application Not deleted :", error);
            Swal.fire({
                icon: 'error',
                title: 'Volunteer application Not deleted',

            });

        }
    }


    return (
        <div className='md:ml-44 ml-4 overflow-y-hidden my-10'>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow className='text-yellow-600 '>
                            <TableHead className="w-[100px] text-yellow-600 ">Name</TableHead>
                            <TableHead className='text-yellow-600 '>Email</TableHead>
                            <TableHead className='text-yellow-600 '>Is Approved</TableHead>
                            <TableHead className="text-right text-yellow-600">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>



                        {volunteers?.map((volunteer: TVolunteerData) => (
                            <TableRow key={volunteer._id}>
                                <TableCell className="font-medium">{volunteer?.name}</TableCell>
                                <TableCell className='text-yellow-600'>{volunteer?.email}</TableCell>
                                <TableCell className='text-yellow-600'>{volunteer?.isApproved ? "Yes" : "No"}</TableCell>
                                <TableCell className="text-right">
                                    <Link to={``} >
                                        <Button onClick={() => handleApproved(volunteer?._id)} className='hover:bg-yellow-800 bg-yellow-600'><FaEdit></FaEdit>Approve</Button>
                                    </Link>
                                </TableCell>
                                <TableCell className="">
                                    <Link to={``}>
                                        <Button onClick={() => handleDelete(volunteer?._id)} className='hover:bg-red-800 bg-red-600'>
                                            <RiDeleteBin6Fill></RiDeleteBin6Fill>Delete</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}



                    </TableBody>
                </Table></div>
        </div>
    );
};

export default DeshbordVolunteerPage;