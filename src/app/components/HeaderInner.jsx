'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image'
import React from 'react'

const HeaderInner = () => {
    const router = useRouter();
    const handleFindClick = () => {
        router.push("/chat"); 
    };
    const handleFindClickHome = () => {
        router.push("/"); 
    };
    

    return (
        <div className="fixed top-0 py-2 z-10 left-0 right-0 bg-white">
            <div className='flex justify-between items-center mb-2 mx-6'>
                <Image onClick={handleFindClick} src={'/assets/back.png'} alt='<' className="w-2 h-3" width={2} height={1}  />
                <h1 onClick={handleFindClickHome}>Ausrealty</h1>
                <h1></h1>
            </div>
        </div>
    )
}

export default HeaderInner