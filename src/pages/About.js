import Nav from "../components/Nav"
import Footer from "../components/Footer"

const About  = () => {
    return (
        <div>
            <Nav />
            <div className="flex w-screen justify-between">
                <div className="m-20 p-10 flex justify-between">
                    <div className="font-bold text-3xl -rotate-90 ">ABOUT</div>
                    <div>
                        <p>THERE'S NOTHING HERE YET! </p>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
};

export default About;