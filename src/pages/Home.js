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
        <div className="bg-base relative overflow-x-hidden">
            <Nav/>
            <MobileNav />
            <div className="">
                
                <div className="rounded-lg w-screen h-screen flex justify-center items-center">

                    <div id="homeimage" className="w-screen h-screen flex items-center justify-center">
                        {/* <img className="min-w-full min-h-full shrink-0 object-cover" src={pic2} /> */}
                        <div className="animate-pulse text-3xl font-extrabold text-white p-1 border-2 border-white rounded-full hover:text-accent hover:border-accent cursor-pointer">
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
                
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="">
                        <ServicesMarquee />
                        <div className="flex justify-center">
                            <a 
                            href="/services"
                            className="px-5 p-3 hover:bg-dark bg-olive text-white font-bold rounded-full">ALL SERVICES</a>
                        </div>
                    </div>
                </div>

            </div>
            
            <BeforeAfter />
                
                {/* MISSION & VISION section */}
            <div className="w-full sm:flex items-center bg-base">
                <div className="hidden sm:flex sm:w-1/2">
                    <img className="object-cover" alt="placeholder" src={pic1}/>
                </div>
                <div className="w-full sm:w-1/2 py-5 sm:p-10 flex justify-center items-center">
                    <Reveal>
                    <div className="sm:flex justify-between text-sm sm:text-lg">
                        <div className="p-2">MISSION & VISION - tyler is dedicated to building other people's dreams </div>
                        <div className="p-2">Tree care that speaks volumes.</div>
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
                    <div className="m-10 text-xl font-bold">CONTACT</div>
                    <div className="m-10">Tell people what to reach out about and what to expect after contacting you. Don’t forget to choose a storage option for submissions.</div>
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