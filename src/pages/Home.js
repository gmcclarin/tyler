import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import pic1 from "../photos/01.jpeg"
import ServicesMarquee from "../components/ServicesMarquee";
import BeforeAfter from "../components/BeforeAfter";
import MobileNav from "../components/MobileNav";

const Home = ( ) => {

    return(
        <div className="bg-baseColor relative overflow-x-hidden">
            <Nav/>
            <MobileNav />
            <div className="">
                
                <div className="rounded-lg w-screen h-screen flex justify-center items-center">

                    <div id="homeimage" className="w-screen h-screen flex items-center justify-center">
                        {/* <img className="min-w-full min-h-full shrink-0 object-cover" src={pic2} /> */}
                        <div className="animate-pulse text-3xl font-extrabold text-white p-1 border-4 border-white rounded-full hover:text-dark hover:border-dark cursor-pointer">
                            <a href="#contactform">LET'S TALK TREES</a>
                        </div>
                    </div>

                </div>
                
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="">
                        <ServicesMarquee />
                        <div className="flex justify-center">
                            <a 
                            href="/services"
                            className="px-5 p-3 hover:bg-dark bg-darker text-white font-bold rounded-full shadow-2xl shadow-black">ALL SERVICES</a>
                        </div>
                    </div>
                </div>

            </div>
            
            <BeforeAfter />
                
                {/* MISSION & VISION section */}
            <div className="w-full sm:flex items-center bg-baseColor">
                <div className=" sm:flex sm:w-1/2 justify-center">
                    <img className="w-80 sm:w-96 md:object-cover m-5" alt="placeholder" src={pic1}/>
                </div>
                <div className="w-full sm:w-1/2 my-5 sm:m-10 flex justify-center items-center">
                    <Reveal>
                    <div className="text-sm  sm:text-xl">
                        <div className="p-10 sm:p-5 md:p-20"><strong>MY MISSION</strong> is to use my skills and knowledge to help decide which top quality solutions are specific to YOU and YOUR trees! I am committed to continuing to grow in my usefulness to become an integral part of my customer's tree care solutions.</div> 
                    </div>
                    </Reveal>
                </div>
            </div>

            {/* REVIEW CAROUSEL */}
            
            <ReviewCarousel />
         

            {/* ############ CONTACT FORM #1 #############*/}
            <div id="contactform" className="sm:flex w-full">
                {/* LEFT SIDE */}
                <div  className="mt-20 w-full sm:w-1/2">
                    <div className="m-8 text-xl sm:text-3xl font-bold">CONTACT</div>
                    <div className="m-8 text-lg">Ready to talk trees? If you have a question or want talk about a potential job, you're in the right place.</div>
                </div>

                {/* RIGHT SIDE & THE FORM */}
                <div  className="w-full sm:w-1/2 mt-20 ">
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;