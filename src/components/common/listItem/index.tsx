import React from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import { toggleAddRemoveProductToCartAction } from "./../../../store/action";

interface ListItemProps {
  name: string;
  currency: string;
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  shippingPrice: number;
  toggleAddRemoveProductToCartAction: any;
  addedInCart: boolean;
}

function ListItem(props: ListItemProps) {
  //props
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

  //dispatch
  const { toggleAddRemoveProductToCartAction } = props;

  const toggleAddRemoveProductToCart = () => {
    toggleAddRemoveProductToCartAction({
      name,
      currency,
      description,
      id,
      imageUrl,
      price,
      shippingPrice,
      addedInCart,
    });
  };
  return (
    <div className="gridItemWith4Column card" key={id}>
      <img src={imageUrl} alt={name} />
      <div
        className={`addToCartIcon ${addedInCart && "addedToCart"}`}
        onClick={toggleAddRemoveProductToCart}
      >
        <FaShoppingCart />
      </div>

      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{description}</p>
        <h4>{`${currency} ${price}`}</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => ({
  addedInCart: state.productInCart.some((obj: any) => obj.id === ownProps.id),
});

const mapDispatchToProps = {
  toggleAddRemoveProductToCartAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
