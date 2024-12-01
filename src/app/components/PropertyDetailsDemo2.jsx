'use client'
import HandleView from '@/app/components/HandleView'
import HeaderInner from '@/app/components/HeaderInner'
import ReadMore from '@/app/components/ReadMore'
import Image from 'next/image'
import { useState, useRef } from 'react';

const PropertyDetailsDemo2 = () => {
 
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
                                    src={'/assets/24A.webp'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/24a2.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/24a3.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/24a4.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/24a5.jpg'}
                                    alt="property"
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={handleImageClick}
                                    className=""
                                />
                            </div>
                            <div className="flex-shrink-0 w-screen h-80 relative">
                                <Image
                                    src={'/assets/24aplan.jpg'}
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
                            <h1 className='mt-4 mb-2  text-[12px] tracking-wider'>24A Samuel Street, Peakhurst, NSW 2210</h1>
                            <h2 className='  text-[12px] tracking-wider'>4B 4B 2C | House</h2>
                            <h2 className='  text-[12px] tracking-wider text-gray-600'>Inspection Sat 30 Nov</h2>
                            <h1 className='mt-8 mb-2  text-[12px] tracking-wider'>Brand new luxury residence, with Bespoke Finishes in quiet location</h1>
                            {/* <p className='property-description mt-8'>
                        {'"Every detail was carefully considered to create a home that seamlessly integrates functionality, luxury, and style. We wanted it to feel both extraordinary and liveable,"- Builder'}
                    </p> */}
                            <p className='property-description mt-8'>
                                {'"When designing this home, I focused on craftsmanship and durability. The Venetian plaster walls add texture, while the large windows were positioned to flood the interior with natural light and perfectly frame the waterfront views. The pool area was integrated into the design, with the surrounding stonework and glass balustrades enhancing the seamless flow between the home and the water. Every detail, from the lighting to the layout, was chosen to maximise the connection to the environment, blending indoor and outdoor living effortlessly." - Owner'}
                            </p>
                            <ReadMore >
                                {'- This architecturally designed home redefines modern living with cutting-edge features, custom finishes, and an uncompromising level of craftsmanship, this home offers a blend of elegance and practicality that appeals to families and discerning buyers.'}
                                {'- The master suite is a highlight, with custom wall panelling, tinted glass wardrobes, and a dressing table with an LED-lit mirror. The private terrace provides a serene retreat, while the ensuite offers luxury with a heated floor, integrated toilet, and premium gunmetal fixtures. The additional bedrooms are generously sized, equipped with custom wardrobes featuring thin shaker doors and LED illumination, ensuring both style and practicality'}
                                {'- Bathrooms throughout the home continue the theme of excellence, with jumbo porcelain tiles, Caroma hardware, and 200mm stone-topped vanities. Heated floors and towel rails add to the comfort'}
                                {'- The kitchen is a culinary masterpiece, featuring 60mm Oro Lusso stone benchtops, walnut veneer cabinetry, and state-of-the-art German Neff appliances. Dual Bosch integrated fridges, Austrian Blum hardware, and full LED illumination elevate both form and function. Adjacent, a concealed butler’s pantry enhances the home’s streamlined aesthetic'}
                                {'- The open-plan living and dining areas, with 3m high ceilings and floor-to-ceiling windows, offer a sense of spaciousness and light. Custom joinery, including a humidifier fireplace with a 3D flame and bespoke entertainment units, underscores the home’s luxurious finishes'}
                                {'- Additional highlights include double-brick construction, commercial-grade double-glazed windows, a climate-controlled wine cellar, epoxy-coated garage floors, and a 13kW solar panel system. Custom-designed aluminum cladding, LED facade strip lighting, and a hidden flip-system garage door ensure the home’s exterior is as impressive as its interior'}
                                {'- Step outside to a covered alfresco area with a custom BBQ and landscaped gardens, perfect for entertaining. The detached studio, complete with its own kitchen, bathroom, and wardrobe, provides versatility as a guest suite, home office, or gym'}
                                {'- Situated in a sought-after location, close to schools, parks, and shopping precincts, this home offers a lifestyle of convenience and sophistication. This is a property where every element has been meticulously crafted to deliver a truly exceptional living experience'}
                            </ReadMore>
                            <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Property Video</h1>
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

                            <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Location</h1>
                            <iframe
                                width="330"
                                height="150"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13223.319213853924!2d151.0534609!3d-33.9497455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c7c6f4f5d8d5%3A0x56e9072954708fbd!2s24A%20Samuel%20St%2C%20Peakhurst%20NSW%202210%2C%20Australia!5e0!3m2!1sen!2sus!4v1684435672682!5m2!1sen!2sus"
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
                        <button className='border text-xs border-black rounded-sm py-1 px-4' onClick={() => handleSection(videoRef)}><h2>Video</h2></button>
                    </div>
                    <div className="mt-8 mx-2 flex flex-wrap gap-4" ref={imagesRef}>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/24A.webp'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/24a2.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/24a3.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/24a4.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"

                                className=""
                            />
                        </div>
                        <div className="flex-shrink-0 w-screen h-80 relative">
                            <Image
                                src={'/assets/24a5.jpg'}
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
                                src={'/assets/24aplan.jpg'}
                                alt="property"
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                    {/* video */}
                    <div ref={videoRef}>
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

                    </div>



                </div>
            )}
            {/* second div */}

        </>

    )
}

export default PropertyDetailsDemo2