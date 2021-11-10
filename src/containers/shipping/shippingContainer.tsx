import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "./shippingContainerStyle.css";
import CartItemContainer from "./../../components/common/cartPopup/cartItemContainer";
import { submitShippingFormData } from "./../../store/action";

function ShippingContainer(props: any) {
  const history = useHistory();
  const { currency, total, totalShippingCost, submitShippingFormData } = props;
  const onSubmitForm = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    for (let i = 0; i < e.target.length - 1; i++) {
      let name = e.target[i].name;
      obj[name] = e.target[i].value;
    }

    submitShippingFormData({ ...obj, currency, total, totalShippingCost }).then(
      (data: any) => {
        history.replace("/eCommerceDemo");
      }
    );
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Shipping</h1>
      </div>
      <div className="shippingContainer">
        <div className="flex_1 cardInformationContainer">
          <CartItemContainer boxClass="shippingItemBox" />
        </div>
        <div className="flex_1">
          <div className="cardInformationContainer">
            <form onSubmit={onSubmitForm}>
              <label htmlFor="name">Name:</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="name on card"
              />
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                required
                minLength={16}
                maxLength={16}
                // pattern="[0-9]"
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="card number"
              />
              <br />
              <br />
              <label htmlFor="expiry">Expiry:</label>
              <input
                maxLength={5}
                minLength={5}
                required
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM / YY"
              />
              <label htmlFor="cvv">CVV:</label>
              <input
                maxLength={3}
                minLength={3}
                pattern="[0-9]"
                required
                type="number"
                id="cvv"
                name="cvv"
                placeholder="cvv"
              />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => ({
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

const mapDispatchToProps = {
  submitShippingFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingContainer);
