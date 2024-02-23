import Nav from "../components/Nav";
import Footer from "../components/Footer";
import p01 from "../photos/01.jpeg"
import p02 from "../photos/02.png"
import p03 from "../photos/03.jpeg"


const OntheJob = () => {

    const photos = [p01, p02, p03]

    return (
        <div>
            <Nav />
            {/* GALLERY HERE - MASON???? */}
            <div className="p-1 sm:p-2 pt-10 min-h-screen">
            <div className="flex">
                
                    <div className="container mx-auto px-2 py-2 lg:px-5 lg:pt-10 mt-20">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src={p01} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-contain object-center"
                                src={p02} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-contain object-center"
                                src={p03}
                                />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-contain object-center"
                                src={p01}
                                />
                            </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1613316122132-81de453d8610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1527630941-4a229fd674ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFic3RyYWN0JTIwaGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1544026230-488aeae72c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1cnJlZCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1579736170791-e7ce1a38e203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
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