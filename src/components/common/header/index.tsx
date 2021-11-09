import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaOpencart } from "react-icons/fa";

import CompanyLogo from "./../../../assets/images/ejam_logo_Black.png";
import { openCartPopup } from "./../../../store/action";

interface HeaderProps {
  count: number;
  openCartPopup: () => void;
}

function HeaderMenu({ count, openCartPopup }: HeaderProps) {
  return (
    <nav>
      <Link to="/">
        <img src={CompanyLogo} height={20} alt="eJam" />
      </Link>

      <div className="floatRight" onClick={openCartPopup}>
        <span className="cartCount"> {count}</span>

        <FaOpencart size={30}></FaOpencart>
      </div>
    </nav>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.productInCart.length,
});

const mapDispatchToProps = {
  openCartPopup,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
