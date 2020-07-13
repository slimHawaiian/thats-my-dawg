import React from 'react';
import dogsLink from '../img/dawgs.jpg'


const Confirmation = () => {
    return (         
        <div className='row'>
            <div className='col-md-6'>
                <h1>Your order has been received!</h1>
                <img src={dogsLink} className='img-fluid' alt='my dawgs'/>
            </div>
        </div>
     );
}
 
export default Confirmation;