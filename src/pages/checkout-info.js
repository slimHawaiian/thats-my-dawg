import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutInfo extends Component {
    
    render() { 
        const {cart} = this.props; 
        const total = cart.reduce((sum,item) => sum + (item.price * item.quantity),0);
        return ( 
            <>
            <h1>Check Out</h1>
                <div className='row mt-4'>
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
               
                <h2 className='mt-4'>Your Credit Card will be charged: ${total}.00</h2>
                <p className='text-danger'>*** Do not use your real credit card info ***</p>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" aria-describedby="cardNumber" placeholder="card number"/>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group">
                            <label htmlFor="date">Expiration Date</label>
                            <input type="date" className="form-control" id="date" aria-describedby="date" placeholder="date"/>
                        </div>
                    </div>            
                </div>
            </>
        );
    }
}
 
const mapStateToProps = state => ({cart: state.cart,})

export default connect(mapStateToProps) (CheckoutInfo);