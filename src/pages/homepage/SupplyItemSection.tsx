import { Button } from "@/components/ui/button";
import SupplyItemCard from "./SupplyItemCard";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { useGetAllSupplyQuery } from "@/redux/features/supplies/SuppliesApi";


const SupplyItemSection = () => {

    const { data: supplies, isLoading } = useGetAllSupplyQuery(undefined);


    if (isLoading) {
        return <div>Loading .....</div>
    }



    const firstSixSupplies = supplies?.slice(0, 6);


    return (
        <div className="">
            <h2 className="text-xl font-extrabold text-yellow-600  text-center">Together Let’s make a change</h2>
            <Separator className="w-1/3 mx-auto h-1 mt-2 mb-20"></Separator>

            <SupplyItemCard supplies={firstSixSupplies} />
            <div className="flex justify-center"> <NavLink to='/common/allSupplies'><Button className="bg-yellow-600 text-white hover:bg-yellow-800 mt-20 align-middle">View All</Button></NavLink></div>
        </div>
    );
};

export default SupplyItemSection;