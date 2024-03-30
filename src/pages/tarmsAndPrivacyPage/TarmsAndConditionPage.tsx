import { useAppSelector } from "@/redux/hooks";


const TarmsAndConditionPage = () => {

    const { darkMode } = useAppSelector((store) => store.theme);



    return (
        <div className='px-16 py-5'>
            <div className=' min-h-[80vh]'>

                <div className='pt-2'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600   ' : ''}`}>Conditions of Use:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        Using of the SupplyAid Network website constitutes agreement to our terms of use. We encourage you to review the following information carefully.
                    </article>

                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Trademarks:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        The SupplyAid Network and other marks indicated on our site are trademarks owned exclusively by the SupplyAid Network. The use of these trademarks and trade dress is prohibited if used in connection with the sale of any product or service that is not the SupplyAid Network’s, in any manner that seeks to disparages or discredit the SupplyAid Network or in any manner that may cause confusion among our customers.
                    </article>



                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Copyright:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        All content on this website is the exclusive property of the SupplyAid Network. Said content includes the SupplyAid Network’s generated text, graphics, logos, icons, images, audio and video clips, digital downloads, and software. Our content is protected by Bangladesh and international copyright laws and we reserve all rights contained therein. In case of dispute or infringement, we will rigorously defend our rights to this material.
                    </article>

                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Protecting Your Account:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        Some portions of this website permit email and passwords to be used. You are responsible for protecting your unique email and password and you agree to be responsible for all activities performed under your user account.
                    </article>


                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>License And Site Access:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        The SupplyAid Network grants you (the user) a limited license to access and make personal use of this website. This license does not include the right to download any material (other than routine page caching), modify any material, or any portion thereof, without the express written consent of the SupplyAid Network. This license excludes the download or collection of logos, product descriptions, pricing, text, graphics, audio and video clips, and/or copying account information. This website or any portion of this website may not be reproduced, duplicated, copied, sold, visited, or otherwise exploited for any commercial purpose without express written permission of the SupplyAid Network. You are prohibited from using meta tags or any other hidden text utilizing the SupplyAid Network’s name or trademarks without the express written consent of the SupplyAid Network. Any unauthorized use of this websites voids the limited license granted by the SupplyAid Network.
                    </article>


                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Content Submitted By Site Users:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        If you do post content to this site or otherwise submit material (including, but not limited to, photographs and testimonials), you grant the SupplyAid Network and its affiliates a nonexclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media. By your submission you represent and warrant that you own or otherwise control all of the rights to the content that you post that the content is accurate that use of the content you supply does not violate this policy and will not cause injury to any person or entity and that you will indemnify the SupplyAid Network or its affiliates for all claims resulting from content you supply. The SupplyAid Network reserves the right to remove any content at our sole discretion.
                    </article>


                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Our Refund Policy</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        We treasure each gift and make a solid effort to guarantee each money is given something to do helping other people rapidly. At the point when we get your gift, we trust it was your full aim to help our endeavors. Since the SupplyAid Network gives all gifts something to do rapidly, we don’t offer discounts on any gifts or any gifts made in receipt of blessing things.
                    </article>


                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Applicable Law:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        By visiting www.supplyaidnetwork.org, you agree that the laws of Bangladesh, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any sort that might arise between you and the SupplyAid Network.
                    </article>


                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Changes In Policy:</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        The SupplyAid Network reserves the right to modify, alter, delete and update these policies at any time we see fit. Such alterations do not nullify our rights if infringements or breaches occurred under a previous version of these conditions.
                    </article>


                </div>
                <div className='mt-7'>
                    <h2 className={`font-medium mb-3  ${darkMode ? ' text-yellow-600' : ''}`}>Thanks for :</h2>
                    <article className={` ${darkMode ? ' text-orange-500' : ''} text-wrap text-sm  `} >
                        As-Sunnah Foundation  for this data.
                    </article>


                </div>


            </div>
        </div>
    );
};

export default TarmsAndConditionPage;