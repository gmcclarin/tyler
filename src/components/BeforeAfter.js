import { useState } from "react";

const BeforeAfter = () => {
  const jobs = [

 
    {
      id: 11,
      before: "https://i.postimg.cc/MH4tBgPz/IMG-4351.avif",
      after: "https://i.postimg.cc/T2HtBWRB/IMG-4352.avif",
      descr: "TRIMMING",
    },
    {
      id: 12,
      before: "https://i.postimg.cc/rmsS9Qts/IMG-4353.avif",
      after: "https://i.postimg.cc/LX8VbmGH/IMG-1731.avif",
      descr: "TRIMMING",
    },
    {
      id: 13,
      before: "https://i.postimg.cc/2jPKVBPh/IMG-4358.avif",
      after: "https://i.postimg.cc/13KCC74r/IMG-4359.avif",
      descr: "TRIMMING",
    },
    {
      id: 14,
      before: "https://i.postimg.cc/1RNWh3ft/IMG-0409.avif",
      after: "https://i.postimg.cc/xCX6d056/IMG-0529.avif",
      descr: "TRIMMING",
    },
    {
      id: 15,
      before: "https://i.postimg.cc/6Q30H9kB/IMG-1525.avif",
      after: "https://i.postimg.cc/QdjSTgS9/IMG-1732.avif",
      descr: "TRIMMING",
    },
    {
      id: 16,
      before: "https://i.postimg.cc/3xwmhtnB/IMG-0126.avif",
      after: "https://i.postimg.cc/wTgDfqNn/IMG-1577.avif",
      descr: "TRIMMING",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-1 sm:gap-4">
      {/* before */}
      <div>
        {/* 1 */}
        <div>
        <img
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/9Xxdr3K9/IMG-1007.avif"
          alt="before1"
        />
        </div>
        {/* 2 */}
        <div>
        <img 
        className="w-full object-contain p-2 sm:p-4"
        src="https://i.postimg.cc/vBYnZXvX/IMG-1004.avif"
        alt="before2"
        /></div>
        {/* 3 */}
        <div>
          <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/qqW1bXyh/IMG-0997.avif"
          alt="before"
          />
        </div>
        {/* 4 */}
        <div>
          <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/CK1BydM6/DD7-E826-E-7-CC6-4-AB2-87-A0-24-A58-BCC014-A.avif"
          alt="before"
          />
        </div>
        {/* 5 */}
        <div>
          <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/63ZQwvkz/IMG-0052.avif"
          alt="before"
          />
        </div>
        {/* 6 */}
        <div>
          <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/kXTq0sVq/Full-Size-Render.avif"
          alt="before"
          />
        </div>
        {/* 7 */}
        <div>
          <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/Kv8yDT0V/IMG-8695.avif"
          alt="before"
          />
        </div>
        {/* 8 */}
        <div>
          <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/633zB1h4/IMG-0428.avif"
          alt="before"
          />
        </div>
        {/* 9 */}
       

     
        </div>
      {/* after */}
      <div>
        {/* 1 */}
        <img
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/yNqXsF5r/IMG-1014.avif"
          alt="after"
        />
        {/* 2 */}
        <img 
        className="w-full object-contain p-2 sm:p-4"
        src="https://i.postimg.cc/wjNLf1v5/IMG-1013.avif"
        alt="after2"
        />
        {/* 3 */}
        <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/nLksgBtm/IMG-0982.avif"
          alt="after"
          />
          </div>
          {/* 4 */}
          <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/13yVHJkS/IMG-0861.avif"
          alt="after"
          />
          </div>
          {/* 5 */}
          <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/k5B41Zw0/IMG-0889.avif"
          alt="after"
          />
          </div>
          {/* 6 */}
          <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/fRFZLbjP/71443205496-2430-C01-C-3-E73-40-CD-9983-DE16-E9-C91-B2-D.avif"
          alt="after"
          />
          </div>
          {/* 7 */}
          <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/pT6CrY0G/IMG-0338.avif"
          alt="after"
          />
          </div>
          {/* 8 */}
          <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/P5BsHRds/IMG-0432.avif"
          alt="after"
          />
          </div>
          {/* 9 */}
          <div>
        <img 
          className="w-full object-contain p-2 sm:p-4"
          src="https://i.postimg.cc/Pf67hRM3/IMG-1439.avif"
          alt="after"
          />
          </div>
       
      </div>
    </div>
  );
};

export default BeforeAfter;
