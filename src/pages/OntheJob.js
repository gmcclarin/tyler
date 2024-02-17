import Nav from "../components/Nav";


const p1 = "https://images.unsplash.com/photo-1614027079275-07661dff9170?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0dGluZyUyMHRyZWV8ZW58MHx8MHx8fDA%3D"
const p2 = "https://images.unsplash.com/photo-1663436295685-4ad55cb30362?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dHRpbmclMjB0cmVlfGVufDB8fDB8fHww"
const p3 = ""
const OntheJob = () => {
    return (
        <div>
            <Nav />
            <div className="flex mt-20">
                ON THE JOB
            </div>
            {/* GALLERY HERE - MASON???? */}
            <div className="flex">
                <img src={p1} alt="image1" />
                <img src={p2} alt="image2" />
                <img src={p3} alt="image3" />
            </div>
        </div>
    )
};

export default OntheJob;