import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from "../../university-logo.svg";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="#1a237e indigo darken-4" dark expand="md" scrolling>
                    <NavbarBrand href="#">
                        <img src={logo} height="100" alt="logo"/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem active>
                              <NavLink to="#">Login</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">News</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Events</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Interview Prep</DropdownItem>
                                  <DropdownItem href="#">Networking</DropdownItem>
                                  <DropdownItem href="#">Fun</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        {/* <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav> */}
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Home;