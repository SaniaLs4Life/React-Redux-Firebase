import React, { Component } from 'react'
import {
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

class SignedIn extends Component {
    signedOut() {
        this.props.signOut()
    }
    render() {
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
                        <DropdownItem onClick={this.signedOut.bind(this)}>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn)
