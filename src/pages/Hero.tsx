import { useState } from "react";

export function Hero(){

    const [isOpen, setIsOpen] = useState(false);
    
      const toggleDropdown = () => setIsOpen(prev => !prev);
    return(
        <div className="w-full min-h-screen pt-40 relative z-10">
            <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full shadow-2xl p-2 flex items-center justify-between space-x-1">
                <hr className="border-1 border-[#C77DFF] w-3"/>
                <span className="text-white font-semibold">Unlock Your Creative Potential</span>
                <hr className="border-1 border-[#C77DFF] w-3"/>
               </div>
            </div>

            <div className="text-center flex items-center justify-center flex-col mb-6">
                <p className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-[#ff03c0]">Fastest & Easiest Way </p>
                <p className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-l from-white to-[#ff03c0]">
                    to Generate Short Videos</p>
            </div>

           <div className="flex items-center justify-center flex-col">
             <div className="flex items-center justify-center flex-col">
                <p className=" text-[17px] text-white/80">Generate unlimited short videos at once with automatic</p>
                <p className="text-[17px] text-white/80">captions, effects, backgrounds and music.</p>
            </div>

             <div className="mt-6 flex items-center justify-center space-x-2 bg-gradient-to-t bg-gradient-to-t from-purple-400 to-pink-500 border-1 border-white/40  text-white rounded-full h-12 w-30 p-3 shadow-4xl hover:scale-105 transition duration-300 cursor-pointer">
                    <p className="font-bold">Try Now</p>
                <span className="font-bold">&gt;</span>
                </div>
           </div>

           
           <div className="flex w-full items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-4 p-8 lg:w-9/10 w-full ">
                    

                <div className="flex flex-col space-y-6 bg-gradient-to-t from-gray-900 to-gray-800 backdrop-blur-2xl rounded-4xl  pt-6 lg:w-2/5 w-full">
                    <div className="flex space-x-4 items-center justify-center">
                    <div ><img src="/icon/sparkler.png" alt="sparkle" className="w-7 h-7"/></div>
                    <h1 className="text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff03c0] font-bold">Turn Your Text into Video</h1>
                    </div>
                    
                <div className="text-left flex items-center justify-center pr-6 pl-6 pt-4">
                {/* Dropdown Button */}
               
                    <button
                    onClick={toggleDropdown}
                    className="text-[17px] flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-gray-300 cursor-pointer"
                >
                    Select video types
                    <svg
                    className="-mr-1 ml-2 h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
               

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 rounded-md backdrop-blur-2xl shadow-lg ring-1 ring-amber-50 bg-gray-700">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <a
                        href="#"
                        className="block px-6 py-2 text-sm text-gray-100 hover:bg-gray-900 hover:text-gray-100"
                        role="menuitem"
                        >
                        I want explainer video
                        </a>
                        <a
                        href="#"
                        className="block px-6 py-2 text-sm text-gray-100 hover:bg-gray-900 hover:text-gray-100"
                        role="menuitem"
                        >
                        Video Background replacement
                        </a>
                        <a
                        href="#"
                        className="block px-6 py-2 text-sm text-gray-100 hover:bg-gray-900 hover:text-gray-100"
                        role="menuitem"
                        >
                        Multi-camera editing
                        </a>
                    </div>
                    </div>
                )}</div>

                    <div className="p-6 space-y-6 flex flex-col items-center text-gray-100 h-full">
                        <div className="font-semibold w-full flex justify-start pl-1 text-[22px]">Write your #prompt in your language </div>
                    <div className="bg-gray-700 p-6 rounded-md text-[17px]">Write landing page content for a modern, AI-powered video editing app called VidGenius. The app should appeal to content creators, marketers, and social media influencers. The tone should be bold, creative, and user-friendly. Highlight key features like auto-editing, smart transitions, drag-and-drop interface, stock media access, and export to multiple platforms. Include a hero headline, a subheadline, a short feature section with icons, and a strong call-to-action button.</div>
                    
                    <button className="text-[17px] flex items-center justify-center space-x-2 w-full border-1 border-gray-500 bg-black rounded-full pt-2 pb-2 pl-4 pr-4  hover:scale-110">
                        <img src="/icon/generate.png" alt="ic"  className="h-4 w-4"/>
                       <h1>Generate</h1> </button>
                    </div>

                </div>

                <div className=" text-white flex flex-col space-y-2 lg:w-1/2 w-full">
                    <div className="bg-gradient-to-t from-gray-900 to-gray-800 backdrop-blur-2xl rounded-4xl text-white flex flex-col lg:flex-row p-4 gap-2 h-3/5
                     ">
                       
                     <img src="/pic/img4 (2).jpg" alt="image1" className="rounded-2xl lg:w-1/2 w-full h-full" />
                     <img src="/pic/img4 (2).jpg" alt="image1" className="rounded-2xl lg:w-1/2 w-full h-full" />
                        {/* <div className="flex flex-col lg:w-1/2 w-full space-y-4 h-full">
                            <img src="/pic/img1 (1).jpg" alt="image2" className="rounded-4xl h-1/2"/>
                            <img src="/pic/img3 (1).jpg" alt="image1" className="rounded-4xl h-1/2"/> 
                        </div> */}
                    </div>
                    <div className="h-2/5 bg-gradient-to-t from-gray-900 to-gray-800 backdrop-blur-2xl rounded-4xl text-white p-2 w-full">
                        <img src="/pic/sw3.png" className="w-full h-full"></img>
                    </div>
                </div>
                <div className="border-1 border-gray-500 rounded-4xl text-white flex lg:flex-col flex-row lg:space-x-0 space-x-6 lg:space-y-6 items-center justify-center p-4 w-full lg:w-1/10">
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/equalizer.png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/layers (1).png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/letter-type-interface-symbol.png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/link.png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/keyframe.png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/scissors.png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                    <div className="border-1 rounded-2xl w-12 h-12 flex items-center justify-center"><img src="/icon/magic-wand (1).png" alt="" className="h-6 w-6 filter invert brightness-0"/></div>
                </div>
            </div></div>

                <div className="flex w-full items-center justify-center">
                    <div className="p-8 border-1 w-full lg:w-7/10 border-gray-500 rounded-full flex items-center justify-between space-x-10 h-10">
                    <div className="flex items-center space-x-2">
                        <img src="/icon/voice.png" alt="" className="h-4 w-4"/>
                        <div className="text-white">AI Voice</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src="/icon/background.png" alt="" className="h-4 w-4"/>
                        <div className="text-white">AI Backgrounds</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src="/icon/script.png" alt="" className="h-4 w-4"/>
                        <div className="text-white">AI Script Generator</div>
                    </div>
                   
                </div>
                </div>
        </div>
    )
}