import React, { Component } from 'react';
import propTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const {
      cartItemName,
      cartItemPrice,
      cartItemImage,
      cartItemQuantity,
    } = this.props;

    return (
      <div
        data-testid="shopping-cart-product-name"
      >
        <p>
          { cartItemName }
        </p>

        <p
          data-testid="shopping-cart-product-quantity"
        >
          { cartItemQuantity }
        </p>

        <p>
          { cartItemPrice }
        </p>

        <img
          src={ cartItemImage }
          alt={ cartItemName }
        />

      </div>
    );
  }
}

CartItem.propTypes = {
  cartItemName: propTypes.string,
  cartItemPrice: propTypes.number,
  cartItemImage: propTypes.string,
  cartItemQuantity: propTypes.number,
}.isRequired;

export default CartItem;
