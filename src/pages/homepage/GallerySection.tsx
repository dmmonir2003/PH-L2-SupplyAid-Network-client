import { Separator } from "@/components/ui/separator";
import GalleryCard from "./GalleryCard";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { imagesArray } from "@/assets/categoryData";



const GallerySection = () => {

    const photos = imagesArray?.slice(0, 8);

    return (
        <div>
            <div className="">

                <h2 className="text-xl text-center font-extrabold text-yellow-600  ">Gallery</h2>
                <Separator className="w-1/3 h-1 mt-2 mb-10 ml-20 mx-auto"></Separator>
                <GalleryCard photos={photos}>

                </GalleryCard>

                <div className="flex justify-center mt-10">
                    <NavLink to='/common/gallery'><Button className='bg-yellow-600 text-white hover:bg-yellow-800'>

                        More   <FaArrowUpRightFromSquare className="ml-2"></FaArrowUpRightFromSquare> </Button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;