import Nav from "../components/Nav"
import Footer from "../components/Footer"

const About  = () => {
    return (
        <div>
            <Nav />
            <div className="flex w-screen justify-between">
                <div className="m-20 p-10">
                    <div className="font-bold text-3xl -rotate-90 ">ABOUT</div>
                    <div>
                        <p>Lorem ipsum about tyler and it all started with an axe and a </p>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
};

export default About;