import React from 'react';
import dogsLink from '../img/smiling-doggles.jpg'


const EmailConfirmation = () => {
    return (         
        <div className='row'>
            <div className='col-md-6'>
                <h1>Your Email has been received!</h1>
                <img src={dogsLink} className='img-fluid' alt='my dawg'/>
            </div>
        </div>
     );
}
 
export default EmailConfirmation;