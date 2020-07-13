import React, { Component } from 'react';
import FormattedNavigation from './../components/formatted-navigation';
import apacheHeliLink from '../img/apache.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <FormattedNavigation/>
                <div className='container'>
                    <h1>About</h1>
                    <div className='row'>
                       <div className='col-md-6'>
                            <img className='img-fluid' src={apacheHeliLink} alt='working dog'/>
                       </div> 
                       <div className='col-md-6'>
                           <h2>Thats My Dawg</h2>
                           <p>That's My Dawg is a fictitious online third party vendor that sources products for our Nations Working Dogs.</p>
                            <h2>Doggles</h2>
                            <p><a href='https://www.rexspecs.com/' target='_blank' rel="noopener noreferrer"> Rex Specs</a> are a proven piece of gear to help keep your dog safe from eye trauma, UV rays or anything else you might find on the next adventure. Whether you’re climbing 14ers, ripping down a mountain bike trail, stalking a pheasant or at the gun range, Rex Specs are the most comfortable and durable eye protection available for your dog.</p>
                            
                            <h2>Harnesses</h2>
                            <p>Trust <a href='https://www.rayallen.com' target='_blank' rel="noopener noreferrer"> Ray Allen Manufacturing</a> with your professional K9 gear and equipment needs. We have studied and worked with the professional K9 industry for Police K9, Military Working Dogs, Professional K9 Trainers and consumer dog markets. With this knowledge and community based approach Ray Allen has developed and manufactured some of the highest quality leads, leashes, bite suits and training aids.</p>
                       </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default About;