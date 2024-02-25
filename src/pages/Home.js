import Nav from "../components/Nav";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import pic1 from "../photos/01.jpeg"
import pic2 from "../photos/02.png"
import pic3 from "../photos/03.jpeg"
import ServicesMarquee from "../components/ServicesMarquee";


const Home = ( ) => {

    return(
        <div className="bg-base relative">
            <Nav/>
            <div className="">
                
                <div className="rounded-lg w-screen h-screen flex justify-center items-center">

                    <div id="homeimage" className="w-screen h-screen flex items-center justify-center">
                        {/* <img className="min-w-full min-h-full shrink-0 object-cover" src={pic2} /> */}
                        <div className="text-3xl font-extrabold text-white p-1 border-2 border-white rounded-full hover:text-accent hover:border-accent cursor-pointer">
                            <a href="#contactform">LET'S TALK TREES</a>
                        </div>
                    </div>

                    {/* three pictures ful screen version */}
                    {/* <div className="w-1/3 h-full overflow-hidden items-center flex justify-end ">
                        <img className="min-w-full min-h-full shrink-0 object-cover" src={pic1} />
                    </div>
                    <div className="w-1/3 h-full overflow-hidden items-center flex justify-end ">
                        <img className="min-w-full min-h-full shrink-0 object-cover" src={pic2} />
                    </div>
                    <div className="w-1/3 h-full overflow-hidden items-center flex justify-end ">
                        <img className="min-w-full min-h-full shrink-0 object-cover" src={pic3} />
                    </div> */}
                    {/* END three fullscreen pictures */}
                </div>
                
                <div className="w-screen h-screen flex items-center">
                    <Reveal>
                        <ServicesMarquee /> 
                        <button>OUR SERVICES</button> 
                    </Reveal> 
                </div>
            </div>
                
            <div className="w-full flex bg-dark">
                <div className="w-1/2">
                    <img className="w-full" alt="placeholder" src={pic1}/>
                </div>
                <div className="w-1/2 m-10 flex justify-center items-center">
                    <Reveal>
                    <div className="flex justify-between">
                        <div className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. n culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="p-2">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                    </div>
                    </Reveal>
                </div>
            </div>

            {/* REVIEW CAROUSEL */}

            <ReviewCarousel />
         

            {/* ############ CONTACT FORM #1 #############*/}
            <div id="contactform" className="flex w-full">
                {/* LEFT SIDE */}
                <div  className="mt-20 w-1/2">
                    <div className="m-10 text-xl font-bold">CONTACT US</div>
                    <div className="m-10">Tell people what to reach out about and what to expect after contacting you. Don’t forget to choose a storage option for submissions.</div>
                </div>

                {/* RIGHT SIDE & THE FORM */}
                <div  className="w-1/2 mt-20 ">
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;