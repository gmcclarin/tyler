import { useState } from 'react';

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
        <div className="w-3/4 p-20 rounded-lg bg-white mx-auto my-20 flex justify-center items-center">
            <div>
                <p>tyler is literally the best </p>
             
                    <p>- {chosenReview.first} {chosenReview.last}</p>
            
            </div>
        </div>
    )
};

export default ReviewCarousel;