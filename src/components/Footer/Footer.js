import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function footer() {
    return(
        <div className='footer-bar'>
            <div className='footer-body'>
                <div>
                    <div className='header-logo'>Elio Gerges</div>
                    <p className='footer-note'>This is my portfolio website. A brief description of my
                        education, experiences, skills and achievements.
                        This website also contains my contact information
                        for project collaboration, hiring and/or freelance.
                    </p>
                </div>
                <div>
                    <ul className='contact-info'>
                        <li><a href='tel:+1 (647) 961 4567'><FontAwesomeIcon icon={faPhoneAlt} size='sm'/>+1 (647) 961 4567</a></li>
                        <li><a href='mailto:elio-gerges@outlook.com'><FontAwesomeIcon icon={faEnvelope} size='lg'/>Elio-gerges@outlook.com</a></li>
                        <li><a href='https://www.linkedin.com/in/elio-gerges-4478ba126'><FontAwesomeIcon icon={faLinkedinIn} size='lg'/>Elio Gerges</a></li>
                        <li><a href='https://www.instagram.com/eliogrgs/'><FontAwesomeIcon icon={faInstagram} size='lg'/>@eliogrgs</a></li>
                        <li><a href='https://goo.gl/maps/TXVC438pugJjX9wLA'><FontAwesomeIcon icon={faMapMarkedAlt} size='lg'/>Woodbridge, ON</a></li>
                    </ul>
                </div>
                <div className='footer-location'>
                    <iframe
                        title='Location'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92146.0901905825!2d-79.6543769223517!3d43.802632064071204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1643690984271!5m2!1sen!2sca"
                        width="300" height="200" 
                        style={{
                            border: "1px solid transparent", 
                            borderRadius: "5px"
                        }}
                    ></iframe>
                </div>
            </div>
            <div className='footer-copy-right'>
                <small>&copy; Copyright 2022, Elio Gerges. All rights reserved.</small>
            </div>
        </div>
    )
}

export default footer;