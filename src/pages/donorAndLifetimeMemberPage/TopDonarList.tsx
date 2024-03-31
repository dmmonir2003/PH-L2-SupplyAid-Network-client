import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllDonerDataQuery } from "@/redux/features/donation/donationApi";


const TopDonarList = () => {

    const { data: topdonarsData, isLoading } = useGetAllDonerDataQuery(undefined);


    if (isLoading) {
        return <div>Loading .....</div>
    }

    const donars = topdonarsData.donors


    return (
        <div className="overflow-x-auto my-10">
            <div className="w-full overflow-hidden">
                <h2 className="text-center text-yellow-600 font-bold text-xl py-2">Our Top Donar List</h2>
                <Table className="w-full whitespace-nowrap">
                    <TableHeader>
                        <TableRow className="text-yellow-600">
                            <TableHead className="w-[100px] text-yellow-600">Top Donar Name</TableHead>
                            <TableHead className="text-yellow-600 text-center">Email</TableHead>
                            <TableHead className="text-yellow-600">Donation Amount</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {donars?.map((donar, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium text-yellow-600">{donar?.name}</TableCell>
                                <TableCell className="text-yellow-600 text-center">{donar?.email}</TableCell>
                                <TableCell className="text-yellow-600">{donar?.totalAmount}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TopDonarList;