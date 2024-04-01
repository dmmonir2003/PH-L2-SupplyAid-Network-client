
import { useGetCategoryTotalDonationAmountQuery, useGetTotalDonationAmountQuery } from "@/redux/features/donation/donationApi";
import { Chart } from "react-google-charts";

const BarChart = () => {
    const { data: totalDonationData, isLoading: isLoadingTotalDonation } = useGetTotalDonationAmountQuery('');
    const { data: hygieneProductsTotalAmount, isLoading: hygieneProductsAmountLoading } = useGetCategoryTotalDonationAmountQuery('Hygiene Products');
    const { data: generalFundTotalAmount, isLoading: generalFundAmountLoading } = useGetCategoryTotalDonationAmountQuery('General Fund');
    const { data: orphanFundTotalAmount, isLoading: orphanFundAmountLoading } = useGetCategoryTotalDonationAmountQuery('Orphan Fund');
    const { data: babyEssentialsTotalAmount, isLoading: babyEssentialsAmountLoading } = useGetCategoryTotalDonationAmountQuery('Baby Essentials');
    const { data: foodPackageTotalAmount, isLoading: foodAmountLoading } = useGetCategoryTotalDonationAmountQuery('Food Package');




    if (foodAmountLoading && hygieneProductsAmountLoading && generalFundAmountLoading && orphanFundAmountLoading && babyEssentialsAmountLoading && isLoadingTotalDonation) {
        return <div>Laoanging...</div>
    }


    const data = [
        ["Category", "Total Donation Amount"],
        ['Total Amount ', totalDonationData?.totalDonation],
        ["Hygiene Products", hygieneProductsTotalAmount?.totalCategoryDonation],
        ["General Fund", generalFundTotalAmount?.totalCategoryDonation],

        ["Baby Essentials", babyEssentialsTotalAmount?.totalCategoryDonation],
        ["Food Package", foodPackageTotalAmount?.totalCategoryDonation],
        ["Orphan Fund", orphanFundTotalAmount?.totalCategoryDonation],
    ];



    const options = {
        chart: {
            title: "Total Donation Amount by Category",
        },
        bars: 'vertical',



    };




    return (
        <div className="p-2 mt-10 overflow-hidden">

            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}

            />

        </div>
    );
};

export default BarChart;
