
import HeaderInner from '@/app/components/HeaderInner'
import ReadMore from '@/app/components/ReadMore'
import Image from 'next/image'


const page = () => {

    return (
        <div >
            <HeaderInner />
            <div className='mt-16'>
                <div className="flex mt-4 overflow-x-auto scrollbar-hidden">
                    <div className="flex-shrink-0 w-screen">
                        <Image
                            src={'/assets/propertydummy.png'}
                            alt="property"
                            className="w-full h-auto"  // Make sure the image takes full width and adjusts height automatically
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex-shrink-0 w-screen">
                        <Image
                            src={'/assets/propertydummy.png'}
                            alt="property"
                            className="w-full h-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex-shrink-0 w-screen">
                        <Image
                            src={'/assets/propertydummy.png'}
                            alt="property"
                            className="w-full h-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex-shrink-0 w-screen">
                        <Image
                            src={'/assets/propertydummy.png'}
                            alt="property"
                            className="w-full h-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

                <div className='mx-6'>
                    <h1 className='mt-4 mb-2 font-semibold text-[12px] tracking-wider'>FOR SALE</h1>
                    <h1 className='mt-4 mb-2  text-[12px] tracking-wider'>12 Dodson Avenue, Cronulla</h1>
                    <h2 className='  text-[12px] tracking-wider'>4B 4B 2C | House</h2>
                    <h2 className='  text-[12px] tracking-wider text-gray-600'>Inspection Sat 30 Nov</h2>
                    <h1 className='mt-8 mb-2  text-[12px] tracking-wider'>Level Street to Water Masterpiece, Offering breath-taking views</h1>
                    <p className='property-description mt-8'>
                        {'"When designing this home, I focused on craftsmanship and durability. The Venetian plaster walls add texture, while the large windows were positioned to flood the interior with natural light and perfectly frame the waterfront views. The pool area was integrated into the design, with the surrounding stonework and glass balustrades enhancing the seamless flow between the home and the water. Every detail, from the lighting to the layout, was chosen to maximise the connection to the environment, blending indoor and outdoor living effortlessly." - Owner'}
                    </p>
                    <ReadMore>
                        {'"When designing this home, I focused on craftsmanship and durability. The Venetian plaster walls add texture, while the large windows were positioned to flood the interior with natural light and perfectly frame the waterfront views. The pool area was integrated into the design, with the surrounding stonework and glass balustrades enhancing the seamless flow between the home and the water. Every detail, from the lighting to the layout, was chosen to maximise the connection to the environment, blending indoor and outdoor living effortlessly." - Owner'}
                    </ReadMore>

                    <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Property Video</h1>
                    <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Location</h1>
                    <h1 className=' mb-2 font-semibold mt-8 text-[12px] tracking-wider'>Contact</h1>
                </div>
            </div>

        </div>
    )
}

export default page