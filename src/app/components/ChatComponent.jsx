'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import PropertyListings from './PropertyListings';
import FilterModal from './FilterModal';

const ChatComponent = () => {
    const router = useRouter();
    const handleFindClick = () => {
        router.push("/");
    };
    const [inputText, setInputText] = useState('');
    const [showPropertyListings, setShowPropertyListings] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    
    const [messages, setMessages] = useState([
        {
            text: "Hi, let us know how we can help you. Otherwise, please click one of the categories below to get started.",
            sender: 'bot',
            animationClass: 'slide-in-left',
        },
    ]);

    const messageContainerRef = useRef(null);
    const propertyListingsRef = useRef(null);
    const latestMessageRef = useRef(null);
 
    const [sellFormData, setSellFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        estvalue: '',
        sellingreason: '',
    });
    const [buyFormData, setBuyFormData] = useState({
        suburb: '',
        pricerange: '',
        bedrooms: '',
        mushaves: '',
    });

    const handleButtonClick = (message, animationClass, responseContent) => {
     
        setMessages([
            { text: message, sender: 'user', animationClass: 'slide-in-right' }, // User's message
        ]);
        
        setShowPropertyListings(false);
        if (message === 'Sell my Property') {
            
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: "Great! Let’s get started. Please fill out the details below to continue.",
                    sender: 'bot',
                    animationClass: 'slide-in-left',
                    type: 'form', 
                    formType: 'sell',
                },
            ]);
        } else if (message === 'Looking To Buy') {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: "Great! Let’s get started with your property search. Please fill out the details below to help us understand your preferences.",
                    sender: 'bot',
                    animationClass: 'slide-in-left',
                    type: 'form',
                    formType: 'buy',
                },
            ]);
            setShowPropertyListings(false);
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: responseContent.content, sender: 'bot', animationClass: 'slide-in-left', type: 'response' },
            ]);
        }
    };


    const handleFormChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === 'sell') {
            
            setSellFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else if (formType === 'buy') {
            setBuyFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            
        }
    };
    const handleButtonInputChange = (e) => {
        setInputText(e.target.value);
       
    };

    //changes to be made
    const handleTextSubmit = (e) => {
        e.preventDefault();
        const userInput = inputText.trim().toLowerCase();
        if (!userInput) return; 
    
        const propertyKeywords = ["property", "properties", "listing", "houses", "homes"];
        const locationMarkers = ["in", "around", "near", "nearby", "area", "region", "on"];
        const sellKeywords = ["sell my property", "looking to sell"];
        const buyKeywords = ["looking to buy", "buy a property"];
    
        let extractedLocation = null;
        let extractedStreet = null;
    
        
        if (buyKeywords.some((phrase) => userInput.includes(phrase))) {
            handleButtonClick("Looking To Buy", 'slide-in-left', {
                title: 'Looking to Buy',
                content: 'Explore the latest properties we have available for purchase.',
            });
            setInputText('');
            return;
        }
    
       
        const suburbFromForm = buyFormData.suburb.trim().toLowerCase();
        if (suburbFromForm) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: inputText, sender: 'user', animationClass: '' },
                { text: `Searching for properties in "${suburbFromForm}"...`, sender: 'bot', animationClass: 'slide-in-left' },
            ]);
            setSearchQuery(suburbFromForm); 
        } else {
            
            let cleanedInput = userInput
                .split(' ')
                .filter(word => !locationMarkers.includes(word) && !propertyKeywords.includes(word) && word !== 'looking' && word !== 'for' && word !== 'a')
                .join(' ');
    
            if (!cleanedInput) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: inputText, sender: 'user', animationClass: 'slide-in-right' },
                    { text: `Sorry, I didn't understand that. Please click one of the categories below.`, sender: 'bot', animationClass: 'slide-in-left', type: 'response' },
                ]);
                setInputText('');
                return;
            }
    
            const streetRegex = new RegExp('([a-zA-Z0-9\\s]+)', 'i');
            const locationRegex = new RegExp(`(?:${locationMarkers.join('|')})\\s+(the\\s+)?([a-z\\s]+)`, 'i');
    
            const locationMatch = cleanedInput.match(locationRegex);
            const streetMatch = cleanedInput.match(streetRegex);
    
            if (streetMatch && streetMatch[1]) {
                extractedStreet = streetMatch[1].trim();
            } else if (locationMatch) {
                extractedLocation = locationMatch[2].trim();
            }
    
            if (extractedStreet) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: inputText, sender: 'user', animationClass: '' },
                    { text: `Searching for properties on street: "${extractedStreet}"...`, sender: 'bot', animationClass: 'slide-in-left' },
                ]);
                setSearchQuery(extractedStreet);
            } else if (extractedLocation) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: inputText, sender: 'user', animationClass: '' },
                    { text: `Searching for properties in "${extractedLocation}"...`, sender: 'bot', animationClass: 'slide-in-left' },
                ]);
                setSearchQuery(extractedLocation);
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: inputText, sender: 'user', animationClass: '' },
                    { text: `Sorry, I didn't understand that. Please click one of the categories below.`, sender: 'bot', animationClass: 'slide-in-left', type: 'response' },
                ]);
            }
        }
    
        setInputText(''); 
    };
    

    const handleFormSubmit = (e, formType) => {
        e.preventDefault();
    
        let formData = formType === 'sell' ? sellFormData : buyFormData;
    
        if (formType === 'sell') {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Thanks for sharing! Your details have been sent out to Imam Sayed at 0439474457, our local expert for your area. They'll reach out to you shortly to discuss your property and next steps. Is there anything else I can help you with in the meantime?", sender: 'bot', animationClass: 'slide-in-left', type: 'response' }
            ]);
        } else if (formType === 'buy') {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Searching for desired results...", sender: 'bot', animationClass: 'slide-in-left', type: 'response' }
            ]);
          
            const suburb = buyFormData.suburb.trim().toLowerCase();
            if (suburb) {
                setSearchQuery(suburb); 
            } else {
                setSearchQuery('all'); // Show all properties if the suburb is not provided
            }
    
            setShowPropertyListings(true);
        }
    };
    
    useEffect(() => {
        if (latestMessageRef.current) {
            latestMessageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
    
            const container = latestMessageRef.current.closest('.messages-container');
            if (container) {
                setTimeout(() => {
                    const additionalScrollAmount = 250;
                    const maxScroll = container.scrollHeight - container.clientHeight;
                    container.scrollTop = Math.min(container.scrollTop + additionalScrollAmount, maxScroll);
                }, 300);
            }
        }
    }, [messages]);
    
    useEffect(() => {
        if (showPropertyListings && propertyListingsRef.current) {
            propertyListingsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [showPropertyListings]);
    
    return (
        <>
            <div>
                <h1 className="text-center my-2" onClick={handleFindClick}>Ausrealty</h1>
                <div ref={messageContainerRef} className=" h-[70vh] overflow-auto">
                    <div className='mx-8 text-start text-sm mt-5 w-72 '>
                        {messages.map((message, index) => (
                            <div key={index} className={message.sender === 'bot' ? 'text-left' : 'text-end'}>
                                {message.type === 'form' ? (
                                    <div ref={latestMessageRef} className='my-2'>
                                        <div className='w-64 text-xs'>
                                            <h2 className='slide-in-left'>{message.formType === 'sell' ? 'Great lets get started. Just fill out a few quick details so we can connect you with the best agent in your area:' : 'Great! Lets get started. Just fill out a few quick details so we can connect you with the best properties. Otherwise, message us over what you are looking for and we will show you what we have to offer.'}</h2>
                                        </div>
                                        <div className="bg-[#F2F2F2] p-4 rounded-lg my-3 w-64 text-xs slide-in-left">
                                            <form onSubmit={(e) => handleFormSubmit(e, message.formType)}>
                                                <div className="space-y-4 mt-2 px-2">
                                                    {message.formType === 'sell' ? (
                                                        <>
                                                            {/* Sell Property Form Fields */}
                                                            <div>
                                                                <label htmlFor="name" className="block text-sm">
                                                                    <h2 className='text-xs mb-1'>
                                                                        1. Your Name
                                                                    </h2>
                                                                </label>
                                                                <input type="text" id="name" name="name" placeholder="Type here..." value={sellFormData.name} onChange={(e) => handleFormChange(e, 'sell')} className="rounded-sm px-2 outline-none ml-2 w-full bg-[#D9D9D9]" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="contact" className="block text-sm"><h2 className='text-xs mb-1'>2. Contact Number</h2></label>
                                                                <input type="number" id="contact" name="contact" placeholder="Type here..." value={sellFormData.contact} onChange={(e) => handleFormChange(e, 'sell')} className="rounded-sm px-2 outline-none ml-2 w-full bg-[#D9D9D9]" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="email" className="block text-sm"><h2 className='text-xs mb-1'>3. Email Address</h2></label>
                                                                <input type="email" id="email" name="email" placeholder="Type here..." value={sellFormData.email} onChange={(e) => handleFormChange(e, 'sell')} className="rounded-sm px-2 outline-none ml-2 w-full bg-[#D9D9D9]" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="address" className="block text-sm"><h2 className='text-xs mb-1'>4. Property Address</h2></label>
                                                                <input type="text" id="address" name="address" placeholder="Type here..." value={sellFormData.address} onChange={(e) => handleFormChange(e, 'sell')} className="rounded-sm px-2 outline-none ml-2 w-full bg-[#D9D9D9]" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="estvalue" className="block text-sm"><h2 className='text-xs mb-1'>5. Estimated Value or Recent Appraisal</h2></label>
                                                                <input type="text" id="estvalue" name="estvalue" placeholder="Type here..." value={sellFormData.estvalue} onChange={(e) => handleFormChange(e, 'sell')} className="rounded-sm px-2 outline-none ml-2 w-full bg-[#D9D9D9]" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="sellingreason" className="block text-sm"><h2 className='text-xs mb-1'>6. Reason for Selling</h2></label>
                                                                <input type="text" id="sellingreason" name="sellingreason" placeholder="Type here..." value={sellFormData.sellingreason} onChange={(e) => handleFormChange(e, 'sell')} className="rounded-sm px-2 outline-none ml-2 w-full bg-[#D9D9D9]" />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {/* Buy Property Form Fields */}
                                                            <div>
                                                                <label htmlFor="suburb" className="block text-sm"><h2 className='text-xs mb-1'>1. Preferred Suburb (s)</h2></label>
                                                                <input type="text" id="suburb" name="suburb" placeholder="Type here..." value={buyFormData.suburb} onChange={(e) => handleFormChange(e, 'buy')} className="rounded-sm px-2 outline-none ml-2 w-full bg-white" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="pricerange" className="block text-sm"><h2 className='text-xs mb-1'>2. Price Range</h2></label>
                                                                <input type="text" id="pricerange" name="pricerange" placeholder="Type here..." value={buyFormData.pricerange} onChange={(e) => handleFormChange(e, 'buy')} className="rounded-sm px-2 outline-none ml-2 w-full bg-white" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="bedrooms" className="block text-sm"><h2 className='text-xs mb-1'>3. Number of Bedrooms</h2></label>
                                                                <input type="text" id="bedrooms" name="bedrooms" placeholder="Type here..." value={buyFormData.bedrooms} onChange={(e) => handleFormChange(e, 'buy')} className="rounded-sm px-2 outline-none ml-2 w-full bg-white" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="mushaves" className="block text-sm"><h2 className='text-xs mb-1'>4. Must-Haves</h2></label>
                                                                <input type="text" id="mushaves" name="mushaves" placeholder="Type here..." value={buyFormData.mushaves} onChange={(e) => handleFormChange(e, 'buy')} className="rounded-sm px-2 outline-none ml-2 w-full bg-white" />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="flex justify-end mt-4">
                                                        <button type="submit" className="bg-black text-white py-1 px-3">
                                                            <h1 className='text-[10px] font-extralight '>Submit</h1>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                ) : (
                                    <div
                                        className={`my-2 ${message.animationClass} ${message.sender === 'user'
                                            ? 'bg-[#D9D9D9] text-black py-2 px-4 rounded-sm text-xs  inline-block tracking-wider'
                                            : 'w-72 text-xs'
                                            }`}
                                    >
                                        <h2>{message.text}</h2>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="my-4 w-full mx-0 slide-in-left" ref={propertyListingsRef} >
                        {showPropertyListings && <PropertyListings searchQuery={searchQuery} />}
                    </div>
                    {/* <div className='my-4 w-full mx-0' >
                        {showBuyComponent && <PropertyListings />}
                    </div> */}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 text-center p-4 bg-white">
                <form onSubmit={handleTextSubmit}>
                    <div className="flex justify-center items-center w-full gap-4 border-2 rounded-full px-2 py-3 text-xs">
                        <input
                            type="text"
                            className="w-full mx-2 outline-none"
                            placeholder="Type here..."
                            value={inputText}
                            onChange={handleButtonInputChange}
                        />
                        <div>
                           
                        </div>
                        <button type="submit">
                            <Image
                                src={'/assets/sendbtn.png'}
                                alt="Send"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </form>

                <div className="flex justify-start gap-6 mt-4 overflow-x-auto scrollbar-hidden">
                    <button
                        className="border py-2 px-3 pr-8 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Sell my Property', 'slide-in-left', {
                                title: 'Sell My Property',
                                content: 'Provide your property details, and we’ll help you find the best deal.',
                            })
                        }
                    >
                        <h1 className="text-[12px] font-semibold tracking-wider">Sell</h1>
                        <h2 className="text-[12px] mt-1 text-gray-600 font-light tracking-wider">
                            See What your home is worth
                        </h2>
                    </button>
                    <button
                        className="border py-2 px-3 pr-6 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Looking To Buy', 'slide-in-left', {
                                title: 'Looking to Buy',
                                content: 'Explore the latest properties we have available for purchase.',
                            })
                        }
                    >
                        <h1 className="text-[12px] font-semibold tracking-wider">Buy</h1>
                        <h2 className="text-[12px] mt-1 text-gray-600 font-light tracking-wider">
                            See what properties we have available
                        </h2>
                    </button>
                    <button
                        className="border py-2 px-3 pr-8 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Looking to lease', 'slide-in-left', {
                                title: 'Looking to Lease',
                                content: 'Explore our properties for rent.',
                            })
                        }
                    >
                        <h1 className="text-[12px] font-semibold tracking-wider">Lease</h1>
                        <h2 className="text-[12px] mt-1 text-gray-600 font-light tracking-wider">
                            See what rental properties are available
                        </h2>
                    </button>
                    <button
                        className="border py-2 px-3 pr-12 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Moments from Home', 'slide-in-left', {
                                title: 'Moments from Home',
                                content: 'Discover moments from home.',
                            })
                        }
                    >
                        <h1 className="text-[12px] font-semibold tracking-wider">Moments from Home</h1>
                    </button>
                    <button
                        className="border py-2 px-3 pr-12 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Inside Ausrealty', 'slide-in-left', {
                                title: 'Inside Ausrealty',
                                content: 'Inside Ausrealty',
                            })
                        }
                    >
                        <h1 className="text-[12px] font-semibold tracking-wider">Inside Ausrealty</h1>
                    </button>
                    <button
                        className="border py-2 px-3 pr-12 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Our People', 'slide-in-left', {
                                title: 'Our People',
                                content: 'Meet Our Incredible People.',
                            })
                        }
                    >
                        <h1 className="text-[12px] font-semibold tracking-wider">Our People</h1>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ChatComponent;
