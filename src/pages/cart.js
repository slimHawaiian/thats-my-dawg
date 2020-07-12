import React, { Component } from 'react';
import FormattedNavigation from './../components/formatted-navigation';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <FormattedNavigation/>
                <div className='container'>                
                    <h1>Cart</h1>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <button className='btn btn-primary-custom'>checkout</button>
                    <button className='btn btn-link text-muted'>clear cart</button>
                </div>
            </>
         );
    }
}
 
export default Cart;