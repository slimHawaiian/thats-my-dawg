import React, { Component } from 'react'
import FormattedNavigation from './../components/formatted-navigation';
import harnessLink from '../img/harness.jpg';

class Harness extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
                            <h2>$229.99</h2>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="Quantity"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Harness;