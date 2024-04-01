
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


interface TData {
    name: string;
    image: string;
    description: string;
    _id?: string
}


interface TestimonialCardProps {
    donors: TData[];
}

const TestimonialCard = ({ donors }: TestimonialCardProps) => {


    return (

        <Swiper
            autoplay={{
                delay: 3000,
            }}
            speed={4000}
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
        >
            {donors?.map((donor: TData) => (
                <SwiperSlide key={donor?._id}>
                    <div className="flex justify-center items-center mb-10">
                        <div className="w-1/2 flex justify-end ">
                            <div className="h-52 p-4 w-72 border-2 border-yellow-600 left-3 shadow-lg shadow-yellow-600 relative">
                                <h2 className="font-extralight">{donor?.description}</h2>
                                <h3 className="text-right mt-10 mr-5 text-yellow-600 font-bold">{donor?.name}</h3>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-52 h-36 border-2 border-yellow-600 absolute shadow-lg shadow-yellow-600 top-8" src={donor?.image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>


    );
};

export default TestimonialCard;
