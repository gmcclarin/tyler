import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const ReviewCarousel = () => {

   

    const reviews = [
        {
            id : 1,
            r : "tyler was so professional, he really cut that tree down",
            first :  "Jacquelyn",
            last : "D"
        },
        {
            id : 2,
            r : "timber timber timber timber timber and trees falling everywhere wow",
            first : "Mary",
            last  : "S"
        },
        {
            id : 3,
            r : "Tyler removed the stumps in my yard as part of a landscaping project and I loved his work",
            first : "Robert",
            last : "Frost"
        }
    ]

     const [chosenReview, setChosenReview] = useState(reviews[1])

    

     useEffect(() => {
        const randomElement = reviews[Math.floor(Math.random() * reviews.length)];
        const interval = setInterval(() => {
            setChosenReview(randomElement);
          }, 5000);
       return () => {
         clearInterval(interval);
       };
     }, []);


    return (
        <div className="w-screen h-screen flex items-center justify-center bg-darker">
            
                <div className="text-white text-4xl -rotate-90 border-b p-6" >CUSTOMER REVIEWS</div>
                <div className="w-1/2 flex justify-center items-center">
                  
                        <div className="text-6xl px-16 text-dark">«</div>
                        <div className="">
                            <p className="font-bold text-white text-2xl">{chosenReview.r}</p>
                            <p className="italic text-lg text-white">- {chosenReview.first} {chosenReview.last}</p>
                        </div>
                        <div className="text-6xl px-16 text-dark">»</div>
                    
                </div>
   
        </div>
    )
};

export default ReviewCarousel;