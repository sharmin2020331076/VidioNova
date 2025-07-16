export function SocialTools(){

    const platforms = [
    {
      icon: '/icon/i.png',
      title: 'Instagram Reels',
      description:
        'Transform Instagram Reels into engaging content by adding gameplay to captivate viewers.',
    },
    {
      icon: '/icon/t.png',
      title: 'Tiktok Videos',
      description:
        'Elevate your TikTok videos by adding gameplay to create captivating and entertaining content.',
    },
    {
      icon: '/icon/youtube.png',
      title: 'Youtube Shorts',
      description:
        'Enhance your YouTube Shorts by adding gameplay to create dynamic and engaging content.',
    },
    {
      icon: '/icon/fb.png',
      title: 'Facebook Reels',
      description:
        'Transform Facebook Reels into engaging content by adding gameplay to captivate viewers.',
    },
    {
      icon: '/icon/x.png',
      title: 'Twitter (X) videos',
      description:
        'Enhance your X videos by incorporating gameplay to grab attention and keep viewers hooked.',
    },
    {
      icon: '/icon/a.png',
      title: 'Thread Videos',
      description:
        'Boost your Thread videos with gameplay! Engaging visuals captivate viewers and enhance your content.',
    },
  ];
    return(
        <div className="relative w-full min-h-screen lg:pr-16 lg:pl-16 lf"> 

            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center">
                <div className="bg-white/20 rounded-full shadow-2xl p-2 flex items-center justify-betwen space-x-1">
                <hr className="border-1 border-[#C77DFF] w-3 shadow-[0_0_20px_5px_rgba(168,85,247,0.4)]"/>
                <span className="text-white font-semibold">Social Tools</span>
                <hr className="border-1 border-[#C77DFF] w-3 shadow-[0_0_20px_5px_rgba(168,85,247,0.4)]"/>
            </div>
            </div>

            <div className="flex items-center justify-center flex-col mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white flex flex-col items-center space-y-1">
                    Powerfull tool for
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                   boosting social media growth
                    </span>
                </h2>
            </div>

            <div className="flex items-center justify-center flex-col mb-14">
                <p className="text-center text-[17px] text-white/80">Produce a endless number of short videos simultaneously. Automatically</p>
                <p className="text-center text-[17px] text-white/80">captions, effects, backgrounds and music for you.</p>
                <div className="mt-6 flex items-center justify-center space-x-2 bg-gradient-to-t from-purple-400 to-pink-500 border-1 border-white/40  text-white rounded-full h-12 w-30 p-3 shadow-4xl hover:scale-105 transition duration-300 cursor-pointer">
                    <p className="font-bold">Try Now</p>
                <span className="font-bold">&gt;</span>
                </div>
            </div>
            </div>

        <section className="w-full">
        <div className="lg:pr-32 lg:pl-32 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {platforms.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 p-5 rounded-3xl border border-[#2b2b3d] hover:border-purple-500 transition duration-300 space-y-3"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6 opacity-80"
              />
              <h3 className="text-[19px] font-semibold text-white">{item.title}</h3>
              <p className="text-[17px] text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        </div>
    )
}