import { useGetTotalDonationAmountQuery } from "@/redux/features/donation/donationApi";
import BarChart from "./charts/BarChart";
import PiChart from "./charts/PiChart";


const Deshbord = () => {

    const { data: totalDonationData, isLoading: isLoadingTotalDonation } = useGetTotalDonationAmountQuery('');






    if (isLoadingTotalDonation) {
        return <div>Loading .....</div>
    }

    console.log(totalDonationData?.totalDonation);

    return (
        <div className="py-10 md:flex  ">
            <div className="w-full md:w-2/3">
                <div className="md:grid  md:grid-cols-2  gap-2 ml-12 ">

                    <div className="w-2/3 bg-yellow-600 h-40 shadow-lg shadow-yellow-600  pt-10 p-1 rounded-md mb-5 md:mb-0">
                        <h2 className="text-white text-center font-bold text-2xl">$ {totalDonationData?.totalDonation} </h2>
                        <h2 className="text-white text-center font-bold text-xl">Total Donation</h2>
                    </div>
                    <div className="w-2/3 bg-yellow-600 h-40 shadow-lg shadow-yellow-600  pt-10 p-1 rounded-md">
                        <h2 className="text-white text-center font-bold text-2xl"> 6</h2>
                        <h2 className="text-white text-center font-bold text-xl">Total Running Project </h2>
                    </div>


                </div>


                <BarChart></BarChart>
            </div>


            <div className="md:h-[100vh] h-full w-full md:w-1/3">
                <PiChart></PiChart>
            </div>



        </div>
    );
};

export default Deshbord;