import React, { Component } from 'react'
import FormattedNavigation from './../components/formatted-navigation';
import { connect } from 'react-redux';
import harnessLink from '../img/harness.jpg';
import * as cartActions from '../redux/actions/cartAction';

class Harness extends Component {
    render() { 
        const {cart} = this.props; 
        const harnessCount = cart.reduce((sum,item) => item.description === 'Harness' ? sum + item.quantity : 0,0);
        const handleAddToCart = () =>{
            this.props.addItem({Id:2,description:'Harness',quantity:1,price:230});
        }
        return ( 
            <>
                <FormattedNavigation/>
                <div className='container'>                
                    <h1>Harness</h1>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={harnessLink} className='img-fluid' alt='harness'/>
                        </div>
                        <div className='col-md-6'>
                            <p>Made from top of the line 500D mil spec cordura, mil-spec webbing and hook and loop Velcro, the sides of the Icon Harness slope down from the shoulder to about the mid rib area.  This allows for more coverage, and the four GT Cobra buckles on the material eliminates worries about the strap or buckle rubbing your dog. </p>
                            <h2>$230.00</h2>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" readonly value = {harnessCount} placeholder="Quantity" aria-label="Quantity" aria-describedby="Quantity"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" onClick={handleAddToCart} type="button"><i className='fa fa-plus'></i></button>
                                    <button className="btn btn-outline-danger" type="button"><i className='fa fa-minus'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
const mapStateToProps = state=>{
    return{
        cart:state.cart,
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        addItem: item => {dispatch(cartActions.AddToCart(item))},       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Harness)