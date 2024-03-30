import { Button } from "@/components/ui/button";
import { useAppSelector } from '@/redux/hooks';
import { Link } from "react-router-dom";


interface Supply {
    _id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    quantity: string
}

interface Props {
    supplies: Supply[];
}

const SupplyItemCard = ({ supplies }: Props) => {



    const { darkMode } = useAppSelector((store) => store.theme)

    const truncateText = (text: string | null, wordsCount: number) => {
        if (!text) return '';
        const words = text.split(' ');
        const truncatedText = words.slice(0, wordsCount).join(' ');
        return truncatedText;
    };




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto ">

            {
                supplies?.map((supply) => (

                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer  rounded border-yellow-600  border-2 shadow-lg shadow-yellow-400">
                        <div className="h-80 ">
                            <img className="h-full object-cover w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={supply.image} alt="" />
                        </div>

                        <div className={`py-10 ${darkMode === false ? 'absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:vai-black/60 group-hover:to-black/70' : 'absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/20 group-hover:vai-black/40 group-hover:to-black/70'}`}></div>



                        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-700 group-hover:mb-0 mb-20">
                            <h2 className="text-xl text-yellow-600 font-bold  hover:mb-0">{supply.category
                            }</h2>
                            <p className="duration-300 text-white ">{truncateText(supply.description, 10)}</p>
                            <Link to={`/terms-layout/supplies/${supply._id}`}><Button className="bg-yellow-600 text-white hover:bg-yellow-800 mt-8">More Details</Button></Link>
                        </div>

                    </div>
                ))
            }

        </div>
    );
};

export default SupplyItemCard;