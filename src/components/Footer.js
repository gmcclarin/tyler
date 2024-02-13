import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faStar } from '@fortawesome/free-regular-svg-icons';


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
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faFacebook} />
                
                </div>

                <div>Want to talk trees? <a href="#contact">Send Tyler a message</a></div>
            </div>

            <div className="p-10">
                <div>5.0</div>
                
                <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>

            </div>
        </div>
    )
};

export default Footer;