import tree from "../photos/treeLogo.png"

const Nav = () => {
    return (
        <nav className="hidden fixed z-50 top-0 font-sans sm:flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-stone-900 shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className=" flex text-lg md:text-2xl font-bold no-underline text-stone-200 hover:text-white ">TYLER'S TREE SOLUTIONS
                    <img alt="treeLogo" src={tree} style={{height:"35px"}} />
                </a>
            </div>
            <div>
                <a href="/services" className="text-md lg:text-lg font-bold no-underline text-stone-200 hover:text-white ml-5">SERVICES</a>
                <a href="/about" className="text-md lg:text-lg font-bold no-underline text-stone-200 hover:text-white ml-5">ABOUT</a>
                <a href="/onthejob" className="text-md lg:text-lg font-bold no-underline text-stone-200 hover:text-white ml-5">ON THE JOB</a>
            </div>
        </nav>
    )
};

export default Nav;