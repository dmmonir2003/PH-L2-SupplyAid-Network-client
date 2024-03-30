import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";
import { FaCircle } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="md:flex w-full max-w-4xl my-10 mx-auto">

            <div className="w-1/2"> <img src="https://assets-global.website-files.com/63334c2c8ea58f2277b74981/63b44be799f79b15725dbcee_hdr-donately-collage-side%4015-p-800.png" alt="" /></div>

            <div className="md:w-1/2 w-full md:mt-10 p-4">
                <h2 className='text-xl text-yellow-600 font-extrabold '>SupplyAid Network</h2>
                <p className='text-orange-500 font-bold'>Bringing Hope, One Meal at a Time.</p>
                <Separator className="my-2 h-1 " />
                <p>SupplyAid Network is a non-profit, non-political, and entirely charitable organization dedicated to human welfare. Following the ideals and footsteps of the teacher of humanity, liberator of mankind, and role model of generosity Prophet Muhammad (Saw)....</p>

                <div className="flex mt-4">
                    <div>
                        <FaCircle size={12} className="text-yellow-500 "></FaCircle>

                        <Separator orientation="vertical" className="h-5 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                        <FaCircle size={12} className="text-yellow-500 "></FaCircle>
                    </div>
                    <p className="ml-3 -mt-2 font-medium text-yellow-600">Education</p>
                </div>
                <div className="flex">
                    <div>
                        <Separator orientation="vertical" className="h-5 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                        <FaCircle size={12} className="text-yellow-500 "></FaCircle>
                    </div>
                    <p className="ml-3 -mt-5 font-medium text-yellow-600">Charity</p>
                </div>
                <div className="flex">
                    <div>
                        <Separator orientation="vertical" className="h-5 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                        <Circle size={12} strokeWidth={3} className="text-yellow-500 " />
                    </div>
                    <p className="ml-3 -mt-5 font-medium text-yellow-600">Dawah</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;