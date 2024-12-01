
'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

const ChatComponent = () => {
    const router = useRouter();
    const handleFindClick = () => {
        router.push("/"); // Navigate to the home page
      };
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([
        {
            text: "Hi, let us know how we can help you. Otherwise, please click one of the categories below to get started.",
            sender: 'bot',
            animationClass: 'slide-in-left',
        },
    ]);

    // Create a ref for the message container to scroll to the bottom
    const messageContainerRef = useRef(null);

    // State for handling form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        estvalue: '',
        sellingreason: '',
    });

    const handleButtonClick = (message, animationClass, responseContent) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, sender: 'user', animationClass: '' },
        ]);

        if (message === 'Sell my Property') {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: "Great! Let’s get started. Please fill out the details below to continue.",
                    sender: 'bot',
                    animationClass: 'slide-in-left',
                    type: 'form', // Identifies that this message contains a form
                }
            ]);
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: responseContent.content, sender: 'bot', animationClass: 'slide-in-left', type: 'response' }
            ]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleButtonInputChange = (e) => {
        setInputText(e.target.value);
    };
    const handleTextSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim().toLowerCase() === "sell my property") {
            handleButtonClick("Sell my Property", 'slide-in-left', {
                title: 'Sell My Property',
                content: 'Provide your property details, and we’ll help you find the best deal.',
            });
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: inputText, sender: 'user', animationClass: '' },
            ]);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Sorry, I didn't understand that. Please click on one of the categories below.", sender: 'bot', animationClass: 'slide-in-left', type: 'response' }
            ]);
        }
        setInputText(''); // Clear input field after submit
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Thanks for sharing! Your details have been sent out to Imam Sayed at 0439474457, our local expert for your area. They'll reach out to you shortly to discuss your property and next steps. is there anything else I can help you with in the meantime?", sender: 'bot', animationClass: 'slide-in-left', type: 'response' }
        ]);
        // Here, you can handle the form submission logic, like sending data to an API
    };

    // Scroll to the bottom whenever messages are updated (this is the change)
    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight; // Scroll to the bottom
        }
    }, [messages]); // This will run every time messages are updated

    return (
        <>
            <div>
                <h1 className="text-center my-2"  onClick={handleFindClick}>Ausrealty</h1>

                {/* Set a fixed height and overflow to make the chat scrollable */}
                <div
                    ref={messageContainerRef}
                    className="text-start text-sm mt-16 w-80 h-[60vh] overflow-auto"
                >
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={message.sender === 'bot' ? 'text-left' : 'text-end'}
                        >
                            {/* Render the form separately from the messages */}
                            {message.type === 'form' ? (
                                <div className='my-2'>
                                    <div>
                                        <h2>Great lets get started. Just fill out a few quick details so we can connect you with the best agent in your area:</h2>
                                    </div>
                                    <div className="bg-[#F2F2F2] border p-4 rounded-lg my-3">
                                        <form onSubmit={handleFormSubmit}>
                                            <div className="space-y-4 mt-4">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm">
                                                        <h2>1. Your Name</h2>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Type here..."
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="border-2 rounded-md px-2 py-1 w-full bg-[#D9D9D9]"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="contact" className="block text-sm">
                                                        <h2>
                                                            2. Contact Number
                                                        </h2>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="contact"
                                                        name="contact"
                                                        placeholder="Type here..."
                                                        value={formData.contact}
                                                        onChange={handleInputChange}
                                                        className="border-2 rounded-md px-2 py-1 w-full bg-[#D9D9D9]"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm"><h2>3. Email Address</h2></label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Type here..."
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="border-2 rounded-md px-2 py-1 w-full bg-[#D9D9D9]"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="address" className="block text-sm"><h2>4. Property Address</h2></label>
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        name="address"
                                                        placeholder="Type here..."
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        className="border-2 rounded-md px-2 py-1 w-full bg-[#D9D9D9]"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="estvalue" className="block text-sm"><h2>5. Estimated Value or Recent Appraisal (if you have one)</h2></label>
                                                    <input
                                                        type="text"
                                                        id="estvalue"
                                                        name="estvalue"
                                                        placeholder="Type here..."
                                                        value={formData.estvalue}
                                                        onChange={handleInputChange}
                                                        className="border-2 rounded-md px-2 py-1 w-full bg-[#D9D9D9]"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="sellingreason" className="block text-sm"><h2>6. Reason for Selling (e.g. downsizing, realocating, etc.)</h2></label>
                                                    <input
                                                        type="text"
                                                        id="sellingreason"
                                                        name="sellingreason"
                                                        placeholder="Type here..."
                                                        value={formData.sellingreason}
                                                        onChange={handleInputChange}
                                                        className="border-2 rounded-md px-2 py-1 w-full bg-[#D9D9D9]"
                                                    />
                                                </div>
                                                <div className="flex justify-end mt-4">
                                                    <button type="submit" className="bg-black text-white py-1 px-3">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                // Render text messages
                                <div
                                    className={`my-2 ${message.animationClass} ${message.sender === 'user'
                                        ? 'bg-[#D9D9D9] text-black p-2 rounded-lg inline-block'
                                        : ''
                                        }`}
                                >
                                    <h2>{message.text}</h2>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 text-center p-4 bg-white">
            <form onSubmit={handleTextSubmit}>
                    <div className="flex justify-center border-2 rounded-full px-2 py-3 text-xs">
                        <input
                            type="text"
                            className="w-full mx-2 outline-none"
                            placeholder="Type here..."
                            value={inputText}
                            onChange={handleButtonInputChange}
                        />
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
                        className="border-2 py-3 px-2 pr-6 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Sell my Property', 'slide-in-left', {
                                title: 'Sell My Property',
                                content: 'Provide your property details, and we’ll help you find the best deal.',
                            })
                        }
                    >
                        <h1 className="text-sm">Sell my Property</h1>
                        <h2 className="text-[12px] mt-2 text-gray-600 normal-case">
                            See What your home is worth
                        </h2>
                    </button>
                    <button
                        className="border-2 py-3 px-2 pr-6 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Looking To Buy', 'slide-in-left', {
                                title: 'Looking to Buy',
                                content: 'Explore the latest properties we have available for purchase.',
                            })
                        }
                    >
                        <h1 className="text-sm">Looking To Buy</h1>
                        <h2 className="text-[12px] mt-2 text-gray-600">
                            See what properties we have available
                        </h2>
                    </button>
                    <button
                        className="border-2 py-3 px-2 pr-6 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Looking to lease', 'slide-in-left', {
                                title: 'Looking to Lease',
                                content: 'Discover properties available for lease and rental.',
                            })
                        }
                    >
                        <h1 className="text-sm">Looking to Lease</h1>
                        <h2 className="text-[12px] mt-2 text-gray-600">
                            See what rental properties are available
                        </h2>
                    </button>
                    <button
                        className="border-2 py-3 px-2 pr-6 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Moments from Home', 'slide-in-left', {
                                title: 'Moments from Home',
                                content: 'Discover moments from home.',
                            })
                        }
                    >
                        <h1 className="text-sm">Moments from Home</h1>
                    </button>
                    <button
                        className="border-2 py-3 px-2 pr-6 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Inside Ausrealty', 'slide-in-left', {
                                title: 'Inside Ausrealty',
                                content: 'Inside Ausrealty',
                            })
                        }
                    >
                        <h1 className="text-sm">Inside Ausrealty</h1>
                    </button>
                    <button
                        className="border-2 py-3 px-2 pr-8 border-black hover:text-black rounded-lg hover:bg-gray-200 hover:border-0 text-start flex-shrink-0"
                        onClick={() =>
                            handleButtonClick('Our People', 'slide-in-left', {
                                title: 'Our People',
                                content: 'Meet Our Incredible People.',
                            })
                        }
                    >
                        <h1 className="text-sm">Our People</h1>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ChatComponent;
