import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
          isNavOpen: false
        };
    }    

    render() {
        const toggleNav = () => {
            this.setState({isNavOpen: !this.state.isNavOpen});
        }
        const {cart} = this.props;
        const itemCount = (cart && cart.length > 0) ? cart.reduce((sum,item) => sum + item.quantity,0) : 0;
        return (            
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><h2>That's My Dawg</h2></NavbarBrand>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/doggles">
                                    <i className="fa fa-tripadvisor fa-lg" /> Doggles
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/harness">
                                    <i className="fa fa-briefcase" /> Harnesses
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <i className="fa fa-address-card fa-lg" /> Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/cart">
                                    <i className="fa fa-shopping-cart fa-lg" /> 
                                    &nbsp; Cart &nbsp;
                                    {(itemCount > 0) && <span className="badge badge-danger">{itemCount}</span>}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

const mapStateToProps = state =>{
    return  {
      cart: state.cart,
    }
}
export default connect(mapStateToProps) (Navigation);
