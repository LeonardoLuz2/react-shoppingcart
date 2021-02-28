import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

export const Book = (props) => {
  const { setCart } = useContext(CartContext);

  const addToCart = () => {
    const book = { name: props.title, price: props.price };
    setCart(products => [...products, book]);
  }

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.title} secondary={props.author} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="add" onClick={addToCart}>
            <AddShoppingCartIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}