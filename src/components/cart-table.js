import React from 'react';
import { connect } from 'react-redux';

const CartTable = (props) => {
    const {cart} = props; 
    const total = cart.reduce((sum,item) => sum + (item.price * item.quantity),0);
    return (        
        <>
            <h1>Cart Total ${total}.00</h1>
            <div className='row d-flex justify-content-end'>
                <button id='btn-clear-cart' className='btn btn-link btn-muted d-flex justify-content-end'>clear cart</button>
            </div>
           
            <div className="table-responsive">                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.map( (item,index) => {
                           return( 
                           <tr key={index}>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}.00</td>
                            </tr>
                           )                           
                        })} 
                        <tr>
                            <td></td>
                            <td></td>
                            <td> (${total}.00 - Total Price)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );   
}

const mapStateToProps = state =>{
    return  {
      cart: state.cart
    }
}

export default connect(mapStateToProps) (CartTable);