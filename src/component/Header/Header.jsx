import React from 'react';
import "./Header.css"
const Header = () => {
  return (
    <nav>
      <div className="navbar flex justify-between px-16">
        <img src="../../../images/Logo.svg" alt="" />
        <div className="nav-list text-white ">
          <ul className='flex gap-7 cursor-pointer ho'>
             <li>Order</li>
             <li>Order Review</li>
             <li>Mange Inventory</li>
             <li>Log In</li>
    
          </ul>
         </div>

      </div>
      
    </nav>
  );
};

export default Header;