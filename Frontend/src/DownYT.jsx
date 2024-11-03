import React from 'react';

const DownYT = () => {
    return (
        <div className="bg-[#3500771e] backdrop-blur-sm p-8 rounded-lg shadow-lg mt-[100px] max-w-4xl mx-auto">
            <h1 className=" font-magra text-center text-purple-700  text-3xl mb-4">
                YOASOBI / Idol (「アイドル」English Ver.)
            </h1>

            <div className="flex flex-col mt-[50px] md:flex-row items-center md:items-start font-magra">
                {/* Thumbnail Section */}
                <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-8">
                    <img
                        src="https://via.placeholder.com/320x180"
                        alt="Video Thumbnail"
                        className="rounded-lg w-full md:w-80 h-auto"
                    />
                    <a
                        href="#"
                        className="mt-4 text-purple-700 font-medium flex items-center hover:underline"
                    >
                        <svg
                            className="w-5 h-5 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 3.293a1 1 0 011.414 1.414L7.414 11H12a1 1 0 110 2H5a1 1 0 01-1-1V7a1 1 0 112 0v4.586l6.293-6.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Watch on YouTube
                    </a>
                </div>

                {/* Download Quality Section */}
                <div className="flex-1 ml-[60px]">
                    <h2 className="text-gray-700 text-lg mb-4 ">
                        Choose Download Quality...
                    </h2>
                    <div className=" rounded-lg max-w-[400px]">
                        {/* Quality Options */}
                        {['240p', '480p', '720p', '1080p'].map((quality) => (
                            <div
                                key={quality}
                                className="flex justify-between items-center border-b last:border-b-0 border-black py-2"
                            >
                                <span className="text-gray-800">{quality}</span>
                                <span className="text-gray-600">mp4</span>
                                <button className="bg-light-Purple text-white text-sm  py-1 px-4 rounded-lg hover:bg-light-AlphaPurple transition">
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownYT;
