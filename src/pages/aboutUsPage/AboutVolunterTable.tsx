import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllApprovedVolunteerQuery } from "@/redux/features/voluteer/volunteerApi";

interface TVolunteerData {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    facebookId?: string;
    volunteerFor: string;
    _id: string;
}





const AboutVolunteerTable = () => {
    const { data: volunteersData, isLoading } = useGetAllApprovedVolunteerQuery(undefined);

    if (isLoading) {
        return <div>Loading .....</div>;
    }

    const volunteers = volunteersData?.approvedVolunteerApplications;

    return (
        <div className="overflow-x-auto my-10">
            <div className="w-full overflow-hidden">
                <h2 className="text-center text-yellow-600 font-bold text-xl py-2">Our Approved Volunteers</h2>
                <Table className="w-full whitespace-nowrap">
                    <TableHeader>
                        <TableRow className="text-yellow-600">
                            <TableHead className="w-[100px] text-yellow-600">Name</TableHead>
                            <TableHead className="text-yellow-600">Email</TableHead>
                            <TableHead className="text-yellow-600">Phone Number</TableHead>
                            <TableHead className="text-yellow-600">Address</TableHead>
                            <TableHead className="text-yellow-600">Expertise</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {volunteers?.map((volunteer: TVolunteerData) => (
                            <TableRow key={volunteer._id}>
                                <TableCell className="font-medium text-yellow-600">{volunteer?.name}</TableCell>
                                <TableCell className="text-yellow-600">{volunteer?.email}</TableCell>
                                <TableCell className="text-yellow-600">{volunteer?.phoneNumber}</TableCell>
                                <TableCell className="text-yellow-600">{volunteer?.address}</TableCell>
                                <TableCell className="text-yellow-600">{volunteer?.volunteerFor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AboutVolunteerTable;
