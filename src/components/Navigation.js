import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/receipts">Receipts</NavLink>
            </NavItem>  
            <NavItem>
                <NavLink href="/add-receipt">Add a Receipt</NavLink>
            </NavItem> 
         </Nav>
        </div>
    );
}

export default Navigation;