import React, { Component } from 'react';
import FormattedNavigation from './../components/formatted-navigation';
import Confirmation from '../components/email-confirmation';
import ContactForm from '../components/contact-form';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showConfirmation:false
         }
    }

    render() { 
        const {showConfirmation}=this.state;
        const onSubmit = () => {
            this.setState({showConfirmation:true});
        }

        return (  
            <>
                <FormattedNavigation/>
                <div className='container'>                
                   {!showConfirmation &&  <ContactForm/>}
                   {showConfirmation && <Confirmation />}
                </div>
            </>
        );
    }
}
 
export default Contact;