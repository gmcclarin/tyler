const Nav = () => {
    return (
        <nav className="fixed top-0 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-transparent shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
            </div>
            <div>
                <a href="/services" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-5">Services</a>
                <a href="/contact" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-5">Contact Us</a>
                <a href="/onthejob" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-5">On the Job</a>
            </div>
        </nav>
    )
}

export default Nav;