import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Reveal from "../components/Reveal"
import ServicesMarquee from "../components/ServicesMarquee";
import MobileNav from "../components/MobileNav";

const ServicesPage = () => {
    return (
        <div className="overflow-x-hidden">
            <MobileNav />
            <Nav />
           
            <div className="py-24 sm:py-32 p-10 grid grid-cols-3 gap-8  bg-base text-darker">

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">TREE & BUSH REMOVAL</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $199</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">PRUNING / TRIMMING</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                        <p>_______________________________</p>
                        STARTING AT $99</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">ROOF CLEARANCE</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">CANOPY RAISES</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">DEADWOOD</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">STORM DAMAGE</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

            </div>

            {/* <div><button>READY TO CHAT?</button></div> */}
            

            <Footer />

        </div>
    )
};

export default ServicesPage;