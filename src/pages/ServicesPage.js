import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Reveal from "../components/Reveal"
import ServicesMarquee from "../components/ServicesMarquee";
import MobileNav from "../components/MobileNav";

const ServicesPage = () => {
    return (
        <div>
            <MobileNav />
            <Nav />
           
            <div className="flex min-w-screen min-h-screen items-center justify-between bg-base text-darker">

                <div className="w-1/3 m-5">
                    <div className="text-4xl mb-10 font-bold">TRIMMING</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>__________________________________________</p>
                    PRICE POINT</div>
                </div>

                <div className="w-1/3 m-5">
                    <div className="text-4xl mb-10 font-bold">STUMP REMOVAL</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                        <p>__________________________________________</p>
                        SOMETHING ELSE </div>
                </div>

                <div className="w-1/3 m-5">
                    <div className="text-4xl mb-10 font-bold">MULCHING</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>__________________________________________</p>
                    ESTIMATE</div>
                </div>

            </div>

            {/* <div><button>READY TO CHAT?</button></div> */}
            

            <Footer />

        </div>
    )
};

export default ServicesPage;