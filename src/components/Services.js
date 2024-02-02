import React, { useState } from "react";

const Services = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)


    return (
        <div className="flex w-full my-48">
            <div className="w-1/2 mx-10">SERVICES</div>
            <div className="w-1/2 mx-10">
            
                   {open1 ? 
                    <div className="w-full flex justify-between border-b-2 border-t-2 py-5 cursor-pointer">
                        <div 
                        className="mx-10 "
                        onClick={()=>setOpen1(!open1)}>Tree trimming is important for trees of all ages. Done improperly, the tree can be damaged permanently. Tyler has extensive experience in trimming trees to:
                        <ul>
                            <li>- prevent decay</li>
                            <li>- increase lawn health</li>
                            <li>- improve aesthetic</li>
                        </ul>
                        </div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div> : 
                    <div 
                    className="w-full flex justify-between border-b-2 border-t-2 py-5 cursor-pointer" 
                    onClick={()=>setOpen1(!open1)}>
                        <div className="mx-10">Trimming</div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div>
                   } 
                
            </div>
        </div>
    )
};

export default Services;