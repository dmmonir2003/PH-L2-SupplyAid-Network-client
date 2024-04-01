import { Separator } from "@/components/ui/separator";

import { FaCircle } from "react-icons/fa";


const Membership = () => {
    return (
        <div className='p-10'>


            <h2 className='text-xl text-yellow-600 font-extrabold '>Lifetime Member</h2>
            <div className="pt-5">
                All members who donate at least 100,000 / = (One Lakh) or more to the foundation fund for the foundation will become lifetime members of the foundation
            </div>
            <h2 className='text-xl mt-7 text-yellow-600 font-extrabold '>Lifetime Member</h2>
            <div className="pt-5">
                All members who donate at least 50,000 / = (fifty thousand) or more to the foundation fund for the foundation, will be the donor members of the foundation.
                Donors and lifetime members will be the member of SupplyAid Network till death. In the interest of the Foundation, their advice will be sought as required and they will be informed about various activities from time to time.
            </div>

            <p className="mt-2 font-medium text-yellow-600">Membership rules:</p>

            <div className="flex mt-4">
                <div>
                    <FaCircle size={12} className="text-yellow-500 "></FaCircle>

                    <Separator orientation="vertical" className="h-10 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                    <FaCircle size={12} className="text-yellow-500 "></FaCircle>
                </div>
                <p className="ml-3 -mt-2  text-yellow-600">All members of the foundation must follow the Qur'an and Sunnah and be free from shirk (Polytheism) and bid'at (Innovation).</p>
            </div>
            <div className="flex">
                <div>
                    <Separator orientation="vertical" className="h-5 w-[1px] ml-1.5 bg-yellow-500"></Separator>
                    <FaCircle size={12} className="text-yellow-500 "></FaCircle>
                </div>
                <p className="ml-3 -mt-5  text-yellow-600">Payment for membership fee must be halal.</p>
            </div>
            <div className="flex ml-3">

                <p className="ml-3 -mt-5 font-medium text-yellow-600">Fill out the prescribed form.</p>
            </div>

        </div>
    );
};

export default Membership;