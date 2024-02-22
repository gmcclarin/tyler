import Nav from "../components/Nav";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import pic1 from "../photos/01.jpeg"
import pic2 from "../photos/02.png"
import pic3 from "../photos/03.jpeg"


const Home = ( ) => {

    return(
        <div className="bg-base relative">
            <Nav/>
            <div className="">
                
                <div className="rounded-lg w-screen h-screen flex justify-center items-center">

                    <div className="w-full h-full flex overflow-hidden items-center ">
                        <img className="min-w-full min-h-full shrink-0 object-cover" src={pic2} />
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
                
                <div className="w-screen h-screen">
                    <Reveal>
                        <Services />  
                    </Reveal> 
                </div>
            </div>
                
            <div className="w-full flex bg-dark">
                <div className="w-1/2">
                    <img className="w-full" alt="placeholder" src={pic1}/>
                </div>
                <div className="w-1/2 m-10 flex justify-center items-centered">
                    <Reveal>
                    <div className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    </Reveal>
                </div>
            </div>

            {/* REVIEW CAROUSEL */}

            <ReviewCarousel />
         

            {/* ############ CONTACT FORM #1 #############*/}
            <div className="flex w-full">
                {/* LEFT SIDE */}
                <div className="w-1/2">
                    <div className="m-10 text-xl">Contact Us</div>
                    <div className="m-10">Tell people what to reach out about and what to expect after contacting you. Don’t forget to choose a storage option for submissions.</div>
                </div>

                {/* RIGHT SIDE & THE FORM */}
                <div className="w-1/2">
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;