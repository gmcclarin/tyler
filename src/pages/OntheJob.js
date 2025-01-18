import Nav from "../components/Nav";
import Footer from "../components/Footer";
import p01 from "../photos/01.jpeg"
import MobileNav from "../components/MobileNav";
import BeforeAfter from "../components/BeforeAfter";


const OntheJob = () => {



    return (
        <div>
            <MobileNav />
            <Nav />
            <div className="sm:mt-36 mt-10 sm:m-20 sm:p-2 min-h-screen">
                <div className="font-serif font-bold w-3/4 sm:w-1/3 p-4 text-lg">[BEFORE] and [AFTER] shots of work done in the community by Tyler's Tree Service </div>
                <div></div>
                <BeforeAfter/>
            </div>
            <Footer />
        </div>
    )
};

export default OntheJob;