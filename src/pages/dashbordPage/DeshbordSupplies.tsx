import { Button } from '@/components/ui/button';

import { MdAddToPhotos } from "react-icons/md";
import { Link } from 'react-router-dom';
import SupplyTable from './SupplyTable';

import '../../App.css'


const DeshbordSupplies = () => {
    return (
        <div className='md:ml-44 ml-4 overflow-y-hidden my-10   '>

            <div className=' mb-20 border-yellow-600 shadow-lg shadow-yellow-600 w-full  max-w-3xl m-10 p-5 '>
                <div className='flex justify-between items-center p-5 '>
                    <div>
                        <h2 className='text-yellow-600 text-2xl font-extrabold'>All Supplies</h2>
                    </div>
                    <Link to='/dashboard/create-supply' className=''>
                        <Button className='py-2  px-1 bg-yellow-600 hover:bg-yellow-800'>  <MdAddToPhotos size={26}></MdAddToPhotos>Add Supply</Button>
                    </Link>

                </div>

                <div>
                    <SupplyTable></SupplyTable>
                </div>
            </div>

        </div>
    );
};

export default DeshbordSupplies;