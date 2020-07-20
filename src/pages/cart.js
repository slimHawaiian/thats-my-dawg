import React, { Component } from 'react';
import FormattedNavigation from './../components/formatted-navigation';
import CartTable from '../components/cart-table';
import CheckoutInfo from './checkout-info';
import Confirmation from './../components/order-confirmation';
import { connect } from 'react-redux';
import {DeleteAll} from '../redux/actions/cartAction';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            checkoutButtonText:'checkout',
            creditCardtButtonText:'continue to credit card info',
            showCheckoutInfo:false,
            submitButtonText:'submit'
        }
    } 
     
    render() { 
        const {checkoutButtonText,showCheckoutInfo,showConfirmation,submitButtonText} = this.state;
        const onCheckout =() => {
            this.setState({showCheckoutInfo:!this.state.showCheckoutInfo});
            this.setState({checkoutButtonText: this.state.checkoutButtonText ==='back to cart'? 'checkout' : 'back to cart'});
        }
         
        const onSubmit = () =>{
            this.setState({showConfirmation:true});
            this.setState({showCheckoutInfo:false});
            this.props.deleteAllItems();
        } 
               
        return ( 
            <>
                <FormattedNavigation/>
                <div className='container'>  
                    {!showCheckoutInfo && !showConfirmation && <CartTable/>}   
                    {showCheckoutInfo && !showConfirmation && <CheckoutInfo/>}                   
                    {showConfirmation && <Confirmation/>}

                    <div className='btn-group'>     
                        {!showConfirmation &&<button id='btn-checkout' onClick={onCheckout} className='btn btn-primary-custom'>{checkoutButtonText}</button>}     
                        {showCheckoutInfo &&  <button id='btn-confirmation' onClick={onSubmit} className='btn btn-primary-custom'>{submitButtonText}</button>}                   
                    </div>
                </div>
            </>
         );
    }
}
 
const mapStateToProps = state => ({cart: state.cart,})

const mapDispatchToProps = dispatch => {
    return{
        deleteAllItems : () => dispatch(DeleteAll()),  
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Cart);