import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface TThanksProps {
    image: string;
    ProjectName: string;
    date: string;
    name: string;
    gratefulFor: string;
    address: string;
    message: string;
}

const ThanksCard = ({ image, ProjectName, date, name, gratefulFor, address, message }: TThanksProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };


    const truncateMessage = (message: string): string => {
        const words = message?.split(' ');
        if (words?.length > 20) {
            return words?.slice(0, 50).join(' ') + '...';
        }
        return message;
    };

    return (
        <div className='relative '>

            <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={0.8} flipSpeedFrontToBack={0.8}>
                <div className={`bg-red-500 w-full h-72 bg-cover shadow-lg shadow-yellow-600`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundImage: `url(${image})` }}>
                    <div className='absolute -left-1/4  top-1/2 transform '>
                        <h2 className='text-3xl h-full text-white  transform -rotate-90 uppercase'>{gratefulFor}</h2>
                    </div>
                    <div className='absolute  bottom-1/3  right-1/3 transform '>
                        <h2 className='text-xl font-bold text-white'> {ProjectName}</h2>

                    </div>
                    <div className='absolute  bottom-0   transform p-3'>

                        <h3 className='text-white ml-14'>{name}</h3>
                        <h3 className='text-white ml-14'>{address}</h3>
                        <p className='text-white ml-14'>{date}</p>
                    </div>
                </div>
                <div className={`bg-yellow-600 w-full h-72`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='p-7'>
                        <h2 className='text-white  text-center '>{truncateMessage(message)}</h2>
                    </div>
                </div>
            </ReactCardFlip>

        </div>
    );
};

export default ThanksCard;
