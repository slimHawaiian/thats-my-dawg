import React, { Component } from 'react'
import FormattedNavigation from './../components/formatted-navigation';
import dogglesLink from '../img/doggles.jpg';

class Doggles extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <FormattedNavigation/>
                <div className='container'>                
                    <h1>Doggles</h1>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={dogglesLink} className='img-fluid' alt='doggles'/>
                        </div>
                        <div className='col-md-6'>
                            <p><a href='https://www.rexspecs.com/collections/working-military/products/copy-of-rex-specs-original?variant=21805293633641' target="_blank">Rex Specs</a> dog goggles are protective eyewear for the active dog. They are stable and secure while still allowing for full jaw motion and field of view. Rex Specs protect your dogs eyes from debris, environmental hazards, and sun.</p>
                            <h2>$79.95</h2>
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
 
export default Doggles;