import { useState } from "react";


export function Demo(){

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

    return(
        <div className="w-full min-h-screen">
            
        </div>
    )
}




