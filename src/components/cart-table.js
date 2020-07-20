import React from 'react';
import { connect } from 'react-redux';
import {DeleteAll,DeleteFromCart} from '../redux/actions/cartAction';

const CartTable = (props) => {
    const {cart,deleteAllItems} = props; 
    const totalPrice = cart.reduce((sum,item) => sum + (item.price * item.quantity),0);
    const totalQuantity = cart.reduce((sum,item) => sum + item.quantity,0);

    const handleClearCart = () =>{
        deleteAllItems();
    }
    const deleteRow = (item) =>{
        props.deleteRow(item);
    }

    return (        
        <>
            <h1>Cart Total ${totalPrice}.00</h1>
            <div className='row d-flex justify-content-end'>
                <button id='btn-clear-cart' className='btn btn-link btn-muted d-flex justify-content-end' onClick={handleClearCart}>
                    <i className='fa fa-trash fa-2x text-danger'></i>
                </button>
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
                                <td >{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}.00</td>
                                <td><a href='#' onClick={() => deleteRow(item)}><i className='fa fa-trash fa-lg text-danger'>&nbsp;</i></a></td>
                            </tr>
                           )                           
                        })}
                        {cart.length > 0 && 
                            <tr>
                                <td>******</td>
                                <td>({totalQuantity} - Total Quantity)</td>
                                <td>(${totalPrice}.00 - Total Price)</td>
                                <td>******</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    );   
}

const mapStateToProps = state => ({cart: state.cart,})

const mapDispatchToProps = dispatch => {
    return{
        deleteAllItems : () => dispatch(DeleteAll()),  
        deleteRow : (item) => dispatch(DeleteFromCart(item))     
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartTable);