import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const ThanksCard = ({ image, ProjectName, date, name, gratefulFor, address, message }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
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
                    <div className='absolute  bottom-0  right-1/2 transform '>

                        <h3 className='text-white'>{name}</h3>
                        <h3 className='text-white'>{address}</h3>
                        <p className='text-white'>{date}</p>
                    </div>
                </div>
                <div className={`bg-yellow-600 w-full h-72`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className=' p-7 '>
                        <h2 className='text-white  text-center '>{message}</h2>
                    </div>
                </div>
            </ReactCardFlip>

        </div>
    );
};

export default ThanksCard;
