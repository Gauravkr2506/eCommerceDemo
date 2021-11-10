import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

import "./index.css";

import CartItemContainer from "./cartItemContainer";
import { closeCartPopup } from "./../../../store/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    // marginRight: 0,
    paddingRight: 0,
    // marginLeft: 0,
    paddingLeft: 0,
    // position: "relative",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
interface CartMOdalProps {
  productInCart: Array<any>;
  isModalOpen: boolean;
  onCloseModal: () => void;
  total: number;
  totalShippingCost: number;
  currency: string;
}
function CartModal(props: CartMOdalProps) {
  const history = useHistory();
  const { productInCart, isModalOpen, onCloseModal } = props;

  const handleCheckoutButtonClick = () => {
    history.replace("/shipping");
    onCloseModal();
  };
  const handleContinueShoppingButtonClick = () => {
    history.replace("/");
    onCloseModal();
  };
  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="cartContainer">
        <div className="cartHeader">
          <div className="cartHeading">
            Shopping Cart <span>({productInCart.length} Items)</span>
          </div>
          <IoMdClose onClick={onCloseModal} className="modalClose" />
        </div>
        <CartItemContainer boxClass="cartItemBox" />

        <div
          className="cartFooter"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 10,
            marginRight: 10,
          }}
        >
          <button
            onClick={handleContinueShoppingButtonClick}
            className="cartButton yellow"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleCheckoutButtonClick}
            className="cartButton green"
            style={{ marginLeft: 10 }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </Modal>
  );
}

interface StateInterface {
  productInCart: Array<any>;
  isModalOpen: boolean;
}
const mapStateToProps = (state: StateInterface) => ({
  productInCart: state.productInCart,
  currency: state.productInCart.length ? state.productInCart[0].currency : "",
  isModalOpen: state.isModalOpen,
  total: state.productInCart.reduce(
    (a: number, v: any) => parseFloat(a + (v.quantity * v.price).toFixed(2)),
    0
  ),
  totalShippingCost: state.productInCart.reduce(
    (a: number, v: any) => parseFloat(a + v.shippingPrice),
    0
  ),
});
const mapDispatchToProps = {
  onCloseModal: closeCartPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
