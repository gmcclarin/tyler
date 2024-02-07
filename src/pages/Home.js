import Nav from "../components/Nav";
import hp from "../photos/homeplaceholder.jpg"
import Services from "../components/Services";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

const Home = ( ) => {

    return(
        <div className="bg-base relative">
            <Nav/>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden ">
                
                <div id="homebanner" className=" bg-neutral-400 w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                
                </div>
                
                <div className="w-screen h-screen flex justify-center items-center">
                        <Reveal>
                            <Services />
                        </Reveal>  
                </div>
            </div>
                
            <div className="w-full flex bg-dark">
                <div className="w-1/2"><img src="https://images.unsplash.com/photo-1569227997603-33b9f12af927?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHRyZWUlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"/></div>
                <div className="w-1/2">
                    <div className="m-10">AH Lorem ipsum etc etc etc blah blah blah contact us HERE immediately right now </div>
                </div>
            </div>
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
        </div>
    )
}

export default Home;