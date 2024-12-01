
'use client'
import HandleView from '@/app/components/HandleView'
import HeaderInner from '@/app/components/HeaderInner'
import ReadMore from '@/app/components/ReadMore'
import Image from 'next/image'
import { useState, useRef } from 'react';

export const PropertyDetailDemo = () => {
    const [isFirstDivOpen, setIsFirstDivOpen] = useState(true);
    const imagesRef = useRef(null);
    const floorPlanRef = useRef(null);
    const videoRef = useRef(null);
    const handleImageClick = () => {
        setIsFirstDivOpen(false);
    };
    const handleSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleBtnClick = () => {
        setIsFirstDivOpen(true);
    };


    return (
        <>
            {/* first div */}
            {isFirstDivOpen && (
                <div >
                    <HeaderInner />
                    <div className='mt-16'>
                        <div className="flex mt-4 overflow-x-auto scrollbar-hidden">
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/1311.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/1312.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/1313.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/1314.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/1315.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/131plan.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className='mx-6'>
                            <h1 className='mt-4 mb-2 font-semibold text-[12px] tracking-wider'>FOR SALE</h1>
                            <h1 className='mt-4 mb-2  text-[12px] tracking-wider'>1/31 Amy Road, Peakhurst, NSW 2210</h1>
                            <h2 className='  text-[12px] tracking-wider'>3B 1B 2C | Villa</h2>
                            <h2 className='  text-[12px] tracking-wider text-gray-600'>Inspection Sat 30 Nov</h2>
                            <h1 className='mt-8 mb-2  text-[12px] tracking-wider'>Charming street facing villa in the Heart of Peakhurst</h1>
                            {/* <p className='property-description mt-8'>
                        {'"Every detail was carefully considered to create a home that seamlessly integrates functionality, luxury, and style. We wanted it to feel both extraordinary and liveable,"- Builder'}
                    </p> */}
                            <p className='property-description mt-8'>
                                {'"We’ve loved how light-filled and practical every room is—perfect for everyday family living and gatherings" - Owner'}
                                {'- This well-maintained brick home offers a rare combination of space, functionality, and tranquillity with own driveway access. it presents an ideal opportunity for growing families or those looking for a peaceful yet connected lifestyle.'}
                                {'- Three well-appointed bedrooms provide ample space for rest and relaxation. The master bedroom features generous proportions and a calming view of the garden.'}
                            </p>
                            <ReadMore >
                                {'- The bathroom, centrally located, is both practical and stylish with contemporary finishes and a separate WC for added convenience, making it ideal for families or when entertaining guests'}
                                {'- The kitchen is a cooks delight, equipped with stainless steel appliances, ample storage, and a practical layout that makes meal preparation a joy'}
                                {'- The open-plan living and dining areas are bathed in natural light, offering a welcoming space for family gatherings and entertaining guests'}
                                {'- The courtyard is a private oasis, perfect for alfresco dining and enjoying the serene surroundings'}
                                {'- Additional features include air conditioning, a separate laundry room, and a single garage with off street driveway parking. The home’s timber flooring throughout adds a touch of warmth and durability'}
                                {'- Located within a family-friendly community, this property is close to local schools, parks, and public transport. A short drive takes you to nearby shopping centres, ensuring convenience is never far away. This home offers the perfect balance of suburban peace with city accessibility'}
                            </ReadMore>

                            {/* <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Property Video</h1>
                            <div className='flex justify-center'>
                                <iframe
                                    width="320"
                                    height="150"
                                    className='rounded-lg'
                                    src="https://www.youtube.com/embed/th3sVDh9r00?rel=0"
                                    title="Property Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div> */}

                            <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Location</h1>
                            <iframe
                                width="330"
                                height="150"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13223.104836147228!2d151.0562135!3d-33.9487541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c7f2057b181d%3A0x2774b3884cd2be28!2s1%2F31%20Amy%20Rd%2C%20Peakhurst%20NSW%202210%2C%20Australia!5e0!3m2!1sen!2sus!4v1684435766715!5m2!1sen!2sus"
                                frameBorder="0"
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                            <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Contact</h1>
                        </div>
                    </div>

                </div>
            )}
            {!isFirstDivOpen && (
                <div className='mt-16'>
                    <div className="fixed top-0 py-2 z-10 left-0 right-0 bg-white">
                        <div className='flex justify-between items-center mb-2 mx-6'>
                            <Image onClick={handleBtnClick} src={'/assets/back.png'} alt='<' className="w-2 h-3" width={2} height={1} />
                            <h1>Ausrealty</h1>
                            <h1></h1>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-start mx-6 items-center mt-8'>
                        <button className='border text-xs border-black rounded-sm py-1 px-4' onClick={() => handleSection(imagesRef)}><h2>Images</h2></button>
                        <button className='border text-xs border-black rounded-sm py-1 px-4' onClick={() => handleSection(floorPlanRef)}><h2>Floor Plan</h2></button>
                        {/* <button className='border text-xs border-black rounded-sm py-1 px-4' onClick={() => handleSection(videoRef)}><h2>Video</h2></button> */}
                    </div>
                    <div className="mt-8 mx-2 flex flex-wrap gap-4" ref={imagesRef}>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/1311.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/1312.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/1313.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/1314.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/1315.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                    <div ref={floorPlanRef}>
                        {/* floor plan */}
                        <div className="flex-shrink-0 w-screen h-80 relative mt-5">
                            <Image
                                src={'/assets/131plan.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                    {/* video */}
                    {/* <div ref={videoRef}>
                        <div className='flex justify-center'>
                            <iframe
                                width="320"
                                height="150"
                                className='rounded-lg'
                                src="https://www.youtube.com/embed/th3sVDh9r00?rel=0"
                                title="Property Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div> */}



                </div>
            )}
            {/* second div */}

        </>

    )
}
