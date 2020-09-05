import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <MDBNav tabs color="purple" className="nav-justified">
                    <MDBNavItem>
                        <MDBNavLink active to="#!">Active</MDBNavLink>  
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Link1</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Link2</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Link3</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Link4</MDBNavLink>
                    </MDBNavItem>
                </MDBNav>  
            </BrowserRouter>
        )
    }
}

export default Header
