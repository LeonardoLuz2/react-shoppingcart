import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

import { CartItem } from './CartItem';
import List from '@material-ui/core/List';

export const CartList = () => {
  const { cart } = useContext(CartContext);

  return (
    <List>
      {
        cart.map((item, index) => (
          <CartItem name={item.name} price={item.price} key={index} index={index} />
        ))
      }
    </List>
  )
}