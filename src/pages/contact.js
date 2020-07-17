import React, { Component } from 'react';
import FormattedNavigation from './../components/formatted-navigation';
import ContactForm from '../components/contact-form';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() {
        return (  
            <>
                <FormattedNavigation/>
                <div className='container'>                
                  <ContactForm/>
                </div>
            </>
        );
    }
}
 
export default Contact;