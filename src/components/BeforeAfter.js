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
            after:"https://i.postimg.cc/pVgD9xKF/IMG-0428.avif",
            descr:"ROOF CLEARANCE"
        },
        {
            id:3,
            before:"https://i.postimg.cc/4xXHt3ym/IMG-1007.avif",
            after:"https://i.postimg.cc/nzNQQY9J/IMG-1008.avif",
            descr:"ROOF CLEARANCE"
        }
    ]
       
    const [chosenJob, setChosenJob] = useState(jobs[0])


    const handleDown = () => {
        if (chosenJob.id > 1) {
            setChosenJob(jobs[chosenJob.id - 2])
        } else {
            setChosenJob(jobs[jobs.length - 1])
           
        }
    
      }
   
      const handleUp = () => {
       if ( chosenJob.id < jobs.length) {
        setChosenJob(jobs[chosenJob.id])
       } else {
        setChosenJob(jobs[0])
       }
   
      }

    return (
        <div className="w-screen h-screen flex justify-between items-center bg-olive relative">
            <div
                className="text-9xl mx-5 mb-5 text-right"
                onClick={handleDown}>«</div>
            <div className="w-3/4 m-10 flex">
            
                <div className="mx-5">
                    <div className="text-3xl m-1 italic ">BEFORE</div>
                    <img src={chosenJob.after} />
                </div>
                
                <div className="mx-5">
                    <img className="" src={chosenJob.before} />
                    <div className="text-4xl m-3 text-right italic">AFTER</div>
                </div>

            </div>
            
            <div
                className="text-9xl m-5 text-left"
                onClick={handleUp}>»</div>
        </div>
    )
};

export default BeforeAfter;