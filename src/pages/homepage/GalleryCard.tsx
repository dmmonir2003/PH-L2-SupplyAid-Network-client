

// const GalleryCard = () => {

//     const imagesArray = [
//         {
//             alt: "Image1's alt text",
//             caption: "Image1's description",
//             src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//             columnWidth: 230,
//         },
//         {
//             alt: "Image2's alt text",
//             caption: "Image2's description",
//             src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//             columnWidth: 250,
//         },
//         {
//             alt: "Image3's alt text",
//             caption: "Image3's description",
//             src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//             columnWidth: 270,
//         },

//         {
//             alt: "Image3's alt text",
//             caption: "Image3's description",
//             src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//             columnWidth: 330,
//         },
//         {
//             alt: "Image3's alt text",
//             caption: "Image3's description",
//             src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//             columnWidth: 250,
//         },
//         {
//             alt: "Image3's alt text",
//             caption: "Image3's description",
//             src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//             columnWidth: 230,
//         },
//     ];

//     return (
//         <div className="mx-auto max-w-4xl  ">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
//                 <div className=" rounded-md "><img className="h-44 w-full rounded-md p-2 shadow-inner shadow-yellow-600" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="" /></div>
//                 <div>hi 2</div>
//                 <div>hi 3</div>
//                 <div>hi 4</div>
//                 <div className=" rounded-md "></div>
//                 <div>hi 2</div>
//                 <div>hi 3</div>
//                 <div>hi 4</div>
//             </div>
//         </div>
//     );
// };

// export default GalleryCard;


const GalleryCard = () => {
    const imagesArray = [
        {
            alt: "Image1's alt text",
            caption: "Image1's description",
            src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            columnWidth: 230,
        },
        {
            alt: "Image2's alt text",
            caption: "Image2's description",
            src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            columnWidth: 250,
        },
        {
            alt: "Image3's alt text",
            caption: "Image3's description",
            src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            columnWidth: 270,
        },
        {
            alt: "Image4's alt text",
            caption: "Image4's description",
            src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            columnWidth: 330,
        },
        {
            alt: "Image5's alt text",
            caption: "Image5's description",
            src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            columnWidth: 250,
        },
        {
            alt: "Image6's alt text",
            caption: "Image6's description",
            src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            columnWidth: 230,
        },
    ];

    return (
        <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
                {imagesArray.map((image, index) => (
                    <div key={index} className="rounded-md">
                        <img className="h-44 w-full rounded-md p-2 shadow-inner shadow-yellow-600" src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryCard;
