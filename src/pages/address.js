import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1>Address</h1>
                <div className='row'>
                    <div className='col-md-8'>
                        <form>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label htmlFor="first-name">First Name</label>
                                        <input type="text" className="form-control" id="first-name" aria-describedby="first-name" placeholder="first name"/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label htmlFor="last-name">Last Name</label>
                                        <input type="text" className="form-control" id="last-name" aria-describedby="last-name" placeholder="last name"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="form-control" id="city" aria-describedby="city" placeholder="city"/>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input type="text" className="form-control" id="state" aria-describedby="state" placeholder="state"/>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" className="form-control" id="zip" aria-describedby="zip" placeholder="zip"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Address;