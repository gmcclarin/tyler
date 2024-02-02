import React, { useState } from "react";

const Services = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)


    return (
        <div className="flex w-full my-48">
            <div className="w-1/2 mx-10 text-3xl">SERVICES</div>
            <div className="w-1/2 mx-10">
            {/* SERVICE #1 */}
                   {open1 ? 
                    <div className="w-full flex justify-between border-b-2 border-t-2 py-5 cursor-pointer">
                        <div 
                        className="mx-10 "
                        onClick={()=>setOpen1(!open1)}>
                            <div className="mb-5 text-xl">Trimming</div>
                            Tree trimming is important for trees of all ages. Done improperly, the tree can be damaged permanently. Tyler has extensive experience in trimming trees to:
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
                        <div className="mx-10 text-xl">Trimming</div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div>
                   } 
                   {/* ##### SERVICE # 2 ######### */}

                   {open2 ? 
                    <div className="w-full flex justify-between border-b-2 py-5 cursor-pointer">
                        <div 
                        className="mx-10 "
                        onClick={()=>setOpen2(!open2)}>
                            <div className="mb-5 text-xl">Firewood & Mulch</div>
                            Now offering firewood for campfires, mulching, and more! Contact us today for more information.
                        </div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div> : 
                    <div 
                    className="w-full flex justify-between border-b-2 py-5 cursor-pointer" 
                    onClick={()=>setOpen2(!open2)}>
                        <div className="mx-10 text-xl">Firewood & Mulch</div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div>
                   } 

                   {/* ###### SERVICE 3 ############ */}


                   {open3 ? 
                    <div className="w-full flex justify-between border-b-2 py-5 cursor-pointer">
                        <div 
                        className="mx-10 "
                        onClick={()=>setOpen3(!open3)}>
                            <div className="mb-5 text-xl">Stump Grinding & Removal</div>
                            Leave your stump grinding and removal to Tyler's expertise. Power lines, in-ground sprinklers, and other obstacles will be professionally assessed before safely grinding your tree stump up to eight inches below the ground.
                        </div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div> :
                    <div 
                    className="w-full flex justify-between border-b-2 py-5 cursor-pointer" 
                    onClick={()=>setOpen3(!open3)}>
                        <div className="mx-10 text-xl">Stump Grinding & Removal</div>
                        <div className="mx-10 text-2xl" >+</div>
                    </div>
                   } 

                
            </div>
        </div>
    )
};

export default Services;