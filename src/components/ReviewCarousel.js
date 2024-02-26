import { useState } from 'react';
import Reveal from './Reveal';

const ReviewCarousel = () => {

   

    const reviews = [
        {
            id : 1,
            r : "tyler was so professional, he really cut that tree down and lorem ipsum and such",
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
            r : "nothing gold can stay.",
            first : "Robert",
            last : "Frost"
        }
    ]

     const [chosenReview, setChosenReview] = useState(reviews[1])




    return (
        <div className="w-screen h-screen flex items-center justify-center bg-darker">
            
                <div className="text-white text-4xl -rotate-90 border-b p-6" >REVIEWS</div>
                <div className="p-20 rounded-xl  flex justify-center items-center">
                    <Reveal>
                        <div>
                            <p className="font-bold text-white text-2xl">tyler is literally the best </p>
                            <p className="italic text-lg text-white">- {chosenReview.first} {chosenReview.last}</p>
                        </div>
                    </Reveal>
                </div>
   
        </div>
    )
};

export default ReviewCarousel;