import React, { useContext } from 'react';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'

import { CartSidebarContext } from '../CartSidebarContext';
import { CartContext } from '../CartContext';
import { CartList } from './CartList';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: 270,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 270,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
  })
)

export const CartSidebar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { cart } = useContext(CartContext);
  const { open, setOpen } = useContext(CartSidebarContext);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const totalPrice = cart.reduce(((prev, curr) => prev + curr.price), 0).toFixed(2);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography variant="h6">
          Total price: {totalPrice}
        </Typography>
      </div>
      <Divider />
      <CartList />
    </Drawer>
  );
}