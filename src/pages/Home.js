import Nav from "../components/Nav";
import hp from "../photos/homeplaceholder.jpg"
import Services from "../components/Services";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";

const Home = ( ) => {

    return(
        <div className="bg-base relative">
            <Nav/>
            <div className=" ">
                
                <div id="" className="rounded-lg  w-screen h-screen flex justify-center items-center">
                    <img src="https://images.unsplash.com/photo-1620852411212-cbd6f3fd8d1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0dGluZyUyMHRyZWV8ZW58MHx8MHx8fDA%3D" className="rounded-lg" />
                </div>
                
                <div className="w-screen h-screen">
                    <Reveal>
                        <Services />  
                    </Reveal> 
                </div>
            </div>
                
            <div className="w-full flex bg-dark">
                <div className="w-1/2">
                    <img className="w-full" src="https://images.unsplash.com/photo-1569227997603-33b9f12af927?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHRyZWUlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"/>
                </div>
                <div className="w-1/2 m-10 flex justify-center items-centered">
                    <div className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
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