
export function Tail(){
    return(
        <div className="lg:pr-32 lg:pl-32 p-8 w-full mb-16">
            <div className="flex flex-col rounded-2xl pt-8 pb-8 bg-gradient-to-br from-[#3a235d] via-[#1f1a2e] to-[#5b2d91] backdrop-blur-md bg-opacity-60 shadow-2xl text-center space-y-10">
            <div className="flex flex-col space-y-6">
                <h1 className="text-5xl font-bold text-white">
                Experience the{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Magic
          </span></h1>

         <div className="flex flex-col space-y-1">
             <p className="text-gray-200">Create endless short videos simultaneously with automatic</p>
          <p className="text-gray-200">captions, effects, backgrounds and music for you.</p></div> 

            </div>
          
          <div className="flex items-center justify-center space-x-6">
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
            

            </div>
        </div>
        
    )
}