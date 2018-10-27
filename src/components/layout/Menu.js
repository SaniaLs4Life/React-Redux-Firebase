import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap'

import { NavLink } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut';



class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/"><NavLink className="nav-link" style={{color:'#FFF', fontWeight:'bold', fontSize:'22px'}} to="/">MICAZOOK</NavLink></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <SignedIn />
                        <SignedOut />
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Menu
