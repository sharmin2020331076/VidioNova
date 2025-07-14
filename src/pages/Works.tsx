import { useState } from "react";

export function Works(){

      const [isOpen, setIsOpen] = useState(false);
    
      const toggleDropdown = () => setIsOpen(prev => !prev);

    return(
        <div className="relative w-full min-h-screen lg:pr-32 lg:pl-32 lg:pt-32 p-8">
                <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full shadow-2xl p-2 flex items-center justify-between space-x-1">
                <hr className="border-1 border-[#C77DFF] w-3"/>
                <span className="text-white font-semibold">How It Works</span>
                <hr className="border-1 border-[#C77DFF] w-3"/>
                
            </div>
            </div>

            <div className="flex items-center justify-center flex-col mb-6">
                <p className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-[#ff03c0]">Turn ideas into</p>
                <p className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-l from-white  to-[#ff03c0]">
                    short videos in seconds</p>
            </div>

            <div className="flex items-center justify-center flex-col mb-14">
                <p className=" text-[17px] text-white/80">Produce endless short videos instantly. Automatically generate</p>
                <p className="text-[17px] text-white/80">captions, effects, backgrounds and music.</p>
            </div>

            {/*cards */}
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 gap-6">

                {/* first card */}
                <div className="felx flex-col rounded-2xl bg-gradient-to-t from-gray-900 to-gray-800 text-white p-6 space-y-8">

                   <div className="flex flex-col space-y-2">
                    <p>Enter your story topic</p>
                   <input
                    type="text"
                    placeholder="Enter your story..."
                    className=" text-sm w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                   </div>
                    

                   
                   <div className="flex flex-col space-y-2">
                        <p>Select story tone</p>
                   <div className="text-sm text-gray-400 flex flex-wrap justify-between p-1 rounded-xl bg-gradient-to-r border-1 border-gray-500 from-gray-800 via-purple-700 to-gray-800">
                    <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                        <p>Funny</p>
                        <img src="/icon/close.png" className="w-2 h-2"/>
                    </div>
                    <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                        <p>Funny</p>
                        <img src="/icon/close.png" className="w-2 h-2"/>
                    </div>
                    <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                        <p>Funny</p>
                        <img src="/icon/close.png" className="w-2 h-2"/>
                    </div>
                    <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                        <p>Fairy</p>
                        <img src="/icon/close.png" className="w-2 h-2"/>
                    </div>
                    <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                        <p>Lullaby</p>
                        <img src="/icon/close.png" className="w-2 h-2"/>
                    </div>
                   </div>
                   </div>


                  <div className="flex flex-col space-y-2">
                     <p>Max Words</p>
                   <input
                    type="text"
                    placeholder="500 words"
                    className="text-sm w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                  </div>

                   <div className="flex flex-col space-y-2">
                    <h1 className="font-semibold">Step 1.Write & Outline</h1>
                    <p className="text-gray-300 text-sm">Kick off by crafting a script with a prompt or by choosing from available template suggestions.</p>
                   </div>
                </div>

                {/* second card */}
                <div className="felx flex-col rounded-2xl bg-gradient-to-t from-gray-900 to-gray-800 text-white p-6 space-y-8">
                   <div className="flex flex-col space-y-2">
                     <h1 className="">Video Orientation</h1>
                    
                      {/* Dropdown Button */}
                    <div className="text-left flex items-center justify-center ">
               <button
                    onClick={toggleDropdown}
                    className="flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-gray-300 cursor-pointer"
                >
                    Select video types
                    <svg
                    className="-mr-1 ml-2 h-5 w-5"
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
                    <div className="absolute mt-2 rounded-md backdrop-blur-2xl shadow-lg ring-1 ring-amber-50 bg-gray-700">
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
                   </div>


                    <div className="flex flex-col space-y-2">
                        <h1 className="font-semibold">Select Background</h1>
                        <div className="flex flex-wrap space-x-4 space-y-4">
                            <img src="/pic/pic1.jpg" alt="" className="w-15 h-20"/>
                            <img src="/pic/pic2.jpg" alt="" className="w-15 h-20"/>
                            <img src="/pic/pic3.jpg" alt="" className="w-15 h-20"/>
                            <img src="/pic/pic4.jpg" alt="" className="w-15 h-20"/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p>Select Background Sound</p>
                    <div className="text-sm text-gray-400 border-1 border-gray-500 p-1 rounded-xl flex flex-wrap gap-2">
                            <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                            <p>Beach Mermaid</p>
                            <div className="border-1 rounded-full h-3 w-3 flex items-center justify-center"><img src="/icon/close.png" className="w-2 h-2"/></div>
                        </div>

                        <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                            <p>Deep Ocean</p>
                            <div className="border-1 rounded-full h-3 w-3 flex items-center justify-center"><img src="/icon/close.png" className="w-2 h-2"/></div>
                        </div>
                        
                        <div className="cursor-pointer flex space-x-1 items-center border-1 border-gray-400 backdrop-blur-xl rounded-xl pr-2 pl-2 pt-1 pb-1">
                            <p>Deep Ocean</p>
                            <div className="border-1 rounded-full h-3 w-3 flex items-center justify-center"><img src="/icon/close.png" className="w-2 h-2"/></div>
                        </div>
                    </div>

                    </div>
                    <div className="flex flex-col space-y-2">
                    <h1 className="font-semibold">Step 2: Customise & Style</h1>
                    <p className="text-gray-300 text-sm">Select orientation and pick a background scene and music from free templates.</p>
                   </div>
                        
                    </div>

                        {/* rounded circled icon */}
                    
                    <div className="text-white bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl p-6">
                        <div className="flex items-center justify-center pt-10">
                            <div className="flex items-center justify-center bg-gray-700 rounded-full w-50 h-50">
                            <div className="flex items-center justify-center bg-gray-600 rounded-full w-40 h-40">
                            <div className="flex items-center justify-center bg-gray-700 rounded-full w-30 h-30">
                            <div className="bg-white rounded-full h-18 w-18 flex items-center justify-center">
                            <img src="/icon/star (1).png" alt="" className="h-15 w-15"/></div></div></div></div>
                        </div>

                    <div className="flex flex-col space-y-2">
                    <h1 className="font-semibold">Step 3: Finish & Export</h1>
                    <p className="text-gray-300 text-sm">Select the export format and download the generated videos, script, or narration.</p>
                   </div>
                    </div>
                
                    
                </div>

                
            </div>
    )
}