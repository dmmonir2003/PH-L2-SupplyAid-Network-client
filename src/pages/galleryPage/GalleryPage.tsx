import { useAppSelector } from "@/redux/hooks";
import GalleryCard from "../homepage/GalleryCard";
import { useLocation } from "react-router-dom";
import { imagesArray } from "@/assets/categoryData";

const GalleryPage = () => {
    const { category, pathName } = useAppSelector((store) => store.category);
    const location = useLocation();
    console.log(category, pathName);

    let photos = [];
    if (location.pathname === pathName) {
        photos = imagesArray.filter((image) => image.category === category);
    } else {
        photos = imagesArray;
    }

    return (
        <div>
            <GalleryCard photos={photos} />
        </div>
    );
};

export default GalleryPage;
