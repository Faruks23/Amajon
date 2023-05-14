import React, { useContext } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Privet/AuthProvider';
const Header = () => {
  const { user, Logout } = useContext(AuthContext);
  console.log(user);

  const handleLoguot = () => {
    Logout()
      .then(resul => {
      console.log(resul.user);
      })
      .catch(err => { 
        console.log(err.message);
      })
  }
  return (
    <nav>
      <div className="navbar flex justify-between px-16">
        <img src="../../../images/Logo.svg" alt="" />
        <div className="nav-list text-white ">
          <ul className="flex gap-7 cursor-pointer ho">
            {user && (
              <>
                {user.email ?user.email:user.displayName }
                <p onClick={handleLoguot} className="btn btn-link">
                  Sign Out
                </p>
              </>
            )}
            <Link to={"/"}>Shop</Link>
            <Link to={"/order"}>Order Review</Link>
            <Link to={"/inventory"}>Mange Inventory</Link>

            {user ? (
              <Link to={"/login"}>Log In</Link>
            ) : (
              <>
                <Link to={"/login"}>Log In</Link>
                <Link to={"/signup"}>Sign UP</Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;