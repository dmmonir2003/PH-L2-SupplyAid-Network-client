



import { selectCategory } from "@/redux/features/catagorySlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState, useEffect } from "react";

interface CommonSideBarProps {
    categoryName: { category: string }[];
    pathName: string;
}

const CommonSideBar = ({ categoryName, pathName }: CommonSideBarProps) => {
    const [activeNavLink, setActiveNavLink] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (categoryName.length > 0) {
            setActiveNavLink(categoryName[0].category);
            dispatch(selectCategory({ category: categoryName[0].category, pathName }));
        }
    }, [categoryName, dispatch, pathName]);

    const handleCategoryClick = (category: string) => {
        setActiveNavLink(category);
        const payload = {
            category: category,
            pathName: pathName,
        };

        dispatch(selectCategory(payload));
    };

    return (
        <div className="w-1/4 ">
            <h2></h2>
            <div className=' sticky top-10 font-semibold m-10 mt-20'>
                {
                    categoryName?.map((item, index) => (
                        <p
                            key={index}
                            className={activeNavLink === item.category ? 'text-yellow-800 underline' : 'text-yellow-600 cursor-pointer my-3'}
                            onClick={() => handleCategoryClick(item.category)}
                        >
                            <p className='truncate'>{item.category}</p>
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default CommonSideBar;
