import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'


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
                    <NavbarBrand href="/"><NavLink className="nav-link" style={{color:'#FFF', fontWeight:'bold'}} to="/">MICAZOOK</NavLink></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Dashboard</NavLink>
                            </NavItem>                            
                            <NavItem>
                                <NavLink className="nav-link" to="/newproject">Create a new Project</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/signin">Sign in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Hakan GENC
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Logout
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Menu
