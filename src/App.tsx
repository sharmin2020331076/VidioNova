import { Navbar } from "./components/Navbar";
import { Feature } from "./pages/Feature";
import { Hero } from "./pages/Hero";
import { SocialTools } from "./pages/SocialTools";
import { Tail } from "./pages/Tail";
import { Testimonial } from "./pages/Testimonial";
import { Works } from "./pages/Works";

function App() {
  return (
   
     <div className="relative min-h-screen w-full bg-gradient-to-br from-[#35015e] via-black to-black overflow-hidden ">
  <div className="absolute inset-0 z-0">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${1 + Math.random() * 2}s`,
        }}
      />
    ))}
  </div>

  {/*pages*/}
  <Navbar/>
  <Hero/>
   <Works/>
   <Feature/>
   <SocialTools/>
   <Testimonial/>
   <Tail/>
   
   
  
</div>

  );
}

export default App;
