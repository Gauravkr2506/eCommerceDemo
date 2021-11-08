import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

import "./index.css";
import CartItem from "./cartItem";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface CartMOdalProps {
  productList: Array<any>;
}
function CartModal(props: CartMOdalProps) {
  const { productList } = props;

  const [modalIsOpen, setIsOpen] = React.useState(true);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="cartContainer">
        <div className="cartHeader">
          <div>
            Shopping Cart <span>(4 Items)</span>
          </div>
          <IoMdClose className="modalClose" />
        </div>
        {productList.map((obj: any) => (
          <CartItem {...obj} />
        ))}
      </div>
    </Modal>
  );
}

interface StateInterface {
  productList: Array<any>;
}
const mapStateToProps = (state: StateInterface) => ({
  productList: state.productList,
});

export default connect(mapStateToProps)(CartModal);
