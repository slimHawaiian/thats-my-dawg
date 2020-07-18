import React, { Component } from 'react';
import { Control, LocalForm } from 'react-redux-form';
import Confirmation from '../components/email-confirmation';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { showConfirmation:false  }
    }
    render() { 

        const {showConfirmation}=this.state;

        const onSubmit = (values) => {
            this.setState({showConfirmation:true});
            console.log("Current state is: " + JSON.stringify(values));
        }

        return ( 
            <>
                {!showConfirmation && <>
                <h1>Contact</h1>
                <div className='row'>
                    <div className='col-md-8'>
                        <LocalForm onSubmit={values => onSubmit(values)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Control.text model=".name" id="name" name="name"
                                        placeholder="name"
                                        className="form-control"
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Control.text model=".title" id="title" name="title"
                                        placeholder="title"
                                        className="form-control"
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <Control.textarea model=".description" id="description" name="description"
                                        rows="12"
                                        className="form-control"
                                    />
                            </div>                                
                            <button type="submit" className="btn btn-primary-custom">Submit</button>
                        </LocalForm>
                    </div>
                </div>
                </>}
                {showConfirmation && <Confirmation />}
            </>
         );
    }
}
 
export default ContactForm;