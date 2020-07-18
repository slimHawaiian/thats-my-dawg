import React from 'react';
import { connect } from 'react-redux';

const CartTable = (props) => {
    return ( 
        <>
            <h1>Cart</h1>
            <button id='btn-clear-cart' className='btn btn-link btn-muted'>clear cart</button>
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
                        { props.cart.map( (item,index) => {
                           return( <tr key={index}>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                           )
                        })} 
                    </tbody>
                </table>
            </div>
        </>
    );   
}

const mapStateToProps = state =>{
    return  {
      cart: state,
    }
}

export default connect(mapStateToProps) (CartTable);