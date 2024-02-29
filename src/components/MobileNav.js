import { useState } from "react";


export default function MobileNav () {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="z-60">
            <div className=" sm:px-6 lg:px-8">
                <div className="flex">
                    
                    <div onClick={()=> setShowMenu(!showMenu)}  className="sm:hidden fixed top-3 left-3 p-1 space-y-1 z-10">
                        <div className="w-8 h-1 bg-accent"></div>
                        <div className="w-8 h-1 bg-accent"></div>
                        <div className="w-8 h-1 bg-accent"></div>
                    </div>

                    {/* ------------- FOR MOBILE ---------------- */}
                    <ul className={showMenu ? "bg-orange-600 absolute z-50  left-0 top-0 w-full p-5 space-y-5 text-center rounded-b-3xl" : 
                    "hidden bg-orange-600 absolute left-0 top-0 w-full p-7 space-y-8 text-center rounded-b-3xl"}>
                        <li>
                            <a
                            href="/"
                            
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                            href="/services"
                        
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a
                            href="/about"
                            
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                ABOUT
                            </a>
                        </li>
                        
                        <li>
                            <a
                            href="/onthejob"
                            
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                ON THE JOB
                            </a>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )
}