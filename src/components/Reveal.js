import { Children } from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const Reveal = ({children}) => {
    const [isVisible, ref] = useRevealOnScroll({
        root: null,
        rootMargin: "0px",
        threshold:0.1
    });

    const classes = `transition-opacity duration-2000 
    ${isVisible ? "opacity-100" : "opacity-0"}`

    return (
        <div ref={ref} className={classes}>{children}</div>
    )



};

export default Reveal