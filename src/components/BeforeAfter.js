import { useState } from "react";
import Reveal from "./Reveal"

const BeforeAfter = () => {

    const jobs = [
        {
            id:1,
            before: "https://i.postimg.cc/9Xxdr3K9/IMG-1007.avif",
            after: "https://i.postimg.cc/yNqXsF5r/IMG-1014.avif",
            descr: "TRIMMING",
            style: ""
        
        },
        {
            id:2,
            before:"https://i.postimg.cc/vBYnZXvX/IMG-1004.avif",
            after:"https://i.postimg.cc/wjNLf1v5/IMG-1013.avif",
            descr:"TRIMMING"
        },
        {
            id:3,
            before:"https://i.postimg.cc/WbFkzdMR/IMG-0997.avif",
            after:"https://i.postimg.cc/nLksgBtm/IMG-0982.avif",
            descr:"TRIMMING"
        },
        
        {
            id:4,
            before:"https://i.postimg.cc/CK1BydM6/DD7-E826-E-7-CC6-4-AB2-87-A0-24-A58-BCC014-A.avif",
            after:"https://i.postimg.cc/13yVHJkS/IMG-0861.avif",
            descr:"TRIMMING"
        },
        {
            id:5,
            before:"https://i.postimg.cc/63ZQwvkz/IMG-0052.avif",
            after:"https://i.postimg.cc/k5B41Zw0/IMG-0889.avif",
            descr:"TRIMMING"
        },
      
        {
            id:6,
            before:"https://i.postimg.cc/kXTq0sVq/Full-Size-Render.avif",
            after:"https://i.postimg.cc/fRFZLbjP/71443205496-2430-C01-C-3-E73-40-CD-9983-DE16-E9-C91-B2-D.avif",
            descr:"TRIMMING"
        },
        {
            id:7,
            before:"https://i.postimg.cc/Kv8yDT0V/IMG-8695.avif",
            after:"https://i.postimg.cc/Kz7yJDSX/IMG-0338.avif",
            descr:"TRIMMING"
        },
        {
            id:8,
            before:"https://i.postimg.cc/R0KrZL03/IMG-0428.avif",
            after:"https://i.postimg.cc/P5BsHRds/IMG-0432.avif",
            descr:"TRIMMING"
        },
        {
            id:9,
            before:"https://i.postimg.cc/90fNZdcY/IMG-0436.avif",
            after:"https://i.postimg.cc/Pf67hRM3/IMG-1439.avif",
            descr:"TRIMMING"
        },
        {
            id:10,
            before:"https://i.postimg.cc/sDq0GGq5/IMG-4348.avif",
            after:"https://i.postimg.cc/wBdf086v/IMG-4349.avif",
            descr:"TRIMMING"
        },
        {
            id:11,
            before:"https://i.postimg.cc/MH4tBgPz/IMG-4351.avif",
            after:"https://i.postimg.cc/T2HtBWRB/IMG-4352.avif",
            descr:"TRIMMING"
        },
        {
            id:12,
            before:"https://i.postimg.cc/rmsS9Qts/IMG-4353.avif",
            after:"https://i.postimg.cc/LX8VbmGH/IMG-1731.avif",
            descr:"TRIMMING"
        },
        {
            id:13,
            before:"https://i.postimg.cc/2jPKVBPh/IMG-4358.avif",
            after:"https://i.postimg.cc/13KCC74r/IMG-4359.avif",
            descr:"TRIMMING"
        },
        {
            id:14,
            before:"https://i.postimg.cc/1RNWh3ft/IMG-0409.avif",
            after:"https://i.postimg.cc/xCX6d056/IMG-0529.avif",
            descr:"TRIMMING"
        },
        {
            id:15,
            before:"https://i.postimg.cc/6Q30H9kB/IMG-1525.avif",
            after:"https://i.postimg.cc/QdjSTgS9/IMG-1732.avif",
            descr:"TRIMMING"
        },
        {
            id:16,
            before:"https://i.postimg.cc/3xwmhtnB/IMG-0126.avif",
            after:"https://i.postimg.cc/wTgDfqNn/IMG-1577.avif",
            descr:"TRIMMING"
        }
          // xx
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
        <div className="w-screen h-screen md:flex justify-between items-start bg-baseColor  text-black relative">
            <div className="w-full h-full m-auto">
                <div className="w-full h-1/2 md:flex items-center">

                <div 
                onClick={handleDown}
                className="px-5 sm:text-6xl cursor-pointer animate-pulse mx-5 sm:mx-10">«</div>

                    <div className="w-full h-1/2 md:h-full md:w-1/3 relative">
                        <div className="absolute text-4xl italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center text-white border-2 border-white rounded-full p-1 animate-pulse">BEFORE</div>
                        <img className=" h-full w-full" src={chosenJob.before} />
                    </div>
                    
                    <div className="w-full h-1/2 md:h-full md:w-1/3 relative">
                        <div className="absolute text-4xl italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center text-white border-2  border-white rounded-full p-1 animate-pulse ">AFTER</div>
                        <img className=" h-full w-full" src={chosenJob.after} />
                    </div>

                    <div 
                    onClick={handleUp}
                    className="px-5 sm:text-6xl cursor-pointer animate-pulse mx-5 sm:mx-10 ">»</div>

                </div>
            <div className="h-1/3 md:h-1/2 w-full flex items-center justify-center text-3xl ">
                <div 
                onClick={handleDown}
                className="px-5 sm:text-6xl cursor-pointer animate-pulse mx-5 sm:mx-10">«</div>
                <div className="italic text-center  w-1/2 font-black">
                    <div className="text-xl md:text-2xl">THE JOB:</div>
                    <div className="text-2xl md:text-3xl">{chosenJob.descr}</div>
                </div>
                <div 
                onClick={handleUp}
                className="px-5 sm:text-6xl cursor-pointer animate-pulse mx-5 sm:mx-10 ">»</div>
            </div>

            </div>
        </div>
    )
};

export default BeforeAfter;