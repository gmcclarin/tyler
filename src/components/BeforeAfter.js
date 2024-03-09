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
        <div className="w-screen h-screen md:flex justify-between items-start bg-black relative">
            <div className="w-full h-full">
                <div className="w-full h-3/4 flex items-center">
                    <div className="w-full h-1/2 md:h-full md:w-1/2 relative">
                        <div className="absolute text-4xl italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center text-white border-2 border-white rounded-full p-1 animate-pulse">BEFORE</div>
                        <img className="object-cover h-full w-full" src={chosenJob.before} />
                    </div>
                    
                    <div className="w-full h-1/2 md:h-full md:w-1/2 relative">
                        <div className="absolute text-4xl italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center text-white border-2  border-white rounded-full p-1 animate-pulse ">AFTER</div>
                        <img className="object-cover h-full w-full " src={chosenJob.after} />
                        
                    </div>
                </div>
            <div className="md:h-1/4 w-full flex items-center justify-center">
                <div className="text-white italic text-2xl">{`[ The job: ]`} {chosenJob.descr}</div>
            </div>

            </div>
        </div>
    )
};

export default BeforeAfter;