// import tree2 from "../photos/treeLogo2.png";

const Nav = () => {
  return (
    <nav className="hidden fixed z-50 top-2 left-1/2 transform -translate-x-1/2 font-sans sm:flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 md:py-4 px-4 bg-stone-900 shadow sm:items-baseline w-3/4 md:w-1/2 rounded-full">
      <a
        href="/"
        className=" flex text-xs font-bold no-underline text-stone-200 hover:text-dark "
      >
        TYLER'S TREE SOLUTIONS
        {/* <img alt="treeLogo" src={tree2} style={{height:"20px"}} /> */}
      </a>
      <a
        href="/services"
        className="text-xs font-bold no-underline text-stone-200 hover:text-dark ml-2 md:ml-5"
      >
        SERVICES
      </a>
      <a
        href="/about"
        className="text-xs font-bold no-underline text-stone-200 hover:text-dark ml-2 md:ml-5"
      >
        ABOUT
      </a>
      <a
        href="/onthejob"
        className="text-xs font-bold no-underline text-stone-200 hover:text-dark ml-2 md:ml-5"
      >
        ON THE JOB
      </a>
    </nav>
  );
};

export default Nav;
