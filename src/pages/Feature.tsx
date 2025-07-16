export function Feature(){
    return(
        <div className="relative w-full min-h-screen lg:pr-32 lg:pl-32 p-8 lg:pt-16 space-y-6 ">

            <div className="flex lg:justify-start justify-center">
            <div className="bg-white/20 rounded-full shadow-2xl p-2 flex space-x-1 items-center">
                <hr className="border-1 border-[#C77DFF] w-3"/>
                <span className="text-white font-semibold">Features</span>
                <hr className="border-1 border-[#C77DFF] w-3"/>
            </div>
            </div>

             <div className="flex flex-col text-center sm:text-start space-y-1">
                <p className="lg:text-start text-center text-3xl md:text-4xl lg:text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-[#ff03c0]">Your go-to tool for crafting</p>
                <p className="lg:text-start text-center text-3xl md:text-4xl lg:text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-l from-white to-[#f163ce]">
                viral Shorts Videos using AI.</p>
            </div>

             <div className="flex flex-col">
                <p className="lg:text-start text-center text-[17px] text-white/80">Produce a endless number of short videos simultaneously. Automatically</p>
                <p className="lg:text-start text-center text-[17px] text-white/80">captions, effects, backgrounds and music for you.</p>
             </div>

            
                {/* from-[#C77DFF] via-[#9D4EDD] to-[#5A189A] */}
                <div className="flex space-x-6 lg:justify-start justify-center">
                <div className="flex items-center justify-center space-x-2 bg-gradient-to-t from-purple-400 to-pink-500 border-1 border-white/40  text-white rounded-full h-12 w-30 p-3 shadow-4xl hover:scale-105 transition duration-300 cursor-pointer">
                    <p className="font-bold">Try Now</p>
                <span className="font-bold">&gt;</span>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-[#db0acd] via-[#a13bf6] to-[#c190f3] text-white rounded-full h-12 w-32 hover:scale-105 transition duration-300 cursor-pointer">
                   <div className="bg-black rounded-full h-11.5 w-31.5 flex items-center justify-center space-x-2">
                     <p className="font-bold">Learn More</p>
                    <span className="font-bold">&gt;</span>
                   </div>
                </div>
                </div>
        


            {/* Upper cards */}
            <div className="grid grid-col lg:grid-cols-3 gap-10 pt-10">
                {/* card 1 */}
                <div className="border-1 border-b-purple-500 border-r-purple-500 flex flex-col space-y-6 items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 rounded-2xl pr-8 pl-8 pt-4 pb-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gray-700 w-7 h-7 rounded-full p-1 flex items-center"><img src="/icon/music.png" alt="muisc" className="w-5 h-5"/></div>
                        <p className="bg-gray-700 text-white p-2 rounded-xl">Voice Background</p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <p className="bg-gradient-to-tl  from-purple-500 to-purple-700 text-white p-2 rounded-xl">Script Creation</p>
                        <div className="bg-gradient-to-tl from-purple-500 to-purple-700 w-7 h-7 rounded-full p-1 flex items-center"><img src="/icon/write.png" alt="muisc" className="w-5 h-5"/></div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="bg-gray-700 w-7 h-7 rounded-full p-1 flex items-center justify-center"><img src="/icon/voiceN.png" alt="muisc" className="w-4 h-4"/></div>
                        <p className="bg-gray-700 text-white p-2 rounded-xl">Voice Narrator</p>
                    </div>
                </div>

                {/* card2 */}
                <div className="flex items-center flex-col space-y-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 rounded-2xl border-1 border-b-purple-500 border-r-purple-500 pr-8 pl-8 pt-8 pb-4">

                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-700 flex items-center justify-center shadow-[0_0_20px_5px_rgba(168,85,247,0.4)]">
                    <img
                    src="/icon/sparkling.png" 
                    alt="Star icon"
                    className="w-8 h-9 object-contain"
                    />
                </div>

                {/* Text with gradient highlight */}
                <h2 className="text-lg font-semibold text-white">
                    Your AI-powered video{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    creator
                    </span>
                </h2>

                {/* Decorative gradient lines (optional) */}
                <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
                <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-10" />
                </div>

                {/* card3 */}
        <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 rounded-2xl border-1 border-b-purple-500 border-r-purple-500">
            <div className="flex space-x-3">
                <img
                src="/pic/bg1.jpg"
                alt="Background 1"
                className="w-16 h-24 object-cover rounded-md border-2 border-transparent opacity-80"
                />
                <img
                src="/pic/bg2.jpg"
                alt="Background 2"
                className="w-16 h-24 object-cover rounded-md border-2 border-purple-500 scale-105"
                />
                <img
                src="/pic/bg3.jpg"
                alt="Background 3"
                className="w-16 h-24 object-cover rounded-md border-2 border-transparent opacity-80"
                />
            </div>

            {/* Text Section */}
            <div>
                <h3 className="text-sm text-white font-semibold mt-1">Video Background</h3>
                <p className="text-xs text-gray-400 mt-1">
                Choose an AI-generated custom video template from our library.</p>
            </div>
            </div>
            </div>
        </div>
    )
}