
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const BannerSection = () => {
    const urls = [
        "https://www.hhi.org/wp-content/uploads/DSC04698-cropped.jpg",
        "https://www.hhi.org/wp-content/uploads/PXL_20211207_161359280.PORTRAIT-2-web-e1672851312810.webp",
        "https://www.hhi.org/wp-content/uploads/DSC04698-cropped.jpg",
        "https://www.hhi.org/wp-content/uploads/DSC04698-cropped.jpg"
    ];

    const arrayOfObjects = urls.map(url => ({ url }));

    return (
        <div className='max-w-4xl w-full mx-auto mt-12'>
            <Swiper
                autoplay={{
                    delay: 3000,
                }}
                speed={4000}
                loop={true}
                modules={[Autoplay]}
                slidesPerView={1}
            >
                {arrayOfObjects.map((obj, index) => (
                    <SwiperSlide key={index}>

                        <img className='w-full rounded-md h-[350px]' src={obj.url} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSection;
