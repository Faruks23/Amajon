import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <div className="navbar flex justify-between px-16">
        <img src="../../../images/Logo.svg" alt="" />
        <div className="nav-list text-white ">
          <ul className='flex gap-7 cursor-pointer ho'>
             <Link to={'/'}>Shop</Link>
             <Link to={'/order'}>Order Review</Link>
             <Link to={'/inventory'}>Mange Inventory</Link>
             <Link to={'/login'}>Log In</Link>
    
          </ul>
         </div>

      </div>
      
    </nav>
  );
};

export default Header;