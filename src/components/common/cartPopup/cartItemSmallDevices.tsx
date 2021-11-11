import React from "react";
import { connect } from "react-redux";
import { IoMdClose } from "react-icons/io";

import "./cartItemSmallDevicesStyle.css";
import {
  changeQuantity,
  toggleAddRemoveProductToCartAction,
} from "../../../store/action";

function CartItem(props: any) {
  const {
    name,
    currency,
    // description,
    id,
    imageUrl,
    price,
    shippingPrice,
    quantity,
    changeQuantity,
    toggleAddRemoveProductToCartAction,
  } = props;

  const changeCartItemQuantity = (e: any) => {
    changeQuantity(id, +e.target.value);
  };
  const deleteCartItem = () => {
    toggleAddRemoveProductToCartAction({ id, addedInCart: true });
  };
  return (
    <div className="cartItemContainer">
      {/* <div className="flex">
        <div className="flex_5 itemValueContainer">
          <img className="image" src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div
          className="flex_2 itemValueContainer"
          style={{ justifyContent: "center" }}
        >
          <select
            name="quantity"
            value={quantity}
            onChange={changeCartItemQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="flex_2 itemValueContainer">
          <div>{`${currency} ${price}`}</div>
        </div>
        <div className="flex_3 itemValueContainer">
          <div>{`${currency} ${price}`}</div>
        </div>
        <div className="flex_2 itemValueContainer">
          <div>{`${currency} ${(quantity * price).toFixed(2)}`}</div>
        </div>
        <div className="flex_1 itemValueContainer">
          <div>
            <IoMdClose onClick={deleteCartItem} />
          </div>
        </div>
      </div> */}
      <div className="smallDeviceCartItemContainer">
        <div className="row rowCenter">
          <img src={imageUrl} width="70px" height="70px" alt="img" />

          <div>
            <h3>{name}</h3>
          </div>
        </div>
        <br />
        <div className="row rowCenter">
          <select
            name="quantity"
            value={quantity}
            onChange={changeCartItemQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="row rowCenter">
          <div>
            Shipping Charge:{" "}
            <span className="bold">{`${currency} ${shippingPrice}`}</span>
          </div>
        </div>
        <div className="row rowCenter">
          <div>
            Sub Total:{" "}
            <span className="bold">{`${currency} ${(quantity * price).toFixed(
              2
            )}`}</span>
          </div>
        </div>

        <IoMdClose
          className="smallDeviceCartItemCloseButton"
          onClick={deleteCartItem}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  changeQuantity,
  toggleAddRemoveProductToCartAction,
};

export default connect(null, mapDispatchToProps)(CartItem);
