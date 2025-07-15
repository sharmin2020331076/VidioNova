
const testimonials = [
  {
    name: "A S M Sazid",
    role: "Social Media Influencer",
    image: "/pic/saz(1).jpg", // Replace with actual image paths
    feedback:
      "I've never seen a tool like this. Creating endless short videos is a breeze, and the auto-generated captions and effects are perfect. A must-have for social media!",
  },
  {
    name: "S A Juthi",
    role: "Youtube content creator",
    image: "/pic/Juthi.jpg",
    feedback:
      "Creating short videos is effortless with this tool. It handles everything from captions to music, delivering fantastic results. A game-changer for social media!",
  },
  {
    name: "S Y Jui",
    role: "Video marketing specialist",
    image: "/pic/Jui.jpg",
    feedback:
      "This tool surpassed my expectations. It seamlessly manages captions and music, letting me focus on content. Efficient and user-friendly—I absolutely love it!",
  },
];

export function Testimonial() {
  return (
    <section className="relative w-full min-h-screen text-white lg:pr-32 lg:pl-32 p-8 flex flex-col space-y-16 pt-38">
      <div className="flex flex-col space-y-6">
        <div className="flex lg:justify-start justify-center">
              <div className="bg-white/20 rounded-full shadow-2xl p-2 flex space-x-1 items-center">
                  <hr className="border-1 border-[#C77DFF] w-3"/>
                  <span className="text-white font-semibold">Testimonial</span>
                  <hr className="border-1 border-[#C77DFF] w-3"/>
              </div>
        </div>

        <div className="flex flex-col space-y-1">
            <p className="lg:text-start text-center text-3xl md:text-4xl lg:text-5xl font-bold">Our User Stories:</p>
            <p className="lg:text-start text-center text-3xl md:text-4xl lg:text-5xl font-bold ">
                How We Made an{' '}
                <span className="lg:text-start text-center text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-500">Impact</span></p>
        </div>

        <div className="flex flex-col">
            <p className="lg:text-start text-center text-[17px] text-white/80">Explore user stories that highlight how we amde a significant impact and</p>
            <p className="lg:text-start text-center text-[17px] text-white/80">transformed user experiences in meaningfulways.</p>
        </div>

      </div>

      <div className="text-center">
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-transparent border-t border-purple-600 pt-6">
              <p className="text-gray-300 mb-6">"{t.feedback}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
