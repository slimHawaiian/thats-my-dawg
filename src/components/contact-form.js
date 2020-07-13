import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1>Contact</h1>
                <div className='row'>
                    <div className='col-md-8'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <textarea className="form-control" id="description" rows="4" cols="50" aria-describedby="description" placeholder="description"/>
                            </div>                                
                            <button type="submit" className="btn btn-primary-custom">Submit</button>
                        </form>
                    </div>
                </div>
            </>
         );
    }
}
 
export default ContactForm;