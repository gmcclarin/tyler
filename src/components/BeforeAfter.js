import { useState } from "react";
import Reveal from "./Reveal"

const BeforeAfter = () => {

    const jobs = [
        {
            id:1,
            before: "https://i.postimg.cc/7Lm6S1cR/IMG-0049.avif",
            after: "https://i.postimg.cc/59vJVqgM/IMG-0529.avif",
            descr: "TRIMMING"
        
        },
        {
            id:2,
            before:"https://i.postimg.cc/7Lm6S1cR/IMG-0049.avif",
            after:"https://i.postimg.cc/7Lm6S1cR/IMG-0049.avif",
            descr:"ROOF CLEARANCE"
        }
    ]
       
    const [chosenJob, setChosenJob] = useState(jobs[0])

    return (
        <div className="w-screen h-screen bg-olive relative">
            <div className="absolute top-10 left-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5"><img src={chosenJob.after} /></div>
            <div className="absolute bottom-10 right-1/3 sm:w-1/2 md:1/3 lg:w-1/4"><img className="" src={chosenJob.before} /></div>
        </div>
    )
};

export default BeforeAfter;