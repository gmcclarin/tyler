import Nav from "../components/Nav";
import hp from "../photos/homeplaceholder.jpg"
import Services from "../components/Services";

const Home = () => {
    return(
        <div className="bg-base">
            <Nav/>
            <div className="flex justify-center">
                <img src={hp} className="max-w-full h-auto m-10 w-full rounded-md mt-20"/>
            </div>
            <div className="">
                <Services />
            </div>
            <div className="w-full flex bg-dark">
                <div className="w-1/2"><img src="https://images.unsplash.com/photo-1569227997603-33b9f12af927?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHRyZWUlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"/></div>
                <div className="w-1/2">
                    <div className="m-10">AH Lorem ipsum etc etc etc blah blah blah contact us HERE immediately right now </div>
                </div>
            </div>

        </div>
    )
}

export default Home;