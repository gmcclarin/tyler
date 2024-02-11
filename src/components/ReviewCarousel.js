import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ReviewCarousel = () => {

    const [chosenReview, setChosenReview] = useState(reviews[1])

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



    return (
        <div>
            
        </div>
    )
};

export default ReviewCarousel;