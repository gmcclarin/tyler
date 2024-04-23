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
           
            <div className="pt-24 sm:pt-32 p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8  bg-base text-darker">
            <div className="grid grid-rows-2 items-center">
                <div className="text-4xl font-bold">TRIMMING</div>
                <div className="text-xl">Transforming landscapes one tree at a time, Tyler's professional tree removal service offers swift and safe solutions for any tree removal needs. With a focus on safety and environmental responsibility, minimal disruption to your surroundings will be ensured while delivering exceptional results. Trust Tyler to handle your tree removal needs with precision and care.</div>
                <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $119</div>
            </div>
                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">REMOVAL</div>
                    <div className="text-xl">Clearing the way for your vision to flourish, comprehensive tree and bush removal service offers expert solutions tailored to your landscape needs. From hazardous trees to overgrown shrubbery, trust us to transform your landscape with precision and care, leaving you with a clean canvas ready for new growth and possibilities.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $249</div>
                </div>

                

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">STUMP GRINDING</div>
                    <div className="text-xl">Eliminate the remnants of felled trees with this efficient stump grinding service, allowing you to reclaim valuable space in your landscape. Our skilled technicians ensure thorough removal, leaving no trace behind and enabling seamless lawn maintenance or landscaping projects. Say goodbye to tripping hazards and hello to a pristine outdoor environment with Tyler's stump grinding expertise.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $59</div>
                </div>

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">CANOPY RAISES</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">DEADWOOD</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">STORM DAMAGE</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

            </div>

            <div className="mb-10 font-bold text-center italic text-lg sm:text-xl m-auto">Prices vary depending on size and traveling distance</div>

            {/* <div><button>READY TO CHAT?</button></div> */}
            

            <Footer />

        </div>
    )
};

export default ServicesPage;