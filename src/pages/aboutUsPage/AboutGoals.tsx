import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";


const AboutGoals = () => {
    return (
        <div className="p-10">
            <h2 className='text-xl text-yellow-600 font-extrabold '>Goals and Objectives</h2>
            <p className="mt-3">The goal of the SupplyAid Network is to gain the satisfaction of the Almighty Allah by conducting da'wah activities to prevent evil deeds in the light of the lifestyle of the Prophet (peace be upon him)</p>

            <div className="flex mt-4">
                <div>
                    <Circle size={12} className="text-yellow-500 "></Circle>

                    <Separator orientation="vertical" className="h-12 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                    <Circle size={12} className="text-yellow-500 "></Circle>
                </div>
                <p className="ml-3 -mt-2  ">(a) Institutional and sub-institutional Islamic and general education and career-oriented technical training initiatives across the country, especially in the comparatively neglected sections of society</p>
            </div>
            <div className="flex">
                <div>
                    <Separator orientation="vertical" className="h-9 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                    <Circle size={12} className="text-yellow-500 "></Circle>
                </div>
                <p className="ml-3 -mt-5 ">(b) service to humanity and</p>
            </div>
            <div className="flex ml-3">
                <div>

                </div>
                <p className="ml-3 -mt-5">(c) encouragement for good deeds are the prime objective of the SupplyAid Network.</p>
            </div>



        </div>
    );
};

export default AboutGoals;