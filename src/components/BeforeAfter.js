import Reveal from "./Reveal"

const BeforeAfter = () => {
    return (
        <div className="w-full sm:flex bg-darker">
                <div className="w-full sm:w-1/3 m-10 flex justify-center items-center">
                    <Reveal>
                    <div className="sm:flex justify-between">
                        <div className="p-2 text-white">
                            BEFORE & AFTER
                        </div>
                    </div>
                    </Reveal>
                </div>
                <div className="w-full sm:w-1/3">
                    <img className="object-cover" alt="placeholder" src="https://i.postimg.cc/nzNQQY9J/IMG-1008.avif" />
                </div>
                <div className="w-full sm:w-1/3">
                    <img className="object-cover" alt="placeholder" src="https://i.postimg.cc/HnGVLYFW/IMG-1016.avif" />
                </div>
                
            </div>
    )
};

export default BeforeAfter;