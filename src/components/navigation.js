import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (            
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><h2>That's My Dawg</h2></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
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
                                    <i className="fa fa-shopping-cart fa-lg" /> Cart
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}
export default Navigation;