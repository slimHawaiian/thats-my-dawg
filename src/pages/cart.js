import React, { Component } from 'react';
import FormattedNavigation from './../components/formatted-navigation';
import Address from './address';
import CartTable from '../components/cart-table';
import CreditCard from './credit-card';
import Confirmation from './../components/order-confirmation';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            showAddress:false,
            showCreditCard:false,
            checkoutButtonText:'checkout',
            creditCardtButtonText:'continue to credit card info'
        }
    } 
     
    render() { 
        const {showAddress,checkoutButtonText,showCreditCard,creditCardtButtonText,showConfirmation} = this.state;
        const onCheckout =() => {
            this.setState({showAddress:!this.state.showAddress});
            this.setState({checkoutButtonText: this.state.checkoutButtonText ==='back to cart'? 'checkout' : 'back to cart'});
        }  
        const onShowAddress = () =>{
            this.setState({showAddress:true});
            this.setState({showCreditCard:false});
            this.setState({showConfirmation:false});
            this.setState({creditCardtButtonText:'continue to credit card info'});
        } 
        const onShowCreditCard = () =>{
            const {creditCardtButtonText} = this.state;
            if(creditCardtButtonText === 'submit order'){
                this.setState({showConfirmation:true});
                this.setState({showAddress:false});
                this.setState({showCreditcard:false});
            }
            else{
                this.setState({showCreditCard:!this.state.showCreditCard});
                this.setState({creditCardtButtonText: creditCardtButtonText === 'continue to credit card info'? 'submit order' : 'continue to credit card info'});
            }           
        } 
       
        return ( 
            <>
                <FormattedNavigation/>
                <div className='container'>  
                    {!showAddress && !showCreditCard && <CartTable/>}   
                    {showAddress && !showCreditCard && <Address />}   
                    {showCreditCard && !showConfirmation && <CreditCard />} 
                    {showConfirmation && <Confirmation/>}

                    <div className='btn-group'>     
                        {!showCreditCard && <button id='btn-checkout' onClick={onCheckout} className='btn btn-primary-custom'>{checkoutButtonText}</button>}
                        {showCreditCard && showAddress && <button id='btn-address' onClick={onShowAddress} className='btn btn-primary-custom'>back to address</button>}
                        {showAddress && <button id='btn-credit-card' onClick={onShowCreditCard} className='btn btn-primary-custom'>{creditCardtButtonText}</button>}
                    </div>
                </div>
            </>
         );
    }
}
 
export default Cart;