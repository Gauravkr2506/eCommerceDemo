import React from "react";

import "./cartItem.css";

export default function CartItem(props: any) {
  const {
    name,
    currency,
    description,
    id,
    imageUrl,
    price,
    shippingPrice,
    addedInCart,
  } = props;
  return (
    <div className="cartItemContainer">
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Shipping Price</td>
            <td>Sub Total</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <img className="image" src={imageUrl} alt={name} />
      <h4>{name}</h4>
    </div>
  );
}
