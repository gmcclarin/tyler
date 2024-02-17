import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className="flex justify-between w-full">
            <div className="p-10">
                <div>CONTACT</div>
                <div>tylerstreesolutions@gmail.com</div>
                <div>(585) 555 - 5555 </div>
            </div>

            <div className="p-10">
            <div>CONNECT</div>
                <div>Want to talk trees?</div>
                <div>
                    <a href="mailto:" className="p-1"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="" className="p-1"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="tel:585-555-5555" className="p-1"><FontAwesomeIcon icon={faPhone}/></a>
                
                </div>

                
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