import { useGetUserDonationDataWithAmountQuery, useGetUserTotalDonationAmountQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import Chart from "react-google-charts";



const PiChart = () => {

    const user = useAppSelector((store) => store.auth.user)

    const userId = user?.userId;

    console.log(userId);

    const { data: userTotalDonation, isLoading: userAllDonationLoading } = useGetUserTotalDonationAmountQuery(userId)

    const { data: userCategoryAmountData, isLoading } = useGetUserDonationDataWithAmountQuery(userId)

    if (isLoading) {
        return <div>Loanding....</div>
    }


    if (userAllDonationLoading && isLoading) {
        return <div>Loanding....</div>
    }
    const categoryData = userCategoryAmountData?.donations?.map(({ category, totalAmount }: { category: string, totalAmount: number }) => [category, totalAmount]);


    const data = [

        ["Task", "My Donation Data"],
        ['Total Donation Amount ', userTotalDonation?.totalUserDonation || 0],
        ...categoryData,
    ];

    const options = {
        title: "My All Donation",
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default PiChart;