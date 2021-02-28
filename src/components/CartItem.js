import React, { useContext } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { CartContext } from '../CartContext';
import { CartSidebarContext } from '../CartSidebarContext';

export const CartItem = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const { setOpen } = useContext(CartSidebarContext);

  const removeFromCart = () => {
    const cartItems = cart.filter((_, i) => i !== props.index);
    setCart(cartItems);

    if (cartItems.length === 0) {
      setOpen(false);
    }
  }

  return (
    <>
      <ListItem>
        <ListItemText primary={props.name} secondary={`Price: ${props.price}`} />
        <ListItemSecondaryAction>
          <IconButton onClick={removeFromCart} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}