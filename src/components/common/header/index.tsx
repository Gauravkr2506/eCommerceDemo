import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { FaOpencart } from "react-icons/fa";

import CompanyLogo from "./../../../assets/images/ejam_logo_Black.png";

interface HeaderProps {
  count: number;
}

function HeaderMenu({ count }: HeaderProps) {
  return (
    <nav>
      <NavLink exact activeClassName="activeMenuItem" to="/">
        <img src={CompanyLogo} height={20} alt="eJam" />
      </NavLink>
      <NavLink exact activeClassName="activeMenuItem" to="/about">
        About
      </NavLink>

      <NavLink
        className="floatRight"
        exact
        activeClassName="activeMenuItem"
        to="/users"
      >
        <span className="cartCount"> {count}</span>

        <FaOpencart size={30}></FaOpencart>
      </NavLink>
    </nav>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.productInCart.length,
});
export default connect(mapStateToProps)(HeaderMenu);
