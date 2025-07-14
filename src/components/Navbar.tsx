export function Navbar() {
  return (
    <div className="fixed w-full h-20 pt-8 pr-16 pl-16 z-50">
      <div className="flex items-center justify-between">

        <ul className="bg-white/20 rounded-full shadow-2xl p-1 flex items-center justify-between space-x-6">
          <li>
            <span className="bg-white rounded-full flex items-center h-10 w-10 justify-center">
               <img src="/icon/star.png" alt="" className="w-6 h-6" />
            </span>
          </li>
          <li>
            <span className="text-white font-semibold bg-gradient-to-t from-white/30 to-white/10 border-1 border-white/40 rounded-3xl flex items-center justify-center p-2 hover:bg-gradient-to-t hover:from-[#C77DFF] hover:via-[#9D4EDD] hover:to-[#5A189A] hover:scale-105 hover:border-0 cursor-pointer">Pricing</span>
          </li>
          <li><span className="text-white font-semibold bg-gradient-to-t from-white/30 to-white/10 border-1 border-white/40 rounded-3xl flex items-center justify-center p-2 hover:bg-gradient-to-t hover:from-[#C77DFF] hover:via-[#9D4EDD] hover:to-[#5A189A] hover:scale-105 hover:border-0 cursor-pointer">
            Insights</span></li>
          <li><span className="text-white font-semibold bg-gradient-to-t from-white/30 to-white/10 border-1 border-white/40 rounded-3xl flex items-center justify-center p-2 hover:bg-gradient-to-t hover:from-[#C77DFF] hover:via-[#9D4EDD] hover:to-[#5A189A] hover:scale-105 hover:border-0 cursor-pointer">
            Affiliates</span></li>
          <li><span className="text-white font-semibold bg-gradient-to-t from-white/30 to-white/10 border-1 border-white/40 rounded-3xl flex items-center justify-center p-2 hover:bg-gradient-to-t hover:from-[#C77DFF] hover:via-[#9D4EDD] hover:to-[#5A189A] hover:scale-105 hover:border-0 cursor-pointer">
            Guide</span></li>
        </ul>

        

      
    </div>
      </div>
  );
}