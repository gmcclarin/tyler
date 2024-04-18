import Nav from "../components/Nav"
import Footer from "../components/Footer"
import MobileNav from "../components/MobileNav";

const About  = () => {
    return (
        <div>
            <MobileNav />
            <Nav />
            <div className="flex w-screen justify-between">
                <div className="md:mx-20 mt-20 p-10 flex justify-between">
                    <div className="hidden md:flex font-bold text-3xl -rotate-90 transform translate-x-3/4">ABOUT</div>
                    <div className="sm:flex w-full justify-between items-center">
                        <p className="sm:w-1/2 p-5">Who We Are: Tyler's Tree Services is a family-owned and operated business, serving the [Your Location] community and surrounding areas for [Number of Years] years. Founded by Tyler Johnson, a certified arborist with a genuine love for trees, our company has grown from humble beginnings to become a trusted name in the industry. </p>
                        <p className="sm:w-1/2 p-5">Tyler's Promise. When you choose Tyler's Tree Services, you can rest assured that your trees are in capable hands. We promise to treat your property with the utmost respect, to communicate openly and honestly throughout the process, and to deliver results that exceed your expectations. Your satisfaction is our priority, and we won't consider the job done until you're fully satisfied with the outcome.</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-20 p-10">Ready to experience the Tyler's Tree Services difference? Contact us today to schedule a consultation or request a quote. Let us help you keep your trees healthy, vibrant, and beautiful for years to come.</div>
            <div className="w-1/2 mx-20 p-10">Thank you for considering Tyler's Tree Services for your tree care needs.</div>
            <Footer />

        </div>
    )
};

export default About;