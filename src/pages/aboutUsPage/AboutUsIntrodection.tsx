import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";
import { FaCircle } from "react-icons/fa";


const AboutUsIntrodection = () => {
    return (
        <div className='p-10'>
            <h2 className='text-xl text-yellow-600 font-extrabold '>SupplyAid Network</h2>
            <p className='text-orange-500 font-bold'>Bringing Hope, One Meal at a Time.</p>
            <Separator className="my-2 h-1 w-1/3" />
            <div className="pt-5">
                The SupplyAid Network is a non-political, non-profitable government-registered organization dedicated to education, da'wah and full human welfare. It was established in 2017 by Shaikh Ahmadullah. He is the chairman of the organization and manages it directly. SupplyAid Network was registered in 2019 from Joint Stock, Whose registration number is S-13111/2019. Since then, it has been working rigorously to serve the humanity, reform the society, developing the utmost morality, arrange various activities to build up a neat and clean mentality and ultimately to build up an ideal society following in the footsteps of the Prophet Muhammad, the teacher of humanity, the messenger of human liberation and peace and the ideal of human welfare. One of the goals of SupplyAid Network is to build life and society based on the Quran and Sunnah and to propagate and spread authentic knowledge. It is our policy to adopt a moderate approach based on the Qur'an and Sunnah following the path of the righteous predecessors.
            </div>
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
    );
};

export default AboutUsIntrodection;