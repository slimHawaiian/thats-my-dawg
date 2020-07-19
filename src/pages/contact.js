import React from 'react';
import FormattedNavigation from './../components/formatted-navigation';
import ContactForm from '../components/contact-form';

const Contact = () => { 
    return (  
        <>
            <FormattedNavigation/>
            <div className='container'>                
                <ContactForm/>
            </div>
        </>
    );
}
 
export default Contact;