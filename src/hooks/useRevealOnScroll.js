import { useRef, useState, useEffect } from "react"

const useRevealOnScroll = (options) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {

        const scrollObserver = new IntersectionObserver(callbackFunction, options);
        if(ref.current) {
            scrollObserver.observe(ref.current)
        }

        return () => {
            if(ref.current) {
                // setIsVisible(false)
                scrollObserver.unobserve(ref.current)
                
            }
        }

    },[])

    return [ref, isVisible]

};

export default useRevealOnScroll;