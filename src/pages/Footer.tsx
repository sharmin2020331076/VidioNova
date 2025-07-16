

export function Footer() {
  return (
    <footer className=" relative w-full text-white lg:pr-32 lg:pl-32 p-4 lg:pb-16">
      <div className="mx-auto px-6">
        <div className="flex flex-col sm:flex-row text-center space-y-6 items-center justify-center sm:justify-between">
          {/* Logo */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="/icon/vid.png" alt="" className="h-5 w-5"/>
              </div>
              <span className="text-xl font-bold">VidioNova</span>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Twitter LX
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
