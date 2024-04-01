import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";
import { NavLink } from "react-router-dom";
import { useGetAlltestimonialQuery } from "@/redux/features/testimonial/testimonialApi";


const Testimonial = () => {


    const { data: donarTestimonialsData, isLoading } = useGetAlltestimonialQuery(undefined);

    if (isLoading) {
        return <div>Loading .....</div>
    }



    const donars = donarTestimonialsData?.slice(0, 6);



    return (
        <div className="py-20">
            <div className="flex justify-between mx-20">
                <div>

                    <h2 className="text-xl font-extrabold text-yellow-600  ">Our Top 6 Donor Testimonials</h2>
                </div>



                <div>
                    <NavLink to={'/common/donorAndLifetimeMember'}><Button className='bg-yellow-600 text-white hover:bg-yellow-800'>

                        More Donar  <FaArrowUpRightFromSquare className="ml-2"></FaArrowUpRightFromSquare> </Button></NavLink>
                </div>

            </div>
            <Separator className="w-1/3 h-1 mt-2 mb-10 ml-20"></Separator>

            <div className="mt-40">
                <TestimonialCard donors={donars}></TestimonialCard>
            </div>
        </div>
    );
};

export default Testimonial;