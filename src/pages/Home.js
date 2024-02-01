import Nav from "../components/Nav";
import hp from "../photos/homeplaceholder.jpg"
import Services from "../components/Services";

const Home = () => {
    return(
        <div>
            <Nav/>
            <div className="flex justify-center">
                <img src={hp} className="max-w-full h-auto m-10 w-full rounded-md"/>
            </div>
            <div className="">
                <Services />
            </div>

        </div>
    )
}

export default Home;