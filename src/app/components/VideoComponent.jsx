'use client';
import { useRouter } from "next/navigation";

const VideoComponent = () => {
    const router = useRouter();
    const handleFindClick = () => {
        router.push("/chat");
    };

    return (
        <div className="flex flex-col justify-between items-center max-h-screen px-4">
            <video autoPlay loop muted className="max-w-full max-h-[90vh]" controls={false} playsInline>
                <source src="/assets/homevideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="flex justify-end w-full">
                <button
                    className="main-cta grow mx-5 text-center font-extralight"
                    onClick={handleFindClick}
                >
                    FIND WHAT YOU NEED
                </button>
            </div>
        </div>
    );
};

export default VideoComponent;
