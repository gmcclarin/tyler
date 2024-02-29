import Nav from "../components/Nav";
import Footer from "../components/Footer";
import p01 from "../photos/01.jpeg"
import MobileNav from "../components/MobileNav";


const OntheJob = () => {



    return (
        <div>
            <MobileNav />
            <Nav />
            
            {/* GALLERY HERE - MASON???? */}
            <div className="p-1 sm:p-2 pt-10 min-h-screen">
            <div className="flex">
                
                    <div className="container mx-auto px-2 py-2 lg:px-5 lg:pt-10 mt-20">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/7Lm6S1cR/IMG-0049.avif" />
                            </div>
                            <div className="w-1/2 p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/59vJVqgM/IMG-0529.avif" />
                            </div>
                            <div className="w-full p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/mrwc8Wc8/IMG-1004-preview.avif"
                                />
                            </div>
                            <div className="w-full p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-contain object-center"
                                src={p01}
                                />
                            </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/pVgD9xKF/IMG-0428.avif"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/4xXHt3ym/IMG-1007.avif" />
                            </div>
                            <div className="w-1/2 p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/nzNQQY9J/IMG-1008.avif" />
                            </div>
                            <div className="w-1/2 p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-left"
                                src="https://i.postimg.cc/HnGVLYFW/IMG-1016.avif" />
                            </div>
                            <div className="w-1/2 p-1 md:p-4">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://i.postimg.cc/VNpN7sf9/IMG-1015.avif" />
                            </div>
                            </div>
                        </div>
                        </div>
                        
                </div>
                
        </div>

            <Footer />
        </div>
    )
};

export default OntheJob;