import { useGetUserDonationDataWithAmountQuery, useGetUserTotalDonationAmountQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import Chart from "react-google-charts";



const PiChart = () => {

    const user = useAppSelector((store) => store.auth.user);
    const userId = user?.userId;

    const { data: userTotalDonation, isLoading: userAllDonationLoading } = useGetUserTotalDonationAmountQuery(userId);
    const { data: userCategoryAmountData, isLoading } = useGetUserDonationDataWithAmountQuery(userId);

    if (isLoading || userAllDonationLoading) {
        return <div>Loading....</div>;
    }

    let categoryData = [];
    if (userCategoryAmountData?.donations) {
        categoryData = userCategoryAmountData.donations.map(({ category, totalAmount }: { category: string, totalAmount: number }) => [category, totalAmount]);
    }

    const totalUserDonation = userTotalDonation?.totalUserDonation || 0;

    const data = [
        ["Task", "My Donation Data"],
        ['Total Donation Amount ', totalUserDonation],
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