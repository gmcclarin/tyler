import Nav from "../components/Nav"
import Footer from "../components/Footer"
import MobileNav from "../components/MobileNav";

const About  = () => {
    return (
        <div>
            <MobileNav />
            <Nav />
            <div className="flex w-screen justify-between">
                <div className="lg:mx-20 mt-20 p-10 flex justify-between">
                    <div className="hidden md:flex font-black text-5xl -rotate-90 transform translate-x-3/4">ABOUT</div>
                    <div className="sm:flex w-full justify-between ">
                        <p className="sm:w-1/2 p-5"><p className="font-bold">Who We Are</p> Tyler's Tree Services is a family-owned and operated business, serving the [Your Location] community and surrounding areas for [Number of Years] years. Founded by Tyler Johnson, a certified arborist with a genuine love for trees, our company has grown from humble beginnings to become a trusted name in the industry. </p>
                        <p className="sm:w-1/2 p-5"><p className="font-bold">Tyler's Promise</p> When you choose Tyler's Tree Services, you can rest assured that your trees are in capable hands. We promise to treat your property with the utmost respect, to communicate openly and honestly throughout the process, and to deliver results that exceed your expectations. Your satisfaction is our priority, and we won't consider the job done until you're fully satisfied with the outcome.</p>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/2 sm:mx-20 p-10 font-bold">Ready to experience the Tyler's Tree Services difference? Contact us today to schedule a consultation or request a quote. Let us help you keep your trees healthy, vibrant, and beautiful for years to come.</div>
            <div className="sm:w-1/2 sm:mx-20 p-10 font-bold">Thank you for considering Tyler's Tree Services for your tree care needs.</div>
            <Footer />

        </div>
    )
};

export default About;