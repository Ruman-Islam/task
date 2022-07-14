import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const OurPortfolio = () => {
    return (
        <div className='my-5 bg-white'><br /><br /><br /><br />
            <div className='our-portfolio'>
                <h2 className='fw-bold'>Our Portfolio</h2>
                <div>
                    <span className='bg-light'> <FontAwesomeIcon icon={faArrowLeft} className='me-2' /></span>
                    <span className='bg-primary'>  <FontAwesomeIcon icon={faArrowRight} className='me-2' /></span>
                </div>
            </div>
        </div>
    );
};

export default OurPortfolio;