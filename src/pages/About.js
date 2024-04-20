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
                        <p className="sm:w-1/2 p-5"><strong>Based in Upstate NY</strong>, Tyler has always had a passion for the outdoors. Ever since Tyler was a child, he has loved climbing trees. He has spent a lot of time learning and observing nature. He enjoys walks in the woods, admiring God's creation. </p>
                        <p className="sm:w-1/2 p-5"><strong>Tyler started doing tree work in 2018</strong> and his passion has only grown since. Tyler's goal is to be able to called an expert in all things tree work. He is committed to increasing his knowledge through studying tree health and indentification. Tyler's Tree Solution was created to showcase Tyler's skills in treework, run an intergitable buisness and provide incredible customer service while making the world beautiful; one freshly cut tree at a time!</p>
                    </div>
                </div>
            </div>
            <div className=" text-center font-bold my-12">
                <p >Ready to experience Tyler's Tree Solutions?</p>
                <p>Let's Talk Trees.</p> 
            </div>
            
            <Footer />

        </div>
    )
};

export default About;