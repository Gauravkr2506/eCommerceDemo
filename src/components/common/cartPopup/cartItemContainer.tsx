import React from "react";
import { connect } from "react-redux";

import "./index.css";
import CartItem from "./cartItem";

interface CartItemContainerProps {
  productInCart: Array<any>;
  boxClass: string;

  total: number;
  totalShippingCost: number;
  currency: string;
}
const CartItemContainer = React.memo(function (props: CartItemContainerProps) {
  const { productInCart, boxClass, total, totalShippingCost, currency } = props;

  return (
    <>
      <div className="flex flexHeading">
        <div className="flex_5" style={{ marginLeft: 10 }}>
          Item
        </div>
        <div className="flex_2">Quantity</div>
        <div className="flex_2">Price</div>
        <div className="flex_3">Shipping Price</div>
        <div className="flex_2">Sub Total</div>
        <div className="flex_1"></div>
      </div>
      <div className={boxClass}>
        {productInCart.map((obj: any) => (
          <CartItem key={obj.id} {...obj} />
        ))}
      </div>
      <div
        className="totalContainer"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: 10,
          marginTop: 10,
        }}
      >
        <div className="">
          <div className="">
            <label className="bold">Total:</label>
            <span>
              {currency} {total}
            </span>
          </div>

          <div className="">
            <label className="bold">Shipping Charge:</label>
            <span className="">
              {currency} {totalShippingCost}
            </span>
          </div>
          <div className="">
            <label className="bold">Grand Total:</label>
            <span>
              {currency} {(total + totalShippingCost).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

interface StateInterface {
  productInCart: Array<any>;
}
const mapStateToProps = (state: StateInterface) => ({
  productInCart: state.productInCart,
  currency: state.productInCart.length ? state.productInCart[0].currency : "",

  total: state.productInCart.reduce(
    (a: number, v: any) => a + parseFloat((v.quantity * v.price).toFixed(2)),
    0
  ),
  totalShippingCost: state.productInCart.reduce(
    (a: number, v: any) => parseFloat(a + v.shippingPrice),
    0
  ),
});

export default connect(mapStateToProps)(CartItemContainer);
