import tree2 from "../photos/treeLogo2.png"

const Nav = () => {
    return (
        <nav className="hidden fixed z-50 top-2 left-1/2 transform -translate-x-1/2 font-sans sm:flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-stone-900 shadow sm:items-baseline w-1/2 rounded-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className=" flex text-sm font-bold no-underline text-stone-200 hover:text-dark ">TYLER'S TREE SOLUTIONS
                    <img alt="treeLogo" src={tree2} style={{height:"20px"}} />
                </a>
            </div>
            <div>
                <a href="/services" className="text-sm font-bold no-underline text-stone-200 hover:text-dark ml-5">SERVICES</a>
                <a href="/about" className="text-sm font-bold no-underline text-stone-200 hover:text-dark ml-5">ABOUT</a>
                <a href="/onthejob" className="text-sm font-bold no-underline text-stone-200 hover:text-dark ml-5">ON THE JOB</a>
            </div>
        </nav>
    )
};

export default Nav;