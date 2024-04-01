

interface photo {
    alt: string
    caption: string
    src: string
    category: string
}

interface TPhotosProps {
    photos: photo[]
}
const GalleryCard = ({ photos }: TPhotosProps) => {


    return (
        <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
                {photos?.map((image, index) => (
                    <div key={index} className="rounded-md">
                        <img className="h-44 w-full rounded-md p-2 shadow-inner shadow-yellow-600" src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryCard;
