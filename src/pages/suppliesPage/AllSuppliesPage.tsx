/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllSupplyQuery } from "@/redux/features/supplies/SuppliesApi";
import { useAppSelector } from "@/redux/hooks";
import { useLocation } from "react-router-dom";
import SupplyItemCard from "../homepage/SupplyItemCard";



const AllSuppliesPage = () => {

    const { category, pathName } = useAppSelector((store: { category: any; }) => store.category);


    const location = useLocation();


    const { data: supplies, isLoading } = useGetAllSupplyQuery(undefined);

    if (isLoading) {
        return <div>Loading ... </div>
    }

    let selectedSupplies = [];
    if (location.pathname === pathName) {
        selectedSupplies = supplies?.filter((supply: { category: string; }) => supply.category === category)
    } else {
        selectedSupplies = supplies;
    }



    return (
        <div className="p-10">
            <SupplyItemCard supplies={selectedSupplies}></SupplyItemCard>
        </div>
    );
};

export default AllSuppliesPage;