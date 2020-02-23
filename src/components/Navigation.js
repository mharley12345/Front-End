import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavlink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
          <Nav>
            <NavItem>
              <NavLink to='/home' tag={RRNavlink} >Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/receipts"  tag={RRNavlink}>Receipts</NavLink>
            </NavItem>  
            <NavItem>
                <NavLink to="/add-receipt"  tag={RRNavlink}>Add a Receipt</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink to="/home" onClick={() => localStorage.clear() } tag={RRNavlink}>Logout</NavLink>
            </NavItem>
         </Nav>
        </div>
    );
}

export default Navigation;