import React from 'react'
import {
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

function SignedIn() {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" to="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/newproject">Create a new Project</NavLink>
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
    )
}

export default SignedIn
