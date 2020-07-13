import React,{Component} from 'react';

class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1>Credit Card</h1>
                <p className='text-danger'>*** Do not use your real credit card info ***</p>
                <h2 className='mb-5'>Your Credit Card will be charged: $00.00</h2>
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
 
export default CreditCard;