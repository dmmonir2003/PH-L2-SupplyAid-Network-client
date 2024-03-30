


import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const TestimonialCard = () => {
    const donors = [
        {
            name: "John Doe",
            imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis dignissimos nulla eos exercitationem quasi."
        },
        {
            name: "Jane Smith 2",
            imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add the URL of the image for the second donor
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis dignissimos nulla eos exercitationem quasi."
        },
        {
            name: "Jane Smith 3",
            imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Add the URL of the image for the second donor
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis dignissimos nulla eos exercitationem quasi."
        },
        {
            name: "Jane Smith 4",
            imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Add the URL of the image for the second donor
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis dignissimos nulla eos exercitationem quasi."
        },
        {
            name: "Jane Smith 5",
            imageUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Add the URL of the image for the second donor
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis dignissimos nulla eos exercitationem quasi."
        },
        {
            name: "Jane Smith 6",
            imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Add the URL of the image for the second donor
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis dignissimos nulla eos exercitationem quasi."
        },
        // Add more donor objects as needed
    ];

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
            {donors.map((donor, index) => (
                <SwiperSlide key={index}>
                    <div className="flex justify-center items-center mb-10">
                        <div className="w-1/2 flex justify-end ">
                            <div className="h-52 p-4 w-72 border-2 border-yellow-600 left-3 shadow-lg shadow-yellow-600 relative">
                                <h2 className="font-extralight">{donor.description}</h2>
                                <h3 className="text-right mt-10 mr-5 text-yellow-600 font-bold">{donor.name}</h3>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-52 h-36 border-2 border-yellow-600 absolute shadow-lg shadow-yellow-600 top-8" src={donor.imageUrl} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>


    );
};

export default TestimonialCard;
