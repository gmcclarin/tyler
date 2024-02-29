import { useNavigate } from "react-router-dom";



const NotFound = () => {
    const navigate = useNavigate();

    return(
        <div id="notfound" className="h-screen flex justify-center items-center ">
            <div className="text-center bg-white p-7 rounded-xl">
                <div className="">OOPS! There's nothing here!</div>
                <button
                onClick={() => navigate(-1)} 
                className=" m-2 px-2 p-1 bg-accent font-bold rounded-full">GO BACK</button>
            </div>
        </div>
    
    )
};

export default NotFound;