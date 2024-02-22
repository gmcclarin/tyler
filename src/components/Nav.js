const Nav = () => {
    return (
        <nav className="fixed top-0 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-accent shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className="text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark">HOME</a>
            </div>
            <div>
                <a href="/services" className="text-lg font-bold no-underline text-grey-darkest hover:text-blue-dark ml-5">SERVICES</a>
                <a href="/contact" className="text-lg font-bold no-underline text-grey-darkest hover:text-blue-dark ml-5">CONTACT</a>
                <a href="/onthejob" className="text-lg font-bold no-underline text-grey-darkest hover:text-blue-dark ml-5">ON THE JOB</a>
            </div>
        </nav>
    )
}

export default Nav;