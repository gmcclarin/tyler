import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Reveal from "../components/Reveal"
import ServicesMarquee from "../components/ServicesMarquee";

const ServicesPage = () => {
    return (
        <div>
            <Nav />
           
            <div className="flex min-w-screen min-h-screen items-center justify-between">
                <ServicesMarquee />
                {/* <div className="flex w-full justify-center my-20">
                    <div className="font-bold text-2xl p-10 text-olive hover:text-dark cursor-pointer"><a href="#trimmingservice">TRIMMING</a></div>
                    <div className="font-bold text-2xl p-10 text-olive hover:text-dark  cursor-pointer">STUMP REMOVAL</div>
                    <div className="font-bold text-2xl p-10 text-olive hover:text-dark  cursor-pointer">MULCHING</div>
                    <div className="font-bold text-2xl p-10 text-olive hover:text-dark  cursor-pointer">THE FULL SITUATION</div>
                </div> */}
            </div>
            
            <Reveal>
            <div id="trimmingservice" className="flex min-w-screen min-h-screen items-center justify-center">
                <div className="flex justify-center w-2/3 p-10">
                    <img src="https://i.postimg.cc/Sx5ZcK56/IMG-1011.avif" />
                </div>
                <div className="w-1/3 flex justify-center text-xl p-20 font-bold text-darker">
                    <div >
                    <p className="my-5 ">TRIMMING</p>
                    
                    Our ISA Certified Arborists and plant healthcare specialists provide tree and landscape assessments, diagnose insect, disease, and structural problems and share solutions to help your trees thrive. Our staff’s experience and state-of-the-art equipment allow us to care for any size property</div>
                </div>
            </div>
            </Reveal>



            <Footer />

        </div>
    )
};

export default ServicesPage;