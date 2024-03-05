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

    const [chosenReview, setChosenReview] = useState(reviews[0])
    
    

    const handleRandomSelection = () => {
        const randomElement = reviews[Math.floor(Math.random() * reviews.length)];
        while (chosenReview == randomElement){
            randomElement = reviews[Math.floor(Math.random() * reviews.length)]
        }
        setChosenReview(randomElement)
    }

    // these look weird because the id's are not 0 indexed lol

//  reviews = [1, 2, 3, 4, 5, 6]
   const handleDown = () => {
     if (chosenReview.id > 1) {
        setChosenReview(reviews[chosenReview.id - 2])
     } else {
        setChosenReview(reviews[reviews.length - 1])
        
     }
     console.log(chosenReview.r)
   }

   const handleUp = () => {
    if ( chosenReview.id < reviews.length) {
        setChosenReview(reviews[chosenReview.id])
    } else {
        setChosenReview(reviews[0])
    }
    console.log(chosenReview.r)
   }
        

   console.log(chosenReview.r)

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-darker">
            
                <div className="text-white text-4xl -rotate-90 border-b p-6" >CUSTOMER REVIEWS</div>
                <div className="w-1/2 flex justify-center items-center">
                  
                        <div className="text-6xl mx-16 text-dark cursor-pointer"
                        onClick={handleDown}>«</div>
                        <div className="">
                            <p className="font-bold text-white text-2xl">{chosenReview.r}</p>
                            <p className="italic text-lg text-white">- {chosenReview.first} {chosenReview.last}</p>
                        </div>
                        <div className="text-6xl mx-16 text-dark cursor-pointer"
                        onClick={handleUp}>»</div>
                    
                </div>
   
        </div>
    )
};

export default ReviewCarousel;