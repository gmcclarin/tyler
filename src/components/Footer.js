import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div className="flex justify-between w-full">
            <div className="p-10">
                <div>Contact</div>
                <div>tylerstreesolutions@gmail.com</div>
                <div>(585) 555 - 5555 </div>
            </div>

            <div className="p-10">
            <div>CONNECT</div>
                <div><FontAwesomeIcon icon={faEnvelope} /></div>
                <div>Want to talk trees? <a href="#contact">Send Tyler a message</a></div>
            </div>

            <div className="p-10">
                <div>COLUMN THREE</div>
                <div><FontAwesomeIcon icon={faEnvelope} /></div>
            </div>
        </div>
    )
};

export default Footer;