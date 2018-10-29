import React from 'react'
import {
    Nav,
    NavItem
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

function SignedOut() {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" to="/signin">Sign in</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/signup">Sign up</NavLink>
            </NavItem>
        </Nav>
    )
}

export default SignedOut
