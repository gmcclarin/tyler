const Nav = () => {
    return (
        <nav className="hidden fixed z-50 top-0 font-sans sm:flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-stone-900 shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className="text-2xl font-bold no-underline text-olive hover:text-white">TYLER'S TREE SOLUTIONS</a>
            </div>
            <div>
                <a href="/services" className="text-md lg:text-lg font-bold no-underline text-olive hover:text-white ml-5">SERVICES</a>
                <a href="/about" className="text-md lg:text-lg font-bold no-underline text-olive hover:text-white ml-5">ABOUT</a>
                <a href="/onthejob" className="text-md lg:text-lg font-bold no-underline text-olive hover:text-white ml-5">ON THE JOB</a>
            </div>
        </nav>
    )
};

export default Nav;