import { useGetAlltestimonialQuery } from "@/redux/features/testimonial/testimonialApi";
import TestimonialCard from "../homepage/TestimonialCard";


const DonarTestimonial = () => {



    const { data: donarTestimonialsData, isLoading } = useGetAlltestimonialQuery(undefined);

    if (isLoading) {
        return <div>Loading .....</div>
    }




    const donars = donarTestimonialsData;


    return (
        <div className="py-20 mx-auto">
            <TestimonialCard donors={donars}></TestimonialCard>

        </div>
    );
};

export default DonarTestimonial;