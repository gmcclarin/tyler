import Nav from "../components/Nav";
import hp from "../photos/homeplaceholder.jpg"

const Home = () => {
    return(
        <div>
            <Nav/>
            <div className="flex justify-center">
                <img src={hp} className="max-w-full h-auto m-10 w-full rounded-md"/>
            </div>
            <div className="">
                Tyler Tree Solutions
            </div>
            
        </div>
    )
}

export default Home;