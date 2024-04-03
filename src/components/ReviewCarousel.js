import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const ReviewCarousel = () => {

   

    const reviews = [
        {
            id : 1,
            r : "Tyler's Tree Solutions took down and cut up a tall tree close to the house. Tyler did an excellent job. Hard working, timely, reliable and honest!!",
            first :  "Paul",
            last : "L"
        },
        {
            id : 2,
            r : "Tyler did a great job trimming three trees and clear brush. Tyler is professional, courteous,  and very knowledgeable. He is neat, cleans up and reasonably priced. Very impressive.  I  highly recommend him!",
            first : "Andrea",
            last  : "B"
        },
        {
            id : 3,
            r : "Tyler is very professional and timely in his work. He is knowledgable in removing and trimming trees. Thank you for your devotion to the work you do.",
            first : "Larry",
            last : "W"
        },
        {
            id : 4,
            r : "Tyler did a great job on all five of our maple trees. Also his clean up and hauling away of all the branches was nice to not leave me any work left behind. Thanks, Tyler",
            first : "Paul",
            last : "H"
        },
        {
            id : 5,
            r : "Previous owners let our shrub line grow to a 30’ tall monster which included several trees. The whole line was over a hundred forty feet in length and Tyler’s Tree Solution took care of the whole thing in six flat, as promised. Very pleased!",
            first : "Brennan",
            last : "B"
        },
        {
            id : 6,
            r : "Tyler did a great job trimming three trees, a bush in the yard. Just never look better if you need any kind of yard work or trees, take down, he’s your man.",
            first : "Tom",
            last : "A"
        },
        {
            id : 7,
            r : "Tyler is extremely professional, courteous,  and very knowledgeable. He shows up on time, he is very neat, and reasonably priced. Very impressive.  I would highly recommend him!",
            first : "Liliana",
            last : "M"
        },
        {
            id : 8,
            r : "Great job!  We will definitely have him come again!",
            first : "Kim",
            last : "D"
        }
    ]

    const [chosenReview, setChosenReview] = useState(reviews[5])
    
    

    // const handleRandomSelection = () => {
    //     const randomElement = reviews[Math.floor(Math.random() * reviews.length)];
    //     while (chosenReview == randomElement){
    //         randomElement = reviews[Math.floor(Math.random() * reviews.length)]
    //     }
    //     setChosenReview(randomElement)
    // }

    // these look weird because the id's are not 0 indexed lol

//  reviews = [1, 2, 3, 4, 5, 6]
   const handleDown = () => {
     if (chosenReview.id > 1) {
        setChosenReview(reviews[chosenReview.id - 2])
     } else {
        setChosenReview(reviews[reviews.length - 1])
        
     }
 
   }

   const handleUp = () => {
    if ( chosenReview.id < reviews.length) {
        setChosenReview(reviews[chosenReview.id])
    } else {
        setChosenReview(reviews[0])
    }

   }
        

    return (
        <div className="w-screen h-screen md:flex items-center justify-center bg-stone-800 text-baseColor">
            
                <div className=" w-1/3 m-5 flex-col justify-center  font-bold" >
                    <div className="border-b pt-20 p-5 text-4xl text-center">CUSTOMER REVIEWS</div>
                    <div 
                    className='text-xl text-center flex justify-center items-center '>
                        <div className="rounded-full border-2 px-4 p-2 m-5 bg-olive border-olive cursor-pointer shadow-2xl shadow-black"
                        ><a href="https://www.google.com/search?q=tylers+tree+solutions&rlz=1C5CHFA_enUS899US899&oq=tylers&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIMCAAQRRg5GLEDGIAEMgYIARBFGDsyCQgCEAAYChiABDIJCAMQABgKGIAEMgcIBBAAGIAEMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEIMzc0NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89d153a2289fe4e9:0xb8b8532813616cc2,3,,,," rel="noopener" target="_blank">Leave a review</a>
                        </div>
                    </div>
                </div>
                <div className="w-full m-auto sm:w-2/3 py-5 flex justify-center items-center">
                  
                        <div className="text-6xl mx-5 lg:mx-16 text-dark cursor-pointer"
                        onClick={handleDown}>«</div>
                        <div className="">
                            <p className="font-bold text-xl">{chosenReview.r}</p>
                            <p className="italic text-lg ">- {chosenReview.first} {chosenReview.last}</p>
                        </div>
                        <div className="text-6xl mx-5 lg:mx-16 text-dark cursor-pointer"
                        onClick={handleUp}>»</div>
                    
                </div>
   
        </div>
    )
};

export default ReviewCarousel;